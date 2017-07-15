import { combineReducers } from 'redux';
import signinReducer from 'signin/reducer';

const reducers = combineReducers({
  signin: signinReducer,
});

export default reducers;
