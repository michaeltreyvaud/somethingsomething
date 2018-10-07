import {
  LIST_PEST_ATTEMPT,
  LIST_PEST_SUCCESS,
  LIST_PEST_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';

const listPestAttempt = () => ({
  type: LIST_PEST_ATTEMPT,
});

const listPestSuccess = response => ({
  type: LIST_PEST_SUCCESS,
  payload: {
    response,
  },
});

const listPestFail = message => ({
  type: LIST_PEST_FAIL,
  payload: { message },
});

export const listPests = () => async (dispatch) => {
  try {
    dispatch(listPestAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_PEST_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_PEST_PATH}`, body);
    return dispatch(listPestSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listPestFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
