import {
  UPDATE_CLEANING_LOG_ATTEMPT,
  UPDATE_CLEANING_LOG_SUCCESS,
  UPDATE_CLEANING_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateHotHoldingAttempt = () => ({
  type: UPDATE_CLEANING_LOG_ATTEMPT,
});

const updateHotHoldingSuccess = item => ({
  type: UPDATE_CLEANING_LOG_SUCCESS,
  payload: {
    item,
  },
});

const updateHotHoldingFail = message => ({
  type: UPDATE_CLEANING_LOG_FAIL,
  payload: { message },
});

export const updateHotHolding = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateHotHoldingAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_CLEANING_LOG_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_CLEANING_LOG_PATH}`, body);
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
