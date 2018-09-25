import {
  DELETE_TRAINING_LOG_ATTEMPT,
  DELETE_TRAINING_LOG_SUCCESS,
  DELETE_TRAINING_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteTrainingLogAttempt = () => ({
  type: DELETE_TRAINING_LOG_ATTEMPT,
});

const deleteTrainingLogSuccess = index => ({
  type: DELETE_TRAINING_LOG_SUCCESS,
  payload: {
    index,
  },
});

const deleteTrainingLogFail = message => ({
  type: DELETE_TRAINING_LOG_FAIL,
  payload: { message },
});

export const deleteTrainingLog = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteTrainingLogAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_TRAINING_LOG_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_TRAINING_LOG_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteTrainingLogSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteTrainingLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
