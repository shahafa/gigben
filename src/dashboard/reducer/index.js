import * as types from '../actions';

const initialState = {
  loading: false,
  data: {},
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DASHBOARD_DATA:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_DASHBOARD_DATA_SUCCESS:
      return {
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

export default dashboard;
