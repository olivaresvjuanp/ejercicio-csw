import { Action } from 'redux';

import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';

import axios, { AxiosResponse } from 'axios';
import parse from 'csv-parse';

import { AppState } from './store';

import {
  setCSV,
  setGeoJSON
} from './store/map/actions';

export const thunkGetCSV = (): ThunkAction<void, AppState, null, Action> => {
  return (dispatch: ThunkDispatch<AppState, null, Action>, getState: () => AppState): void => {
    axios.get('http://cswcl.github.io/fake-api/monumentos_historicos_extracto.csv')
      .then((response: AxiosResponse): void => {
        console.debug('getCSV response', response);

        if (response.status === 200) {
          parse(response.data, (error: any, output: any): void => {
            if (error)
              console.error(error);

            dispatch(setCSV(output));
          });
        } else {
          // ...
        }
      })
      .catch((error): void => {
        console.error('Error:', error);
        // ...
      });
  };
};

export const thunkGetGeoJSON = (): ThunkAction<void, AppState, null, Action> => {
  return (dispatch: ThunkDispatch<AppState, null, Action>, getState: () => AppState): void => {
    axios.get('https://cswcl.github.io/fake-api/monumentos_historicos_extracto.geojson')
      .then((response: AxiosResponse): void => {
        console.debug('getGeoJSON response', response);

        if (response.status === 200) {
          dispatch(setGeoJSON(response.data));
        } else {
          // ...
        }
      })
      .catch((error): void => {
        console.error('Error:', error);
        // ...
      });
  };
};
