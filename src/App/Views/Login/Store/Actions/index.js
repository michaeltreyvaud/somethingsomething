import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PASSWORD_CHALLENGE_ATTEMPT,
  PASSWORD_CHALLENGE_SUCCESS,
  PASSWORD_CHALLENGE_FAIL,
} from '../ActionTypes';
import fetch from '../../../../Util/fetch';

const loginAttempt = () => ({
  type: LOGIN_ATTEMPT,
});

const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  payload: {
    response,
  },
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
    const response = await fetch(`${REACT_APP_API_URL}${REACT_APP_LOGIN_PATH}`, body);
    console.log(response);
    return dispatch(loginSuccess(response));
  } catch (_err) {
    return dispatch(loginFail(_err.message || 'An error has occurred'));
  }
};

const challengeAttempt = () => ({
  type: PASSWORD_CHALLENGE_ATTEMPT,
});

const challengeSuccess = response => ({
  type: PASSWORD_CHALLENGE_SUCCESS,
  payload: {
    response,
  },
});

const challengeFail = message => ({
  type: PASSWORD_CHALLENGE_FAIL,
  payload: { message },
});

export const challenge = (email, password, session) => async (dispatch) => {
  try {
    dispatch(challengeAttempt());
    const body = {
      email,
      password,
      session,
    };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_PASSWORD_CHALLENGE_PATH } = process.env;
    const response = await fetch(`${REACT_APP_API_URL}${REACT_APP_PASSWORD_CHALLENGE_PATH}`, body);
    console.log(response);
    return dispatch(challengeSuccess(response));
  } catch (_err) {
    return dispatch(challengeFail(_err.message || 'An error has occurred'));
  }
};
