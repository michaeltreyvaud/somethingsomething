import {
  CREATE_SAFETY_ATTEMPT,
  CREATE_SAFETY_SUCCESS,
  CREATE_SAFETY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const createSafetyAttempt = () => ({
  type: CREATE_SAFETY_ATTEMPT,
});

const createSafetySuccess = response => ({
  type: CREATE_SAFETY_SUCCESS,
  payload: {
    response,
  },
});

const createSafetyFail = message => ({
  type: CREATE_SAFETY_FAIL,
  payload: { message },
});

export const createSafety = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createSafetyAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_SAFETY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_SAFETY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createSafetySuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createSafetyFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
