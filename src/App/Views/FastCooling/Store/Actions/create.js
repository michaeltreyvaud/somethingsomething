import {
  CREATE_FAST_COOLING_ATTEMPT,
  CREATE_FAST_COOLING_SUCCESS,
  CREATE_FAST_COOLING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const createFastCoolingAttempt = () => ({
  type: CREATE_FAST_COOLING_ATTEMPT,
});

const createFastCoolingSuccess = response => ({
  type: CREATE_FAST_COOLING_SUCCESS,
  payload: {
    response,
  },
});

const createFastCoolingFail = message => ({
  type: CREATE_FAST_COOLING_FAIL,
  payload: { message },
});

export const createFastCooling = fastCooling => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFastCoolingAttempt());
    const body = fastCooling;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FAST_COOLING_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FAST_COOLING_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFastCoolingSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFastCoolingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
