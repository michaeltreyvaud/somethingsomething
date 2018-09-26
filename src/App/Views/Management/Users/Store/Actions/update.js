import {
  UPDATE_USER_ATTEMPT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateUserAttempt = () => ({
  type: UPDATE_USER_ATTEMPT,
});

const updateUserSuccess = item => ({
  type: UPDATE_USER_SUCCESS,
  payload: {
    item,
  },
});

const updateUserFail = message => ({
  type: UPDATE_USER_FAIL,
  payload: { message },
});

export const updateUser = user => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateUserAttempt());
    const body = user;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_MANAGEMENT_USER_UPDATE_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_MANAGEMENT_USER_UPDATE_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('User Updated'));
    return dispatch(updateUserSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateUserFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
