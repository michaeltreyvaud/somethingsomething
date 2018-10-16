import {
  CREATE_SAFETY_RECORD_TASK_ATTEMPT,
  CREATE_SAFETY_RECORD_TASK_SUCCESS,
  CREATE_SAFETY_RECORD_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createSafetyTaskAttempt = () => ({
  type: CREATE_SAFETY_RECORD_TASK_ATTEMPT,
});

const createSafetyTaskSuccess = response => ({
  type: CREATE_SAFETY_RECORD_TASK_SUCCESS,
  payload: {
    response,
  },
});

const createSafetyTaskFail = message => ({
  type: CREATE_SAFETY_RECORD_TASK_FAIL,
  payload: { message },
});

export const createSafetyTask = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createSafetyTaskAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_SAFETY_RECORD_TASK_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_SAFETY_RECORD_TASK_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createSafetyTaskSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createSafetyTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
