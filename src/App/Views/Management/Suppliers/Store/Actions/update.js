import {
  UPDATE_SUPPLIER_ATTEMPT,
  UPDATE_SUPPLIER_SUCCESS,
  UPDATE_SUPPLIER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateSupplierAttempt = () => ({
  type: UPDATE_SUPPLIER_ATTEMPT,
});

const updateSupplierSuccess = item => ({
  type: UPDATE_SUPPLIER_SUCCESS,
  payload: {
    item,
  },
});

const updateSupplierFail = message => ({
  type: UPDATE_SUPPLIER_FAIL,
  payload: { message },
});

export const updateSupplier = supplier => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateSupplierAttempt());
    const body = supplier;
    console.log(supplier);
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_SUPPLIER_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_SUPPLIER_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateSupplierSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateSupplierFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
