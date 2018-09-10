import {
  COMPANY_INFO_FETCH,
  COMPANY_INFO_SUCCESS,
  COMPANY_INFO_FAIL,
  VALIDATE_TOKEN_ATTEMPT,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_FAIL,
  SESSION_TIMEOUT,
} from '../ActionTypes';
import { AuthenticatedFetch } from '../../../Util/fetch';

const companyInfoAttempt = () => ({
  type: COMPANY_INFO_FETCH,
});

const companyInfoSuccess = () => ({
  type: COMPANY_INFO_SUCCESS,
});

const companyInfoFail = () => ({
  type: COMPANY_INFO_FAIL,
});

export const getCompanyInfo = () => async (dispatch) => {
  try {
    dispatch(companyInfoAttempt());
    return dispatch(companyInfoSuccess());
  } catch (_err) {
    return dispatch(companyInfoFail());
  }
};

const validateAttempt = () => ({
  type: VALIDATE_TOKEN_ATTEMPT,
});

const validateSuccess = () => ({
  type: VALIDATE_TOKEN_SUCCESS,
});

const validateFail = () => ({
  type: VALIDATE_TOKEN_FAIL,
});

export const validateToken = () => async (dispatch) => {
  try {
    dispatch(validateAttempt());
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_VALIDATE_TOKEN_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_VALIDATE_TOKEN_PATH}`, {});
    // console.log(JSON.stringify(response));
    return dispatch(validateSuccess());
  } catch (_err) {
    return dispatch(validateFail());
  }
};

//  TODO: Probably move this to auth router and change to logout
export const sessionTimeout = () => ({
  type: SESSION_TIMEOUT,
});
