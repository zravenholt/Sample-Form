import React from 'react';
import {render} from 'react-dom';
import App from './containers/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/reducersIndex.js';

const reduxStore = createStore(allReducers);

render((
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));
