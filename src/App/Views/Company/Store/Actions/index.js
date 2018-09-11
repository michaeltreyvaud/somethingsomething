import {
  GET_COMPANY_INFO_ATTEMPT,
  GET_COMPANY_INFO_SUCCESS,
  GET_COMPANY_INFO_FAIL,

  UPDATE_COMPANY_INFO_ATTEMPT,
  UPDATE_COMPANY_INFO_SUCCESS,
  UPDATE_COMPANY_INFO_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const getCompanyInfoAttempt = () => ({
  type: GET_COMPANY_INFO_ATTEMPT,
});

const getCompanyInfoSuccess = response => ({
  type: GET_COMPANY_INFO_SUCCESS,
  payload: {
    response,
  },
});

const getCompanyInfoFail = message => ({
  type: GET_COMPANY_INFO_FAIL,
  payload: { message },
});

export const getCompanyInfo = () => async (dispatch) => {
  try {
    dispatch(getCompanyInfoAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DESCRIBE_COMPANY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DESCRIBE_COMPANY_PATH}`, body);
    return dispatch(getCompanyInfoSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(getCompanyInfoFail(_err.message));
  }
};

const updateCompanyInfoAttempt = info => ({
  type: UPDATE_COMPANY_INFO_ATTEMPT,
  payload: {
    info,
  },
});

const updateCompanyInfoSuccess = response => ({
  type: UPDATE_COMPANY_INFO_SUCCESS,
  payload: {
    response,
  },
});

const updateCompanyInfoFail = message => ({
  type: UPDATE_COMPANY_INFO_FAIL,
  payload: { message },
});

export const updateCompanyInfo = info => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateCompanyInfoAttempt(info));
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_COMPANY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_COMPANY_PATH}`, info);
    //  Display success message
    dispatch(showDashBoardSuccess('Settings Updated'));
    return dispatch(updateCompanyInfoSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateCompanyInfoFail(_err.message));
  }
};
