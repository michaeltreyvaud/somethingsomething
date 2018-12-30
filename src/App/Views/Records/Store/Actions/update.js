import {
  RECORD_GET_ATTEMPT,
  RECORD_GET_SUCCESS,
  RECORD_GET_FAIL,
  RECORD_UPDATE_ATTEMPT,
  RECORD_UPDATE_SUCCESS,
  RECORD_UPDATE_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError } from '../../../../Layouts/Dashboard/Store/Actions';

const getAttempt = () => ({ type: RECORD_GET_ATTEMPT });
const getSuccess = item => ({
  type: RECORD_GET_SUCCESS,
  payload: { item },
});
const getFail = message => ({
  type: RECORD_GET_FAIL,
  payload: { message },
});
export const get = (type, createdAt) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(getAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/${type}/get`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(getSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(getFail(_err.message));
  }
};
