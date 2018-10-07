import {
  UPDATE_REPORT_ATTEMPT,
  UPDATE_REPORT_SUCCESS,
  UPDATE_REPORT_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const updateReportAttempt = () => ({
  type: UPDATE_REPORT_ATTEMPT,
});

const updateReportSuccess = item => ({
  type: UPDATE_REPORT_SUCCESS,
  payload: {
    item,
  },
});

const updateReportFail = message => ({
  type: UPDATE_REPORT_FAIL,
  payload: { message },
});

export const updateReport = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateReportAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_REPORT_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_REPORT_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateReportSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateReportFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
