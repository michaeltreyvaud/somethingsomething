import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PASSWORD_CHALLENGE_ATTEMPT,
  PASSWORD_CHALLENGE_SUCCESS,
  PASSWORD_CHALLENGE_FAIL,

  USER_AUTH_UPDATED,
} from '../ActionTypes';
import { Fetch } from '../../../../../Util/fetch';
import AuthStore from '../../../../../Util/authstore';

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

const handleStorage = (response) => {
  const { AuthenticationResult } = response;
  if (AuthenticationResult) {
    const { AccessToken, RefreshToken, IdToken } = AuthenticationResult;
    if (AccessToken) AuthStore.setAccessToken(AccessToken);
    if (RefreshToken) AuthStore.setRefreshToken(RefreshToken);
    if (IdToken) AuthStore.setIdToken(IdToken);
  }
};

const userAuthUpdated = response => ({
  type: USER_AUTH_UPDATED,
  payload: {
    response,
  },
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
    const response = await Fetch(`${REACT_APP_API_URL}${REACT_APP_LOGIN_PATH}`, body);
    handleStorage(response);
    dispatch(userAuthUpdated(response));
    return dispatch(loginSuccess(response));
  } catch (_err) {
    return dispatch(loginFail(_err.message));
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
    const response = await Fetch(`${REACT_APP_API_URL}${REACT_APP_PASSWORD_CHALLENGE_PATH}`, body);
    handleStorage(response);
    return dispatch(challengeSuccess(response));
  } catch (_err) {
    return dispatch(challengeFail(_err.message));
  }
};
