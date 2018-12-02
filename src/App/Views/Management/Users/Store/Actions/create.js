import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createUserAttempt = () => ({
  type: CREATE_USER_ATTEMPT,
});

const createUserSuccess = response => ({
  type: CREATE_USER_SUCCESS,
  payload: {
    response,
  },
});

const createUserFail = message => ({
  type: CREATE_USER_FAIL,
  payload: { message },
});

export const createUser = user => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createUserAttempt());
    const body = user;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/management/user/create`;
    const response = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('User Created'));
    return dispatch(createUserSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createUserFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
