import React from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import reducers from 'reducers';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

export default ({ children, initialState = {} }) => (
  <Provider
    store={
      createStore(
        reducers,
        initialState,
        applyMiddleware(async, stateValidator))
    }>
    {children}
  </Provider>
)
