import { all, fork, take, put, select } from 'redux-saga/effects';
import { post } from 'common/utils/http';
import {
  FETCH_DASHBOARD_DATA,
  fetchDashboardDataSuccess,
  fetchDashboardDataFailed,
} from '../actions';

function* watchFetchDashboardData() {
  while (true) {
    yield take(FETCH_DASHBOARD_DATA);

    try {
      const plaidPublicToken = yield select(state => state.signin.plaidToken);

      yield post('/v1/plaidLogin', {
        plaidPublicToken,
      });

      const response = yield post('/v1/dashboard', {
        plaidPublicToken,
      });

      yield put(fetchDashboardDataSuccess(response));
    } catch (error) {
      yield put(fetchDashboardDataFailed(error.message, error.code));
    }
  }
}

export default function* sagas() {
  yield all([
    fork(watchFetchDashboardData),
  ]);
}
