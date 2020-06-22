export interface MapState {
  geoJSON: any;
  parsedCSV: any;
}

export const SET_GEOJSON = 'SET_GEOJSON';
export const SET_PARSED_CSV = 'SET_PARSED_CSV';

interface SetGEOJSONAction {
  type: typeof SET_GEOJSON;
  payload: any;
}

interface SetParsedCSVAction {
  type: typeof SET_PARSED_CSV;
  payload: any;
}

export type MapActionTypes = SetGEOJSONAction | SetParsedCSVAction;
