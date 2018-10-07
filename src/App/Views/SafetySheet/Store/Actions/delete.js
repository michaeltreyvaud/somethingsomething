import {
  DELETE_SAFETY_ATTEMPT,
  DELETE_SAFETY_SUCCESS,
  DELETE_SAFETY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const deleteSafetyAttempt = () => ({
  type: DELETE_SAFETY_ATTEMPT,
});

const deleteSafetySuccess = index => ({
  type: DELETE_SAFETY_SUCCESS,
  payload: {
    index,
  },
});

const deleteSafetyFail = message => ({
  type: DELETE_SAFETY_FAIL,
  payload: { message },
});

export const deleteSafety = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteSafetyAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_SAFETY_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_SAFETY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteSafetySuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteSafetyFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
