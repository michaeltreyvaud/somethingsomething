import {
  CREATE_FREEZER_LOG_ATTEMPT,
  CREATE_FREEZER_LOG_SUCCESS,
  CREATE_FREEZER_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createFreezerLogAttempt = () => ({
  type: CREATE_FREEZER_LOG_ATTEMPT,
});

const createFreezerLogSuccess = response => ({
  type: CREATE_FREEZER_LOG_SUCCESS,
  payload: {
    response,
  },
});

const createFreezerLogFail = message => ({
  type: CREATE_FREEZER_LOG_FAIL,
  payload: { message },
});

export const createFreezerLog = freezerLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFreezerLogAttempt());
    const body = freezerLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FREEZER_LOG_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FREEZER_LOG_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFreezerLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFreezerLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
