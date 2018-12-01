import {
  CREATE_FRIDGE_LOG_ATTEMPT,
  CREATE_FRIDGE_LOG_SUCCESS,
  CREATE_FRIDGE_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createFridgeLogAttempt = () => ({
  type: CREATE_FRIDGE_LOG_ATTEMPT,
});

const createFridgeLogSuccess = response => ({
  type: CREATE_FRIDGE_LOG_SUCCESS,
  payload: {
    response,
  },
});

const createFridgeLogFail = message => ({
  type: CREATE_FRIDGE_LOG_FAIL,
  payload: { message },
});

export const createFridgeLog = fridgeLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFridgeLogAttempt());
    const body = fridgeLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fridgelog/create`;
    const response = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFridgeLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFridgeLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
