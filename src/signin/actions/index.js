export const LOGIN = 'LOGIN';
export const login = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  token,
});

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = (code, message) => ({
  type: LOGIN_FAILED,
  code,
  message,
});

export const SIGNUP = 'SIGNUP';
export const signup = (email, password) => ({
  type: SIGNUP,
  email,
  password,
});

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const signupSuccess = token => ({
  type: SIGNUP_SUCCESS,
  token,
});

export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const signupFailed = (code, message) => ({
  type: SIGNUP_FAILED,
  code,
  message,
});

export const VERIFY = 'VERIFY';
export const verify = (id, code) => ({
  type: VERIFY,
  id,
  code,
});

export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const verifySuccess = token => ({
  type: VERIFY_SUCCESS,
  token,
});

export const VERIFY_FAILED = 'VERIFY_FAILED';
export const verifyFailed = (code, message) => ({
  type: VERIFY_FAILED,
  code,
  message,
});

export const RESET_USER_STATE = 'RESET_USER_STATE';
export const resetUserState = () => ({
  type: RESET_USER_STATE,
});

export const SIGNIN_CLEAR_ERROR = 'SIGNIN_CLEAR_ERROR';
export const clearError = () => ({
  type: SIGNIN_CLEAR_ERROR,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});
