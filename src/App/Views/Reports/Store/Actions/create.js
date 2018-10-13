import {
  CREATE_REPORT_ATTEMPT,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const createReportAttempt = () => ({
  type: CREATE_REPORT_ATTEMPT,
});

const createReportSuccess = response => ({
  type: CREATE_REPORT_SUCCESS,
  payload: {
    response,
  },
});

const createReportFail = message => ({
  type: CREATE_REPORT_FAIL,
  payload: { message },
});

export const createReport = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createReportAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_REPORT_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_REPORT_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createReportSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createReportFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
