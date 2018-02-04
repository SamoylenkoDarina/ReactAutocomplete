import { createStore, applyMiddleware } from 'redux';

import { request } from './middlewares'

import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(request)
);
