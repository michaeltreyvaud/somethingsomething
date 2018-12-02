import {
  CREATE_TRAINING_LOG_ATTEMPT,
  CREATE_TRAINING_LOG_SUCCESS,
  CREATE_TRAINING_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createTrainingLogAttempt = () => ({
  type: CREATE_TRAINING_LOG_ATTEMPT,
});

const createTrainingLogSuccess = response => ({
  type: CREATE_TRAINING_LOG_SUCCESS,
  payload: {
    response,
  },
});

const createTrainingLogFail = message => ({
  type: CREATE_TRAINING_LOG_FAIL,
  payload: { message },
});

export const createTrainingLog = trainingLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createTrainingLogAttempt());
    const body = trainingLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/medicallog/create`;
    const response = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createTrainingLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createTrainingLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
