import {
  MapState,
  SET_CSV,
  SET_GEOJSON,
  MapActionTypes
} from './types';

const initialState: MapState = {
  csv: null,
  geoJSON: null
};

export function mapReducer(
  state = initialState,
  action: MapActionTypes
): MapState {
  switch (action.type) {
    case SET_CSV: {
      return {
        ...state,
        csv: action.payload
      };
    }

    case SET_GEOJSON: {
      return {
        ...state,
        geoJSON: action.payload
      };
    }

    default:
      return state;
  }
}
