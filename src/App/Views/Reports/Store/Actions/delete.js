import {
  DELETE_REPORT_ATTEMPT,
  DELETE_REPORT_SUCCESS,
  DELETE_REPORT_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const deleteReportAttempt = () => ({
  type: DELETE_REPORT_ATTEMPT,
});

const deleteReportSuccess = index => ({
  type: DELETE_REPORT_SUCCESS,
  payload: {
    index,
  },
});

const deleteReportFail = message => ({
  type: DELETE_REPORT_FAIL,
  payload: { message },
});

export const deleteReport = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteReportAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_REPORT_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_REPORT_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteReportSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteReportFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
