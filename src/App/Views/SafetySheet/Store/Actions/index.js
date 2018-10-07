import {
  LIST_SAFETY_ATTEMPT,
  LIST_SAFETY_SUCCESS,
  LIST_SAFETY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';

const listSafetyAttempt = () => ({
  type: LIST_SAFETY_ATTEMPT,
});

const listSafetySuccess = response => ({
  type: LIST_SAFETY_SUCCESS,
  payload: {
    response,
  },
});

const listSafetyFail = message => ({
  type: LIST_SAFETY_FAIL,
  payload: { message },
});

export const listSafetys = () => async (dispatch) => {
  try {
    dispatch(listSafetyAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_SAFETY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_SAFETY_PATH}`, body);
    return dispatch(listSafetySuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listSafetyFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
