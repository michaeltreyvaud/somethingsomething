import {
  LIST_CHECKLIST_CATEGORY_ATTEMPT,
  LIST_CHECKLIST_CATEGORY_SUCCESS,
  LIST_CHECKLIST_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listChecklistAttempt = () => ({
  type: LIST_CHECKLIST_CATEGORY_ATTEMPT,
});

const listChecklistSuccess = response => ({
  type: LIST_CHECKLIST_CATEGORY_SUCCESS,
  payload: {
    response,
  },
});

const listChecklistFail = message => ({
  type: LIST_CHECKLIST_CATEGORY_FAIL,
  payload: { message },
});

export const listChecklistCategory = () => async (dispatch) => {
  try {
    dispatch(listChecklistAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_CHECKLIST_CATEGORY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_CHECKLIST_CATEGORY_PATH}`, body);
    return dispatch(listChecklistSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listChecklistFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
