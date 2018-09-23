import {
  DELETE_HOT_HOLDING_ATTEMPT,
  DELETE_HOT_HOLDING_SUCCESS,
  DELETE_HOT_HOLDING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const deleteHotHoldingAttempt = () => ({
  type: DELETE_HOT_HOLDING_ATTEMPT,
});

const deleteHotHoldingSuccess = index => ({
  type: DELETE_HOT_HOLDING_SUCCESS,
  payload: {
    index,
  },
});

const deleteHotHoldingFail = message => ({
  type: DELETE_HOT_HOLDING_FAIL,
  payload: { message },
});

export const deleteHotHolding = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteHotHoldingAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_HOT_HOLDING_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_HOT_HOLDING_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteHotHoldingSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteHotHoldingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
