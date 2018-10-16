import {
  LIST_SAFETY_RECORD_TASK_ATTEMPT,
  LIST_SAFETY_RECORD_TASK_SUCCESS,
  LIST_SAFETY_RECORD_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listSafetyTaskAttempt = () => ({
  type: LIST_SAFETY_RECORD_TASK_ATTEMPT,
});

const listSafetyTaskSuccess = response => ({
  type: LIST_SAFETY_RECORD_TASK_SUCCESS,
  payload: {
    response,
  },
});

const listSafetyTaskFail = message => ({
  type: LIST_SAFETY_RECORD_TASK_FAIL,
  payload: { message },
});

export const listSafetyTaskCategory = () => async (dispatch) => {
  try {
    dispatch(listSafetyTaskAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_SAFETY_RECORD_TASK_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_SAFETY_RECORD_TASK_PATH}`, body);
    return dispatch(listSafetyTaskSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listSafetyTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
