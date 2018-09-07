import {
  DASHBOARD_LOADING,
  DASHBOARD_SHOW_ERROR,
  DASHBOARD_HIDE_ERROR,
  DASHBOARD_SHOW_SUCCESS,
  DASHBOARD_HIDE_SUCCESS,
} from '../ActionTypes';

export const dashboardLoading = () => ({
  type: DASHBOARD_LOADING,
});

export const showDashBoardError = errorMessage => ({
  type: DASHBOARD_SHOW_ERROR,
  payload: {
    errorMessage,
  },
});

export const hideDashBoardError = () => ({
  type: DASHBOARD_HIDE_ERROR,
});

export const showDashBoardSuccess = successMessage => ({
  type: DASHBOARD_SHOW_SUCCESS,
  payload: {
    successMessage,
  },
});

export const hideDashBoardSuccess = () => ({
  type: DASHBOARD_HIDE_SUCCESS,
});
