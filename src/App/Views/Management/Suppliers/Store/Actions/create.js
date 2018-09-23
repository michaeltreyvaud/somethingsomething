import {
  CREATE_SUPPLIER_ATTEMPT,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createSupplierAttempt = () => ({
  type: CREATE_SUPPLIER_ATTEMPT,
});

const createSupplierSuccess = response => ({
  type: CREATE_SUPPLIER_SUCCESS,
  payload: {
    response,
  },
});

const createSupplierFail = message => ({
  type: CREATE_SUPPLIER_FAIL,
  payload: { message },
});

export const createSupplier = supplier => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createSupplierAttempt());
    const body = supplier;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_SUPPLIER_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_SUPPLIER_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createSupplierSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createSupplierFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
