import {
  UPDATE_FAST_COOLING_ATTEMPT,
  UPDATE_FAST_COOLING_SUCCESS,
  UPDATE_FAST_COOLING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const updateFastCoolingAttempt = () => ({
  type: UPDATE_FAST_COOLING_ATTEMPT,
});

const updateFastCoolingSuccess = item => ({
  type: UPDATE_FAST_COOLING_SUCCESS,
  payload: {
    item,
  },
});

const updateFastCoolingFail = message => ({
  type: UPDATE_FAST_COOLING_FAIL,
  payload: { message },
});

export const updateFastCooling = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateFastCoolingAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fastcooling/update`;
    const updatedItem = await AuthenticatedFetch(url, body);
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateFastCoolingSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateFastCoolingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
