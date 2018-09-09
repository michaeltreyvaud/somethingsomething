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

const updateUserSuccess = (index, item) => ({
  type: UPDATE_USER_SUCCESS,
  payload: {
    index,
    item,
  },
});

const updateUserFail = message => ({
  type: UPDATE_USER_FAIL,
  payload: { message },
});

export const updateUser = (item, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateUserAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_USER_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_USER_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateUserSuccess(index, updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateUserFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
