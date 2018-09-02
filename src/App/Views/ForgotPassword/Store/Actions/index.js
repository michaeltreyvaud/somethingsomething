import {
  FORGOT_PASSWORD_ATTEMPT,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from '../ActionTypes';
import { Fetch } from '../../../../Util/fetch';

const forgotAttempt = () => ({
  type: FORGOT_PASSWORD_ATTEMPT,
});

const forgotSuccess = response => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: {
    response,
  },
});

const forgotFail = message => ({
  type: FORGOT_PASSWORD_FAIL,
  payload: { message },
});

export const forgotPassword = email => async (dispatch) => {
  try {
    dispatch(forgotAttempt());
    const body = { email };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_FORGOT_PASSWORD_PATH } = process.env;
    const response = await Fetch(`${REACT_APP_API_URL}${REACT_APP_FORGOT_PASSWORD_PATH}`, body);
    console.log(response);
    return dispatch(forgotSuccess(response));
  } catch (_err) {
    return dispatch(forgotFail(_err.message || 'An error has occurred'));
  }
};

//  remove me
export const a = () => {};
