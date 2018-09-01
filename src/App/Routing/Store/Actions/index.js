import {
  COMPANY_INFO_FETCH,
  COMPANY_INFO_SUCCESS,
  COMPANY_INFO_FAIL,
} from '../ActionTypes';

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
  } catch (error) {
    return dispatch(companyInfoFail());
  }
};

//  remove me
export const a = () => {};
