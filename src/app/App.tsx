import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'layout/header/Header'
import appRoutes from './routes'
import './App.scss';


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        {appRoutes.map(route => (
          <Route key={route.name} path={route.path} exact={route.exact} component={route.view} />
        ))}
        <Route path='/'>
          <Redirect to="/search"></Redirect>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
