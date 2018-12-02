import {
  CREATE_SERVICES_ATTEMPT,
  CREATE_SERVICES_SUCCESS,
  CREATE_SERVICES_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const createServicesAttempt = () => ({
  type: CREATE_SERVICES_ATTEMPT,
});

const createServicesSuccess = response => ({
  type: CREATE_SERVICES_SUCCESS,
  payload: {
    response,
  },
});

const createServicesFail = message => ({
  type: CREATE_SERVICES_FAIL,
  payload: { message },
});

export const createServices = services => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createServicesAttempt());
    const body = services;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/service/create`;
    const response = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createServicesSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createServicesFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
