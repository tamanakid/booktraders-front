import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import appRoutes from './routes'
import RouteLayout from 'layout/route-layout/RouteLayout'
import './App.scss';



const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map(route => {
          return (
            <RouteLayout route={route} children={
              <Route key={route.name} path={route.path} component={route.component} exact={route.exact} />
            }/>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
