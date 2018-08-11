import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import AppRouter from './App/Routing';
import configureStore from './App/Store/configureStore';
import registerServiceWorker from './registerServiceWorker';

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
