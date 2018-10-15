import {
  LIST_SAFETY_RECORD_CATEGORY_ATTEMPT,
  LIST_SAFETY_RECORD_CATEGORY_SUCCESS,
  LIST_SAFETY_RECORD_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listsafetyRecordCategoryAttempt = () => ({
  type: LIST_SAFETY_RECORD_CATEGORY_ATTEMPT,
});

const listsafetyRecordCategorySuccess = response => ({
  type: LIST_SAFETY_RECORD_CATEGORY_SUCCESS,
  payload: {
    response,
  },
});

const listsafetyRecordCategoryFail = message => ({
  type: LIST_SAFETY_RECORD_CATEGORY_FAIL,
  payload: { message },
});

export const listsafetyRecordCategoryCategory = () => async (dispatch) => {
  try {
    dispatch(listsafetyRecordCategoryAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_SAFETY_RECORD_CATEGORY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_SAFETY_RECORD_CATEGORY_PATH}`, body);
    return dispatch(listsafetyRecordCategorySuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listsafetyRecordCategoryFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
