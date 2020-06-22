import {
  SET_CSV,
  SET_GEOJSON
} from "./types";

export function setCSV(csv: any) {
  return {
    type: SET_CSV,
    payload: csv
  };
}

export function setGeoJSON(geoJSON: any) {
  return {
    type: SET_GEOJSON,
    payload: geoJSON
  };
}
