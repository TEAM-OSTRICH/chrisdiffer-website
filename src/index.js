import React, { Component } from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './client/App.jsx';
import store from './store.js';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
