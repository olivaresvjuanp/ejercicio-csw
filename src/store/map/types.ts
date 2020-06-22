export interface MapState {
  csv: any; //
  geoJSON: any; //
}

export const SET_CSV = 'SET_CSV';
export const SET_GEOJSON = 'SET_GEOJSON';

interface SetCSVAction {
  type: typeof SET_CSV;
  payload: any;
}

interface SetGEOJSONAction {
  type: typeof SET_GEOJSON;
  payload: any;
}

export type MapActionTypes = SetCSVAction | SetGEOJSONAction;
