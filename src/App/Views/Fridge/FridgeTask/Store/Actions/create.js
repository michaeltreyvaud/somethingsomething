import {
  CREATE_FRIDGE_TASK_ATTEMPT,
  CREATE_FRIDGE_TASK_SUCCESS,
  CREATE_FRIDGE_TASK_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createFridgeTaskAttempt = () => ({
  type: CREATE_FRIDGE_TASK_ATTEMPT,
});

const createFridgeTaskSuccess = response => ({
  type: CREATE_FRIDGE_TASK_SUCCESS,
  payload: {
    response,
  },
});

const createFridgeTaskFail = message => ({
  type: CREATE_FRIDGE_TASK_FAIL,
  payload: { message },
});

export const createFridgeTask = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFridgeTaskAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FRIDGE_TASK_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FRIDGE_TASK_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFridgeTaskSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFridgeTaskFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
