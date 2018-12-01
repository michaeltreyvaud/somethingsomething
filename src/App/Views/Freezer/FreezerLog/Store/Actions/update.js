import {
  UPDATE_FREEZER_LOG_ATTEMPT,
  UPDATE_FREEZER_LOG_SUCCESS,
  UPDATE_FREEZER_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateFreezerLogAttempt = () => ({
  type: UPDATE_FREEZER_LOG_ATTEMPT,
});

const updateFreezerLogSuccess = item => ({
  type: UPDATE_FREEZER_LOG_SUCCESS,
  payload: {
    item,
  },
});

const updateFreezerLogFail = message => ({
  type: UPDATE_FREEZER_LOG_FAIL,
  payload: { message },
});

export const updateFreezerLog = freezerLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateFreezerLogAttempt());
    const body = freezerLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/freezerlog/update`;
    const updatedItem = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateFreezerLogSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateFreezerLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
