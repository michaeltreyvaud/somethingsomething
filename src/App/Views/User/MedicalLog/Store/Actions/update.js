import {
  UPDATE_MEDICAL_LOG_ATTEMPT,
  UPDATE_MEDICAL_LOG_SUCCESS,
  UPDATE_MEDICAL_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateMedicalLogAttempt = () => ({
  type: UPDATE_MEDICAL_LOG_ATTEMPT,
});

const updateMedicalLogSuccess = item => ({
  type: UPDATE_MEDICAL_LOG_SUCCESS,
  payload: {
    item,
  },
});

const updateMedicalLogFail = message => ({
  type: UPDATE_MEDICAL_LOG_FAIL,
  payload: { message },
});

export const updateMedicalLog = medicalLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateMedicalLogAttempt());
    const body = medicalLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/medicallog/update`;
    const updatedItem = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateMedicalLogSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateMedicalLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
