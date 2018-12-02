import {
  CREATE_PEST_ATTEMPT,
  CREATE_PEST_SUCCESS,
  CREATE_PEST_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const createPestAttempt = () => ({
  type: CREATE_PEST_ATTEMPT,
});

const createPestSuccess = response => ({
  type: CREATE_PEST_SUCCESS,
  payload: {
    response,
  },
});

const createPestFail = message => ({
  type: CREATE_PEST_FAIL,
  payload: { message },
});

export const createPest = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createPestAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/pest/create`;
    const response = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createPestSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createPestFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
