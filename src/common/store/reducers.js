import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signinReducer from 'signin/reducer';

const reducers = combineReducers({
  router: routerReducer,
  signin: signinReducer,
});

export default reducers;
