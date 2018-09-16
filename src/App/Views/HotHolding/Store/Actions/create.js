import {
  CREATE_HOT_HOLDING_ATTEMPT,
  CREATE_HOT_HOLDING_SUCCESS,
  CREATE_HOT_HOLDING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const createHotHoldingAttempt = () => ({
  type: CREATE_HOT_HOLDING_ATTEMPT,
});

const createHotHoldingSuccess = response => ({
  type: CREATE_HOT_HOLDING_SUCCESS,
  payload: {
    response,
  },
});

const createHotHoldingFail = message => ({
  type: CREATE_HOT_HOLDING_FAIL,
  payload: { message },
});

export const createHotHolding = hotHolding => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createHotHoldingAttempt());
    const body = hotHolding;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_HOT_HOLDING_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_HOT_HOLDING_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createHotHoldingSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createHotHoldingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
