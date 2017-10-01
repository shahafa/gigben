/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import persistState from 'redux-localstorage';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === 'production' ||
  !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const enhancer = composeEnhancers(
  persistState(),
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  ),
);

const store = createStore(rootReducer, enhancer);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default; // eslint-disable-line global-require
    store.replaceReducer(nextReducer);
  });
}

rootSaga.map(saga => sagaMiddleware.run(saga));
store.close = () => store.dispatch(END);

export default store;
