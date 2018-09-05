import {
  LIST_FRIDGE_ITEM_ATTEMPT,
  LIST_FRIDGE_ITEM_SUCCESS,
  LIST_FRIDGE_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listFridgeAttempt = () => ({
  type: LIST_FRIDGE_ITEM_ATTEMPT,
});

const listFridgeSuccess = response => ({
  type: LIST_FRIDGE_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const listFridgeFail = message => ({
  type: LIST_FRIDGE_ITEM_FAIL,
  payload: { message },
});

export const listFridges = () => async (dispatch) => {
  try {
    dispatch(listFridgeAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_FRIDGES_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_FRIDGES_PATH}`, body);
    return dispatch(listFridgeSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFridgeFail(_err.message || 'An error has occurred'));
  }
};

//  TODO: Remove me
export const a = () => {};
