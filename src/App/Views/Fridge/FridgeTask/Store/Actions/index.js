import {
  LIST_FRIDGE_TASK_ATTEMPT,
  LIST_FRIDGE_TASK_SUCCESS,
  LIST_FRIDGE_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listFridgeTaskAttempt = () => ({
  type: LIST_FRIDGE_TASK_ATTEMPT,
});

const listFridgeTaskSuccess = response => ({
  type: LIST_FRIDGE_TASK_SUCCESS,
  payload: {
    response,
  },
});

const listFridgeTaskFail = message => ({
  type: LIST_FRIDGE_TASK_FAIL,
  payload: { message },
});

export const listFridgeTasks = () => async (dispatch) => {
  try {
    dispatch(listFridgeTaskAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_FRIDGE_TASK_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_FRIDGE_TASK_PATH}`, body);
    return dispatch(listFridgeTaskSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFridgeTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
