import jwtDecode from 'jwt-decode';
import * as types from '../actions';

const initialState = {
  id: null,
  email: '',
  token: '',
  isAuthenticated: false,
  isAuthenticating: false,
  isSigningup: false,
  isVerified: false,
  isVerifying: false,
  errorCode: null,
  errorText: '',
  plaidToken: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_CLEAR_ERROR:
      return {
        ...state,
        errorCode: null,
        errorText: '',
      };
    case types.LOGIN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case types.LOGIN_SUCCESS: {
      const decodedToken = jwtDecode(action.token);
      return {
        ...state,
        id: decodedToken.user.id,
        email: decodedToken.user.email,
        token: action.token,
        isAuthenticated: true,
        isAuthenticating: false,
        isVerified: decodedToken.user.verified,
        errorCode: null,
        errorText: '',
      };
    }
    case types.SIGNUP:
      return {
        ...state,
        isSigningup: true,
      };
    case types.SIGNUP_SUCCESS: {
      const decodedToken = jwtDecode(action.token);
      return {
        ...state,
        id: decodedToken.user.id,
        email: decodedToken.user.email,
        token: action.token,
        isAuthenticated: true,
        isSigningup: false,
        isVerified: decodedToken.user.verified,
        errorCode: null,
        errorText: '',
      };
    }
    case types.VERIFY:
      return {
        ...state,
        isVerifying: true,
      };
    case types.VERIFY_SUCCESS: {
      const decodedToken = jwtDecode(action.token);
      return {
        ...state,
        id: decodedToken.user.id,
        email: decodedToken.user.email,
        token: action.token,
        isVerified: decodedToken.user.verified,
        isVerifying: false,
        errorCode: null,
        errorText: '',
      };
    }
    case types.LOGIN_FAILED:
    case types.SIGNUP_FAILED:
      return {
        ...initialState,
        error: action.code,
        errorText: action.message ? action.message : 'Something bad happened, Please try again later',
      };
    case types.VERIFY_FAILED:
      return {
        ...state,
        isVerifying: false,
        error: action.code,
        errorText: action.message ? action.message : 'Something bad happened, Please try again later',
      };
    case types.RESET_USER_STATE:
    case types.LOGOUT:
      return {
        ...initialState,
      };
    case types.SET_PLAID_TOKEN:
      return {
        ...state,
        plaidToken: action.token,
      };
    default:
      return state;
  }
};

export default auth;
