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

const loginFail = () => ({
  type: LOGIN_FAIL,
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
    console.log(res);
    return dispatch(loginSuccess());
  } catch (error) {
    console.log(error);
    return dispatch(loginFail());
  }
};

//  remove me
export const a = () => {};
