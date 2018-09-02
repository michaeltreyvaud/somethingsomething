import {
  COMPANY_INFO_FETCH,
  COMPANY_INFO_SUCCESS,
  COMPANY_INFO_FAIL,
  VALIDATE_TOKEN_ATTEMPT,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_FAIL,
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
    return dispatch(validateSuccess());
  } catch (_err) {
    return dispatch(validateFail());
  }
};
