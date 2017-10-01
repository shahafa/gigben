import signinSagas from 'signin/sagas';
import dashboardSagas from 'dashboard/sagas';
import commonSagas from '../sagas';

export default [
  commonSagas,
  signinSagas,
  dashboardSagas,
];
