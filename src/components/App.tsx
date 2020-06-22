import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

import { MuiThemeProvider, Theme, createMuiTheme } from '@material-ui/core/styles';

import MapContainer from '../containers/MapContainer';

import './App.scss';

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#84B369'
    },
    secondary: {
      main: '#314931'
    }
  }
});

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color='secondary'>
        <Toolbar variant='dense'>
          <Typography>Fake API</Typography>
        </Toolbar>
      </AppBar>
      <MapContainer />
    </MuiThemeProvider>
  );
}

export default App;
