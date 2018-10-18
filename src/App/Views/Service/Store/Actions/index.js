import {
  LIST_SERVICES_ATTEMPT,
  LIST_SERVICES_SUCCESS,
  LIST_SERVICES_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';

const listServicesAttempt = () => ({
  type: LIST_SERVICES_ATTEMPT,
});

const listServicesSuccess = response => ({
  type: LIST_SERVICES_SUCCESS,
  payload: {
    response,
  },
});

const listServicesFail = message => ({
  type: LIST_SERVICES_FAIL,
  payload: { message },
});

export const listServices = () => async (dispatch) => {
  try {
    dispatch(listServicesAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_SERVICES_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_SERVICES_PATH}`, body);
    return dispatch(listServicesSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listServicesFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
