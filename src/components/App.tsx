import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  IconButton
} from '@material-ui/core';

import {
  MuiThemeProvider,
  Theme,
  createMuiTheme,
  makeStyles
} from '@material-ui/core/styles';

import { GitHub as GitHubIcon } from '@material-ui/icons';

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

const useStyles = makeStyles({
  button: {
    position: 'absolute',
    right: 0
  }
});

const App: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color='secondary'>
        <Toolbar variant='dense'>
          <Typography>Fake API</Typography>
          <Tooltip arrow title='Visit GitHub repository'>
            <IconButton
              className={classes.button}
              onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
                window.open('https://github.com/olivaresvjuanp/ejercicio-csw', '_blank');
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <MapContainer />
    </MuiThemeProvider>
  );
}

export default App;
