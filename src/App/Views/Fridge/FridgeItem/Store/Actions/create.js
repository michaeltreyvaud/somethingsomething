import {
  CREATE_FRIDGE_ITEM_ATTEMPT,
  CREATE_FRIDGE_ITEM_SUCCESS,
  CREATE_FRIDGE_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const createFridgeAttempt = () => ({
  type: CREATE_FRIDGE_ITEM_ATTEMPT,
});

const createFridgeSuccess = response => ({
  type: CREATE_FRIDGE_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const createFridgeFail = message => ({
  type: CREATE_FRIDGE_ITEM_FAIL,
  payload: { message },
});

export const createFridge = (name, description) => async (dispatch) => {
  try {
    dispatch(createFridgeAttempt());
    const body = { name, description };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FRIDGES_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FRIDGES_PATH}`, body);
    return dispatch(createFridgeSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(createFridgeFail(_err.message || 'An error has occurred'));
  }
};
