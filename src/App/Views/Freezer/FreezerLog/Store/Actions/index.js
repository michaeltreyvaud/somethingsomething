import {
  LIST_FREEZER_LOG_ATTEMPT,
  LIST_FREEZER_LOG_SUCCESS,
  LIST_FREEZER_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listFreezerLogAttempt = () => ({
  type: LIST_FREEZER_LOG_ATTEMPT,
});

const listFreezerLogSuccess = response => ({
  type: LIST_FREEZER_LOG_SUCCESS,
  payload: {
    response,
  },
});

const listFreezerLogFail = message => ({
  type: LIST_FREEZER_LOG_FAIL,
  payload: { message },
});

export const listFreezerLogs = () => async (dispatch) => {
  try {
    dispatch(listFreezerLogAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/freezerlog/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listFreezerLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFreezerLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
