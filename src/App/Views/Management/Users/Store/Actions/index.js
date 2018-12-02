import {
  LIST_USER_ATTEMPT,
  LIST_USER_SUCCESS,
  LIST_USER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listUserAttempt = () => ({
  type: LIST_USER_ATTEMPT,
});

const listUserSuccess = response => ({
  type: LIST_USER_SUCCESS,
  payload: {
    response,
  },
});

const listUserFail = message => ({
  type: LIST_USER_FAIL,
  payload: { message },
});

export const listUsers = () => async (dispatch) => {
  try {
    dispatch(listUserAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/management/user/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listUserSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listUserFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
