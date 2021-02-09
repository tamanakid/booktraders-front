import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import muiTheme from 'styles/muiTheme'
import App from './app/App';
import './styles/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MuiThemeProvider theme={muiTheme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
