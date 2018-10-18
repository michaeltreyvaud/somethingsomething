import {
  LIST_CLEANING_ITEM_ATTEMPT,
  LIST_CLEANING_ITEM_SUCCESS,
  LIST_CLEANING_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listCleaningItemAttempt = () => ({
  type: LIST_CLEANING_ITEM_ATTEMPT,
});

const listCleaningItemSuccess = response => ({
  type: LIST_CLEANING_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const listCleaningItemFail = message => ({
  type: LIST_CLEANING_ITEM_FAIL,
  payload: { message },
});

export const listCleaningItems = () => async (dispatch) => {
  try {
    dispatch(listCleaningItemAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_CLEANING_ITEM_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_CLEANING_ITEM_PATH}`, body);
    return dispatch(listCleaningItemSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listCleaningItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
