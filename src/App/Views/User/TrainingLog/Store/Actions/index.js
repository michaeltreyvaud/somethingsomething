import {
  LIST_TRAINING_LOG_ATTEMPT,
  LIST_TRAINING_LOG_SUCCESS,
  LIST_TRAINING_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listTrainingLogAttempt = () => ({
  type: LIST_TRAINING_LOG_ATTEMPT,
});

const listTrainingLogSuccess = response => ({
  type: LIST_TRAINING_LOG_SUCCESS,
  payload: {
    response,
  },
});

const listTrainingLogFail = message => ({
  type: LIST_TRAINING_LOG_FAIL,
  payload: { message },
});

export const listTrainingLogs = () => async (dispatch) => {
  try {
    dispatch(listTrainingLogAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/medicallog/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listTrainingLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listTrainingLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
