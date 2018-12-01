import {
  UPDATE_FRIDGE_LOG_ATTEMPT,
  UPDATE_FRIDGE_LOG_SUCCESS,
  UPDATE_FRIDGE_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateFridgeLogAttempt = () => ({
  type: UPDATE_FRIDGE_LOG_ATTEMPT,
});

const updateFridgeLogSuccess = item => ({
  type: UPDATE_FRIDGE_LOG_SUCCESS,
  payload: {
    item,
  },
});

const updateFridgeLogFail = message => ({
  type: UPDATE_FRIDGE_LOG_FAIL,
  payload: { message },
});

export const updateFridgeLog = fridgeLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateFridgeLogAttempt());
    const body = fridgeLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fridgelog/update`;
    const updatedItem = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateFridgeLogSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateFridgeLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
