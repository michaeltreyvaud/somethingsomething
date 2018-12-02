import {
  DELETE_USER_ATTEMPT,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteUserAttempt = () => ({
  type: DELETE_USER_ATTEMPT,
});

const deleteUserSuccess = index => ({
  type: DELETE_USER_SUCCESS,
  payload: {
    index,
  },
});

const deleteUserFail = message => ({
  type: DELETE_USER_FAIL,
  payload: { message },
});

export const deleteUser = (userName, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteUserAttempt());
    const body = { userName };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/management/user/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('User Deleted'));
    return dispatch(deleteUserSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteUserFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
