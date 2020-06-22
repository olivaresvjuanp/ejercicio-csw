import { connect } from 'react-redux';

import Map from '../components/Map';
import { AppState } from '../store';

import {
  thunkGetCSV,
  thunkGetGeoJSON
} from '../thunks';

import {
  // ...
} from '../store/map/actions';

const mapStateToProps = (state: AppState) => ({
  mapReducer: state.mapReducer
});

const mapDispatchToProps = {
  thunkGetCSV,
  thunkGetGeoJSON
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
