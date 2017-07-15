import { RSAA } from 'redux-api-middleware';
import { Base64 } from 'js-base64/base64';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const login = (email, password) => ({
  [RSAA]: {
    endpoint: '/v1/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password: Base64.encode(password),
    }),
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED],
  },
});


export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const signup = (email, password) => ({
  [RSAA]: {
    endpoint: '/v1/signup',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password: Base64.encode(password),
    }),
    types: [SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILED],
  },
});


export const VERIFY_REQUEST = 'VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const VERIFY_FAILED = 'VERIFY_FAILED';

export const verify = (id, code) => ({
  [RSAA]: {
    endpoint: '/v1/verify',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id,
      code,
    }),
    types: [VERIFY_REQUEST, VERIFY_SUCCESS, VERIFY_FAILED],
  },
});


export const SIGNIN_CLEAR_ERROR = 'SIGNIN_CLEAR_ERROR';

export const clearError = () => ({
  type: SIGNIN_CLEAR_ERROR,
});
