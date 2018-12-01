import {
  DELETE_FREEZER_LOG_ATTEMPT,
  DELETE_FREEZER_LOG_SUCCESS,
  DELETE_FREEZER_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteFreezerLogAttempt = () => ({
  type: DELETE_FREEZER_LOG_ATTEMPT,
});

const deleteFreezerLogSuccess = index => ({
  type: DELETE_FREEZER_LOG_SUCCESS,
  payload: {
    index,
  },
});

const deleteFreezerLogFail = message => ({
  type: DELETE_FREEZER_LOG_FAIL,
  payload: { message },
});

export const deleteFreezerLog = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteFreezerLogAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/freezerlog/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteFreezerLogSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteFreezerLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
