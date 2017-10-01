import { all, fork, take, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-105009613-1');

function* watchLocationChange() {
  while (true) {
    yield take(LOCATION_CHANGE);

    const location = yield select(state => state.router.location);

    ReactGA.set({ page: location.pathname + location.search });
    ReactGA.pageview(location.pathname + location.search);
  }
}

export default function* sagas() {
  yield all([
    fork(watchLocationChange),
  ]);
}
