import {
  LIST_FREEZER_ITEM_ATTEMPT,
  LIST_FREEZER_ITEM_SUCCESS,
  LIST_FREEZER_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listFreezerAttempt = () => ({
  type: LIST_FREEZER_ITEM_ATTEMPT,
});

const listFreezerSuccess = response => ({
  type: LIST_FREEZER_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const listFreezerFail = message => ({
  type: LIST_FREEZER_ITEM_FAIL,
  payload: { message },
});

export const listFreezers = () => async (dispatch) => {
  try {
    dispatch(listFreezerAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/freezeritem/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listFreezerSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFreezerFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
