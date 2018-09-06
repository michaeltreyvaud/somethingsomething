import {
  DELETE_FRIDGE_ITEM_ATTEMPT,
  DELETE_FRIDGE_ITEM_SUCCESS,
  DELETE_FRIDGE_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const deleteFridgeAttempt = () => ({
  type: DELETE_FRIDGE_ITEM_ATTEMPT,
});

const deleteFridgeSuccess = index => ({
  type: DELETE_FRIDGE_ITEM_SUCCESS,
  payload: {
    index,
  },
});

const deleteFridgeFail = message => ({
  type: DELETE_FRIDGE_ITEM_FAIL,
  payload: { message },
});

export const deleteFridge = (id, index) => async (dispatch) => {
  try {
    dispatch(deleteFridgeAttempt());
    const body = { id };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_FRIDGES_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_FRIDGES_PATH}`, body);
    return dispatch(deleteFridgeSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(deleteFridgeFail(_err.message || 'An error has occurred'));
  }
};
