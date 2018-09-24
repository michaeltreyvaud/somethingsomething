import {
  LIST_FRIDGE_LOG_ATTEMPT,
  LIST_FRIDGE_LOG_SUCCESS,
  LIST_FRIDGE_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listFridgeLogAttempt = () => ({
  type: LIST_FRIDGE_LOG_ATTEMPT,
});

const listFridgeLogSuccess = response => ({
  type: LIST_FRIDGE_LOG_SUCCESS,
  payload: {
    response,
  },
});

const listFridgeLogFail = message => ({
  type: LIST_FRIDGE_LOG_FAIL,
  payload: { message },
});

export const listFridgeLogs = () => async (dispatch) => {
  try {
    dispatch(listFridgeLogAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_FRIDGE_LOG_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_FRIDGE_LOG_PATH}`, body);
    return dispatch(listFridgeLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFridgeLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
