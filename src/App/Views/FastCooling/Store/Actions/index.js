import {
  LIST_FAST_COOLING_ATTEMPT,
  LIST_FAST_COOLING_SUCCESS,
  LIST_FAST_COOLING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';

const listFastCoolingAttempt = () => ({
  type: LIST_FAST_COOLING_ATTEMPT,
});

const listFastCoolingSuccess = response => ({
  type: LIST_FAST_COOLING_SUCCESS,
  payload: {
    response,
  },
});

const listFastCoolingFail = message => ({
  type: LIST_FAST_COOLING_FAIL,
  payload: { message },
});

export const listFastCoolings = () => async (dispatch) => {
  try {
    dispatch(listFastCoolingAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fastcooling/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listFastCoolingSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFastCoolingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
