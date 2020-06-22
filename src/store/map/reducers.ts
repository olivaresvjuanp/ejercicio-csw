import {
  MapState,
  SET_GEOJSON,
  SET_PARSED_CSV,
  MapActionTypes
} from './types';

const initialState: MapState = {
  geoJSON: null,
  parsedCSV: null
};

export function mapReducer(
  state = initialState,
  action: MapActionTypes
): MapState {
  switch (action.type) {
    case SET_GEOJSON: {
      return {
        ...state,
        geoJSON: action.payload
      };
    }

    case SET_PARSED_CSV: {
      return {
        ...state,
        parsedCSV: action.payload
      };
    }

    default:
      return state;
  }
}
