import { all, fork, take, put } from 'redux-saga/effects';
import { post } from 'common/utils/http';
import { Base64 } from 'js-base64/base64';
import { push } from 'react-router-redux';
import {
  LOGIN,
  loginSuccess,
  loginFailed,
  SIGNUP,
  signupSuccess,
  signupFailed,
  VERIFY,
  verifySuccess,
  verifyFailed,
  LOGOUT,
} from '../actions';

function* login() {
  while (true) {
    const { email, password } = yield take(LOGIN);

    try {
      const response = yield post('/v1/login', {
        email,
        password: Base64.encode(password),
      });

      yield put(loginSuccess(response.token));
    } catch (error) {
      yield put(loginFailed(error.message, error.code));
    }
  }
}

function* signup() {
  while (true) {
    const { email, password } = yield take(SIGNUP);

    try {
      const response = yield post('/v1/signup', {
        email,
        password: Base64.encode(password),
      });

      yield put(signupSuccess(response.token));
    } catch (error) {
      yield put(signupFailed(error.message, error.code));
    }
  }
}

function* verify() {
  while (true) {
    const { id, code } = yield take(VERIFY);

    try {
      const response = yield post('/v1/verify', {
        id,
        code,
      });

      yield put(verifySuccess(response.token));
    } catch (error) {
      yield put(verifyFailed(error.message, error.code));
    }
  }
}

function* watchLogout() {
  while (true) {
    yield take(LOGOUT);
    yield put(push('/'));
  }
}

export default function* sagas() {
  yield all([
    fork(login),
    fork(signup),
    fork(verify),
    fork(watchLogout),
  ]);
}
