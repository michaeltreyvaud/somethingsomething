import {
  RECORD_LIST_SET_TYPE,
  RECORD_LIST_ATTEMPT,
  RECORD_LIST_SUCCESS,
  RECORD_LIST_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError } from '../../../../Layouts/Dashboard/Store/Actions';

const emtpyResponse = { Items: [] };

const attempt = () => ({
  type: RECORD_LIST_ATTEMPT,
});

const success = (response = emtpyResponse) => ({
  type: RECORD_LIST_SUCCESS,
  payload: { response },
});

const fail = message => ({
  type: RECORD_LIST_FAIL,
  payload: { message },
});

export const list = (recordType, options) => async (dispatch) => {
  try {
    if (!recordType || recordType === '') return dispatch(success());
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(attempt());
    const body = { ...options };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/${recordType}/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(success(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(fail(_err.message));
  }
};

export const listMore = (recordType, next) => async dispatch => dispatch(list(recordType, { from: next }));

const selectedRecordType = recordType => ({
  type: RECORD_LIST_SET_TYPE,
  payload: { recordType },
});

export const setRecordType = recordType => async (dispatch) => {
  dispatch(selectedRecordType(recordType));
  return dispatch(list(recordType));
};
