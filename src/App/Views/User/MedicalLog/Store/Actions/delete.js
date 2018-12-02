import {
  DELETE_MEDICAL_LOG_ATTEMPT,
  DELETE_MEDICAL_LOG_SUCCESS,
  DELETE_MEDICAL_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteMedicalLogAttempt = () => ({
  type: DELETE_MEDICAL_LOG_ATTEMPT,
});

const deleteMedicalLogSuccess = index => ({
  type: DELETE_MEDICAL_LOG_SUCCESS,
  payload: {
    index,
  },
});

const deleteMedicalLogFail = message => ({
  type: DELETE_MEDICAL_LOG_FAIL,
  payload: { message },
});

export const deleteMedicalLog = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteMedicalLogAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/medicallog/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteMedicalLogSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteMedicalLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
