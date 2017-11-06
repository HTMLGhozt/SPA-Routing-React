import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import './index.css';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Router>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
