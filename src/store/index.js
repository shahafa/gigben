import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import persistState from 'redux-localstorage';
import rootReducer from 'reducers';
import DevTools from 'components/common/DevTools';

const enhancer = compose(
  applyMiddleware(apiMiddleware),
  process.env.NODE_ENV === 'production' ? persistState() : applyMiddleware(),
  process.env.NODE_ENV === 'development' ? DevTools.instrument() : applyMiddleware(),
);

const store = createStore(rootReducer, enhancer);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default; // eslint-disable-line global-require
    store.replaceReducer(nextReducer);
  });
}

export default store;
