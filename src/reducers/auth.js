import jwtDecode from 'jwt-decode';
import * as types from 'actions/actionTypes';

const initialState = {
  token: null,
  user: {
    id: null,
    email: '',
    verified: false,
  },
  isAuthenticated: false,
  isAuthenticating: false,
  isSigningUp: false,
  isVerifying: false,
  errorCode: null,
  errorText: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_AUTH_STATE:
      return Object.assign({}, initialState);
    case types.CLEAR_ERROR:
      return Object.assign({}, state, {
        errorCode: null,
        errorText: '',
      });
    case types.LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticating: true,
      });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        token: action.payload.token,
        user: jwtDecode(action.payload.token).user,
        errorCode: null,
        errorText: '',
      });
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSigningUp: true,
      });
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isSigningUp: false,
        isAuthenticated: true,
        jwtToken: action.payload.token,
        user: jwtDecode(action.payload.token).user,
        errorCode: null,
        errorText: '',
      });
    case types.VERIFY_REQUEST:
      return Object.assign({}, state, {
        isVerifying: true,
      });
    case types.VERIFY_SUCCESS:
      return Object.assign({}, state, {
        isVerifying: false,
        token: action.payload.token,
        user: jwtDecode(action.payload.token).user,
        errorCode: null,
        errorText: '',
      });
    case types.LOGIN_FAILED:
    case types.SIGNUP_FAILED:
      return Object.assign({}, state, {
        ...initialState,
        error: action.payload.response ? action.payload.response.code : null,
        errorText: action.payload.response ? action.payload.response.message : 'Something bad happened, Please try again later',
      });
    case types.VERIFY_FAILED:
      return Object.assign({}, state, {
        isVerifying: false,
        error: action.payload.response ? action.payload.response.code : null,
        errorText: action.payload.response ? action.payload.response.message : 'Something bad happened, Please try again later',
      });
    default:
      return state;
  }
};

export default auth;
