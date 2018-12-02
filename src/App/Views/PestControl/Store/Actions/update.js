import {
  UPDATE_PEST_ATTEMPT,
  UPDATE_PEST_SUCCESS,
  UPDATE_PEST_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const updatePestAttempt = () => ({
  type: UPDATE_PEST_ATTEMPT,
});

const updatePestSuccess = item => ({
  type: UPDATE_PEST_SUCCESS,
  payload: {
    item,
  },
});

const updatePestFail = message => ({
  type: UPDATE_PEST_FAIL,
  payload: { message },
});

export const updatePest = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updatePestAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/pest/update`;
    const updatedItem = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updatePestSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updatePestFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
