import {
  LIST_CLEANING_LOG_ATTEMPT,
  LIST_CLEANING_LOG_SUCCESS,
  LIST_CLEANING_LOG_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listCleaningLogAttempt = () => ({
  type: LIST_CLEANING_LOG_ATTEMPT,
});

const listCleaningLogSuccess = response => ({
  type: LIST_CLEANING_LOG_SUCCESS,
  payload: {
    response,
  },
});

const listCleaningLogFail = message => ({
  type: LIST_CLEANING_LOG_FAIL,
  payload: { message },
});

export const listCleaningLogs = () => async (dispatch) => {
  try {
    dispatch(listCleaningLogAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_CLEANING_LOG_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_CLEANING_LOG_PATH}`, body);
    return dispatch(listCleaningLogSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listCleaningLogFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
