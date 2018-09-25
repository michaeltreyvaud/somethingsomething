import {
  UPDATE_TRAINING_LOG_ATTEMPT,
  UPDATE_TRAINING_LOG_SUCCESS,
  UPDATE_TRAINING_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateTrainingLogAttempt = () => ({
  type: UPDATE_TRAINING_LOG_ATTEMPT,
});

const updateTrainingLogSuccess = item => ({
  type: UPDATE_TRAINING_LOG_SUCCESS,
  payload: {
    item,
  },
});

const updateTrainingLogFail = message => ({
  type: UPDATE_TRAINING_LOG_FAIL,
  payload: { message },
});

export const updateTrainingLog = trainingLog => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateTrainingLogAttempt());
    const body = trainingLog;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_TRAINING_LOG_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_TRAINING_LOG_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateTrainingLogSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateTrainingLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
