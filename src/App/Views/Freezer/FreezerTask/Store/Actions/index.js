import {
  LIST_FREEZER_TASK_ATTEMPT,
  LIST_FREEZER_TASK_SUCCESS,
  LIST_FREEZER_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listFreezerTaskAttempt = () => ({
  type: LIST_FREEZER_TASK_ATTEMPT,
});

const listFreezerTaskSuccess = response => ({
  type: LIST_FREEZER_TASK_SUCCESS,
  payload: {
    response,
  },
});

const listFreezerTaskFail = message => ({
  type: LIST_FREEZER_TASK_FAIL,
  payload: { message },
});

export const listFreezerTasks = () => async (dispatch) => {
  try {
    dispatch(listFreezerTaskAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_FREEZER_TASK_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_FREEZER_TASK_PATH}`, body);
    return dispatch(listFreezerTaskSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFreezerTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
