import {
  CREATE_CLEANING_LOG_ATTEMPT,
  CREATE_CLEANING_LOG_SUCCESS,
  CREATE_CLEANING_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createCleaningLogAttempt = () => ({
  type: CREATE_CLEANING_LOG_ATTEMPT,
});

const createCleaningLogSuccess = response => ({
  type: CREATE_CLEANING_LOG_SUCCESS,
  payload: {
    response,
  },
});

const createCleaningLogFail = message => ({
  type: CREATE_CLEANING_LOG_FAIL,
  payload: { message },
});

export const createCleaningLog = cleaningLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createCleaningLogAttempt());
    const body = cleaningLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_CLEANING_LOG_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_CLEANING_LOG_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createCleaningLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createCleaningLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
