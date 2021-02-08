import React, { useState } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from 'layout/header/Header'
import appRoutes from './routes'
import './App.scss';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3C6E71'
    },
    secondary: {
      main: '#284B63'
    }
  }
});


const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <Header />
        <Switch>
          {appRoutes.map(route => (
            <Route key={route.name} path={route.path} exact={route.exact} component={route.view} />
          ))}
          <Route path='/'>
            <Redirect to="/search"></Redirect>
          </Route>
        </Switch>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
