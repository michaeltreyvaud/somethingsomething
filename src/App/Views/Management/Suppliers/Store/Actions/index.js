import {
  LIST_SUPPLIER_ATTEMPT,
  LIST_SUPPLIER_SUCCESS,
  LIST_SUPPLIER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listSupplierAttempt = () => ({
  type: LIST_SUPPLIER_ATTEMPT,
});

const listSupplierSuccess = response => ({
  type: LIST_SUPPLIER_SUCCESS,
  payload: {
    response,
  },
});

const listSupplierFail = message => ({
  type: LIST_SUPPLIER_FAIL,
  payload: { message },
});

export const listSuppliers = () => async (dispatch) => {
  try {
    dispatch(listSupplierAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_SUPPLIER_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_SUPPLIER_PATH}`, body);
    return dispatch(listSupplierSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listSupplierFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
