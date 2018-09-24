import {
  DELETE_SUPPLIER_ATTEMPT,
  DELETE_SUPPLIER_SUCCESS,
  DELETE_SUPPLIER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteSupplierAttempt = () => ({
  type: DELETE_SUPPLIER_ATTEMPT,
});

const deleteSupplierSuccess = index => ({
  type: DELETE_SUPPLIER_SUCCESS,
  payload: {
    index,
  },
});

const deleteSupplierFail = message => ({
  type: DELETE_SUPPLIER_FAIL,
  payload: { message },
});

export const deleteSupplier = (name, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteSupplierAttempt());
    const body = { name };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_SUPPLIER_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_SUPPLIER_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteSupplierSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteSupplierFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
