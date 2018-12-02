import {
  LIST_MEDICAL_LOG_ATTEMPT,
  LIST_MEDICAL_LOG_SUCCESS,
  LIST_MEDICAL_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listMedicalLogAttempt = () => ({
  type: LIST_MEDICAL_LOG_ATTEMPT,
});

const listMedicalLogSuccess = response => ({
  type: LIST_MEDICAL_LOG_SUCCESS,
  payload: {
    response,
  },
});

const listMedicalLogFail = message => ({
  type: LIST_MEDICAL_LOG_FAIL,
  payload: { message },
});

export const listMedicalLogs = () => async (dispatch) => {
  try {
    dispatch(listMedicalLogAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/medicallog/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listMedicalLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listMedicalLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
