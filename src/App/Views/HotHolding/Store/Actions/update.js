import {
  UPDATE_HOT_HOLDING_ATTEMPT,
  UPDATE_HOT_HOLDING_SUCCESS,
  UPDATE_HOT_HOLDING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const updateHotHoldingAttempt = () => ({
  type: UPDATE_HOT_HOLDING_ATTEMPT,
});

const updateHotHoldingSuccess = item => ({
  type: UPDATE_HOT_HOLDING_SUCCESS,
  payload: {
    item,
  },
});

const updateHotHoldingFail = message => ({
  type: UPDATE_HOT_HOLDING_FAIL,
  payload: { message },
});

export const updateHotHolding = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateHotHoldingAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_HOT_HOLDING_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_HOT_HOLDING_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateHotHoldingSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateHotHoldingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
