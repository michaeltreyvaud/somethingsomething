import {
  DELETE_FRIDGE_LOG_ATTEMPT,
  DELETE_FRIDGE_LOG_SUCCESS,
  DELETE_FRIDGE_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteFridgeLogAttempt = () => ({
  type: DELETE_FRIDGE_LOG_ATTEMPT,
});

const deleteFridgeLogSuccess = index => ({
  type: DELETE_FRIDGE_LOG_SUCCESS,
  payload: {
    index,
  },
});

const deleteFridgeLogFail = message => ({
  type: DELETE_FRIDGE_LOG_FAIL,
  payload: { message },
});

export const deleteFridgeLog = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteFridgeLogAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_FRIDGE_LOG_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_FRIDGE_LOG_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteFridgeLogSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteFridgeLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
