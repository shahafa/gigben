import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import persistState from 'redux-localstorage';
import { DevTools } from 'common/components';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  persistState(),
  applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
  ),
  process.env.NODE_ENV === 'development' ? DevTools.instrument() : applyMiddleware(),
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
