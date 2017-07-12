import { RSAA } from 'redux-api-middleware';
import { Base64 } from 'js-base64/base64';
import * as types from './actionTypes';

export const resetAuthState = () => ({
  type: types.RESET_AUTH_STATE,
});

export const clearError = () => ({
  type: types.CLEAR_ERROR,
});

export const login = (email, password) => ({
  [RSAA]: {
    endpoint: '/v1/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password: Base64.encode(password),
    }),
    types: [types.LOGIN_REQUEST, types.LOGIN_SUCCESS, types.LOGIN_FAILED],
  },
});

export const signup = (email, password) => ({
  [RSAA]: {
    endpoint: '/v1/signup',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password: Base64.encode(password),
    }),
    types: [types.SIGNUP_REQUEST, types.SIGNUP_SUCCESS, types.SIGNUP_FAILED],
  },
});

export const verify = (email, code) => ({
  [RSAA]: {
    endpoint: '/v1/verify',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      code,
    }),
    types: [types.VERIFY_REQUEST, types.VERIFY_SUCCESS, types.VERIFY_FAILED],
  },
});
