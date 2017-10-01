export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA';
export const fetchDashboardData = () => ({
  type: FETCH_DASHBOARD_DATA,
});

export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const fetchDashboardDataSuccess = data => ({
  type: FETCH_DASHBOARD_DATA_SUCCESS,
  data,
});

export const FETCH_DASHBOARD_DATA_FAILED = 'FETCH_DASHBOARD_DATA_FAILED';
export const fetchDashboardDataFailed = (code, message) => ({
  type: FETCH_DASHBOARD_DATA_FAILED,
  code,
  message,
});
