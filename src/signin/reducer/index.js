import jwtDecode from 'jwt-decode';
import * as types from '../actions';

const initialState = {
  id: null,
  email: '',
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  isSigningup: false,
  isVerified: false,
  isVerifying: false,
  errorCode: null,
  errorText: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_CLEAR_ERROR:
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
        id: jwtDecode(action.payload.token).user.id,
        email: jwtDecode(action.payload.token).user.email,
        token: action.payload.token,
        isAuthenticated: true,
        isAuthenticating: false,
        isVerified: jwtDecode(action.payload.token).user.verified,
        errorCode: null,
        errorText: '',
      });
    case types.SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isSigningup: true,
      });
    case types.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        id: jwtDecode(action.payload.token).user.id,
        email: jwtDecode(action.payload.token).user.email,
        token: action.payload.token,
        isAuthenticated: true,
        isSigningup: false,
        isVerified: jwtDecode(action.payload.token).user.verified,
        errorCode: null,
        errorText: '',
      });
    case types.VERIFY_REQUEST:
      return Object.assign({}, state, {
        isVerifying: true,
      });
    case types.VERIFY_SUCCESS:
      return Object.assign({}, state, {
        id: jwtDecode(action.payload.token).user.id,
        email: jwtDecode(action.payload.token).user.email,
        token: action.payload.token,
        isVerified: jwtDecode(action.payload.token).user.email,
        isVerifying: false,
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
