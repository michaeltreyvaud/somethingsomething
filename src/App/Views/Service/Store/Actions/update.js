import {
  UPDATE_SERVICES_ATTEMPT,
  UPDATE_SERVICES_SUCCESS,
  UPDATE_SERVICES_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const updateServicesAttempt = () => ({
  type: UPDATE_SERVICES_ATTEMPT,
});

const updateServicesSuccess = item => ({
  type: UPDATE_SERVICES_SUCCESS,
  payload: {
    item,
  },
});

const updateServicesFail = message => ({
  type: UPDATE_SERVICES_FAIL,
  payload: { message },
});

export const updateServices = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateServicesAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_SERVICES_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_SERVICES_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateServicesSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateServicesFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
