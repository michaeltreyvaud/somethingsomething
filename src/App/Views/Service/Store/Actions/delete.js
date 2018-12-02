import {
  DELETE_SERVICES_ATTEMPT,
  DELETE_SERVICES_SUCCESS,
  DELETE_SERVICES_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const deleteServicesAttempt = () => ({
  type: DELETE_SERVICES_ATTEMPT,
});

const deleteServicesSuccess = index => ({
  type: DELETE_SERVICES_SUCCESS,
  payload: {
    index,
  },
});

const deleteServicesFail = message => ({
  type: DELETE_SERVICES_FAIL,
  payload: { message },
});

export const deleteServices = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteServicesAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/service/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteServicesSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteServicesFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
