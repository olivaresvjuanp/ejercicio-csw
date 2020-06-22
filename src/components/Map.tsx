import React from 'react';

import { CSSTransition } from 'react-transition-group';

import {
  Map as ReactLeafletMap,
  TileLayer,
  GeoJSON as GeoJSONComponent,
  Popup
} from 'react-leaflet';

import config from '../config.json';
import { MapState } from '../store/map/types';

import './Map.scss';

interface MapProps {
  mapReducer: MapState;
  thunkGetCSV: any;
  thunkGetGeoJSON: any;
}

interface MapLocalState {
  loading: boolean;
  showContent: boolean;

  popup: {
    data: {
      id: number;
      latitude: number;
      longitude: number;
      name: string;
    };

    show: boolean;
  };
}

class Map extends React.Component<MapProps, MapLocalState> {
  constructor(props: MapProps) {
    super(props);

    this.state = {
      loading: true,
      showContent: false,
      popup: {
        data: {
          id: 0,
          latitude: 0,
          longitude: 0,
          name: ''
        },
        show: false
      }
    };
  }

  componentDidMount() {
    Promise.all([this.props.thunkGetCSV(), this.props.thunkGetGeoJSON()])
      .then((): void => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        <CSSTransition
          classNames='fade'
          in={this.state.loading}
          onExited={(): void => {
            this.setState({ showContent: true });
          }}
          timeout={250}
          unmountOnExit
        >
          <div id='loading-container'>
            <img src="./loading.svg" alt="loading" />
          </div>
        </CSSTransition>
        <CSSTransition
          classNames='fade'
          in={this.state.showContent}
          timeout={250}
          unmountOnExit
        >
          <ReactLeafletMap
            center={[-33.437933957, -70.651292865]}
            style={{
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
              top: 48
            }}
            zoom={15}
          >
            <TileLayer
              attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
              url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/512/{z}/{x}/{y}@2x?access_token=${config.mapbox.token}`}
            >
            </TileLayer>
            <GeoJSONComponent
              data={this.props.mapReducer.geoJSON}
              onEachFeature={(feature: any, layer: any): void => {
                layer.on('click', () => {
                  console.debug('feature clicked');
                  console.debug('feature', feature);
                  console.debug('layer', layer);

                  // Obtener el nombre del monumento.
                  let monumentName: string;

                  for (let i of this.props.mapReducer.parsedCSV) {
                    if (i[0] == feature.properties.id) {
                      monumentName = i[1];
                    }
                  }

                  this.setState((prevState: Readonly<MapLocalState>, props: Readonly<MapProps>): MapLocalState => ({
                    ...prevState,
                    popup: {
                      data: {
                        id: feature.properties.id,
                        latitude: feature.geometry.coordinates[1],
                        longitude: feature.geometry.coordinates[0],
                        name: monumentName
                      },
                      show: true
                    }
                  }));
                });
              }}
            />
            {this.state.popup.show &&
              <Popup
                onClose={(): void => {
                  this.setState((prevState: Readonly<MapLocalState>, props: Readonly<MapProps>): MapLocalState => ({
                    ...prevState,
                    popup: {
                      ...prevState.popup,
                      show: false
                    }
                  }));
                }}
                position={[this.state.popup.data.latitude, this.state.popup.data.longitude]}
              >
                <h4>{this.state.popup.data.name}</h4>
                <p>{this.state.popup.data.latitude + ', ' + this.state.popup.data.longitude}</p>
              </Popup>
            }
          </ReactLeafletMap>
        </CSSTransition>
      </React.Fragment>
    );
  }
}

export default Map;
