import {
  UPDATE_SAFETY_ATTEMPT,
  UPDATE_SAFETY_SUCCESS,
  UPDATE_SAFETY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const updateSafetyAttempt = () => ({
  type: UPDATE_SAFETY_ATTEMPT,
});

const updateSafetySuccess = item => ({
  type: UPDATE_SAFETY_SUCCESS,
  payload: {
    item,
  },
});

const updateSafetyFail = message => ({
  type: UPDATE_SAFETY_FAIL,
  payload: { message },
});

export const updateSafety = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateSafetyAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_SAFETY_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_SAFETY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateSafetySuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateSafetyFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
