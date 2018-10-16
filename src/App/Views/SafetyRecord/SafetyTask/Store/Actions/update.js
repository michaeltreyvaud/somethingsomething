import {
  UPDATE_SAFETY_RECORD_TASK_ATTEMPT,
  UPDATE_SAFETY_RECORD_TASK_SUCCESS,
  UPDATE_SAFETY_RECORD_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateSafetyTaskAttempt = () => ({
  type: UPDATE_SAFETY_RECORD_TASK_ATTEMPT,
});

const updateSafetyTaskSuccess = item => ({
  type: UPDATE_SAFETY_RECORD_TASK_SUCCESS,
  payload: {
    item,
  },
});

const updateSafetyTaskFail = message => ({
  type: UPDATE_SAFETY_RECORD_TASK_FAIL,
  payload: { message },
});

export const updateSafetyTask = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateSafetyTaskAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_SAFETY_RECORD_TASK_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_SAFETY_RECORD_TASK_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateSafetyTaskSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateSafetyTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
