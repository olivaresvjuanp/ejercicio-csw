import {
  SET_GEOJSON,
  SET_PARSED_CSV
} from "./types";

export function setGeoJSON(geoJSON: any) {
  return {
    type: SET_GEOJSON,
    payload: geoJSON
  };
}

export function setParsedCSV(csv: any) {
  return {
    type: SET_PARSED_CSV,
    payload: csv
  };
}
