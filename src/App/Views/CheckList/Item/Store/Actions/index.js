import {
  LIST_CHECKLIST_ITEM_ATTEMPT,
  LIST_CHECKLIST_ITEM_SUCCESS,
  LIST_CHECKLIST_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listChecklistItemAttempt = () => ({
  type: LIST_CHECKLIST_ITEM_ATTEMPT,
});

const listChecklistItemSuccess = response => ({
  type: LIST_CHECKLIST_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const listChecklistItemFail = message => ({
  type: LIST_CHECKLIST_ITEM_FAIL,
  payload: { message },
});

export const listChecklistItemCategory = () => async (dispatch) => {
  try {
    dispatch(listChecklistItemAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_CHECKLIST_ITEM_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_CHECKLIST_ITEM_PATH}`, body);
    return dispatch(listChecklistItemSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listChecklistItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
