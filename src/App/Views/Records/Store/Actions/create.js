import {
  RECORD_CREATE_ATTEMPT,
  RECORD_CREATE_SUCCESS,
  RECORD_CREATE_FAIL,
  RECORD_CREATE_SET_VALUE,
  RECORD_CREATE_RESET,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const attempt = () => ({
  type: RECORD_CREATE_ATTEMPT,
});

const success = response => ({
  type: RECORD_CREATE_SUCCESS,
  payload: { response },
});

const fail = message => ({
  type: RECORD_CREATE_FAIL,
  payload: { message },
});

export const create = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(attempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fooddelivery/create`;
    const response = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(success(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(fail(_err.message));
  }
};

export const setRecordValue = (key, value) => ({
  type: RECORD_CREATE_SET_VALUE,
  payload: { key, value },
});

export const resetRecord = () => ({ type: RECORD_CREATE_RESET });
