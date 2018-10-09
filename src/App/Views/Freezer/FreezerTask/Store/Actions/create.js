import {
  CREATE_FREEZER_TASK_ATTEMPT,
  CREATE_FREEZER_TASK_SUCCESS,
  CREATE_FREEZER_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createFreezerTaskAttempt = () => ({
  type: CREATE_FREEZER_TASK_ATTEMPT,
});

const createFreezerTaskSuccess = response => ({
  type: CREATE_FREEZER_TASK_SUCCESS,
  payload: {
    response,
  },
});

const createFreezerTaskFail = message => ({
  type: CREATE_FREEZER_TASK_FAIL,
  payload: { message },
});

export const createFreezerTask = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFreezerTaskAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FREEZER_TASK_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FREEZER_TASK_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFreezerTaskSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFreezerTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
