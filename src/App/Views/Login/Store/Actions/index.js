import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../ActionTypes';
import fetch from '../../../../Util/fetch';

const loginAttempt = () => ({
  type: LOGIN_ATTEMPT,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

const loginFail = message => ({
  type: LOGIN_FAIL,
  payload: { message },
});

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginAttempt());
    const body = {
      email,
      password,
    };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LOGIN_PATH } = process.env;
    const res = await fetch(`${REACT_APP_API_URL}${REACT_APP_LOGIN_PATH}`, body);
    return dispatch(loginSuccess(res));
  } catch (_err) {
    return dispatch(loginFail(_err.message || 'An error has occurred'));
  }
};

//  remove me
export const a = () => {};
