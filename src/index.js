import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import AppRouter from './App/Routing/AppRouter.container';
import configureStore from './App/Store/configureStore';
import registerServiceWorker from './registerServiceWorker';

//  eslint-disable-next-line
import './App/Assets/Scss/material-dashboard-pro-react.css?v=1.3.0';

const reduxStore = configureStore();
const history = createBrowserHistory();
ReactDOM.render(
  (
    <Provider store={reduxStore}>
      <Router history={history}>
        <AppRouter />
      </Router>
    </Provider>
  ),
  document.getElementById('root'),
);
registerServiceWorker();
