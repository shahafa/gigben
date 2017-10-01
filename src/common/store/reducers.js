import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import signinReducer from 'signin/reducer';
import dashboardReducer from 'dashboard/reducer';

const reducers = combineReducers({
  router: routerReducer,
  signin: signinReducer,
  dashboard: dashboardReducer,
});

export default reducers;
