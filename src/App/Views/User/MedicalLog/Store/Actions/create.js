import {
  CREATE_MEDICAL_LOG_ATTEMPT,
  CREATE_MEDICAL_LOG_SUCCESS,
  CREATE_MEDICAL_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createMedicalLogAttempt = () => ({
  type: CREATE_MEDICAL_LOG_ATTEMPT,
});

const createMedicalLogSuccess = response => ({
  type: CREATE_MEDICAL_LOG_SUCCESS,
  payload: {
    response,
  },
});

const createMedicalLogFail = message => ({
  type: CREATE_MEDICAL_LOG_FAIL,
  payload: { message },
});

export const createMedicalLog = medicalLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createMedicalLogAttempt());
    const body = medicalLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_MEDICAL_LOG_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_MEDICAL_LOG_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createMedicalLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createMedicalLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
