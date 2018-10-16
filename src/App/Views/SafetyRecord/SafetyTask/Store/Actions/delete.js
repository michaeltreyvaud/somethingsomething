import {
  DELETE_SAFETY_RECORD_TASK_ATTEMPT,
  DELETE_SAFETY_RECORD_TASK_SUCCESS,
  DELETE_SAFETY_RECORD_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteSafetyTaskAttempt = () => ({
  type: DELETE_SAFETY_RECORD_TASK_ATTEMPT,
});

const deleteSafetyTaskSuccess = index => ({
  type: DELETE_SAFETY_RECORD_TASK_SUCCESS,
  payload: {
    index,
  },
});

const deleteSafetyTaskFail = message => ({
  type: DELETE_SAFETY_RECORD_TASK_FAIL,
  payload: { message },
});

export const deleteSafetyTask = (id, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteSafetyTaskAttempt());
    const body = { id };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_SAFETY_RECORD_TASK_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_SAFETY_RECORD_TASK_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteSafetyTaskSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteSafetyTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
