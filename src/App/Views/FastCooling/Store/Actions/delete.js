import {
  DELETE_FAST_COOLING_ATTEMPT,
  DELETE_FAST_COOLING_SUCCESS,
  DELETE_FAST_COOLING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const deleteFastCoolingAttempt = () => ({
  type: DELETE_FAST_COOLING_ATTEMPT,
});

const deleteFastCoolingSuccess = index => ({
  type: DELETE_FAST_COOLING_SUCCESS,
  payload: {
    index,
  },
});

const deleteFastCoolingFail = message => ({
  type: DELETE_FAST_COOLING_FAIL,
  payload: { message },
});

export const deleteFastCooling = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteFastCoolingAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fastcooling/delete`;
    await AuthenticatedFetch(url, body);
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteFastCoolingSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteFastCoolingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
