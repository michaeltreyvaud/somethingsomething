import {
  COMPANY_INFO_FETCH,
  COMPANY_INFO_SUCCESS,
  COMPANY_INFO_FAIL,
  VALIDATE_TOKEN_ATTEMPT,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_FAIL,
  SESSION_TIMEOUT,
} from '../ActionTypes';
import { USER_AUTH_UPDATED } from '../../../Views/User/Profile/Store/ActionTypes';
import { AuthenticatedFetch } from '../../../Util/fetch';
import AuthStore from '../../../Util/authstore';

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

export const validateToken = () => async (dispatch) => {
  try {
    dispatch(validateAttempt());
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_VALIDATE_TOKEN_PATH } = process.env;
    const body = { refreshToken: AuthStore.getRefreshToken() };
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_VALIDATE_TOKEN_PATH}`, body);
    handleStorage(response);
    dispatch(userAuthUpdated(response));
    return dispatch(validateSuccess());
  } catch (_err) {
    return dispatch(validateFail());
  }
};

//  TODO: Probably move this to auth router and change to logout
export const sessionTimeout = () => ({
  type: SESSION_TIMEOUT,
});
