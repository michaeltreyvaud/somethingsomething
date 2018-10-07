import {
  DELETE_PEST_ATTEMPT,
  DELETE_PEST_SUCCESS,
  DELETE_PEST_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const deletePestAttempt = () => ({
  type: DELETE_PEST_ATTEMPT,
});

const deletePestSuccess = index => ({
  type: DELETE_PEST_SUCCESS,
  payload: {
    index,
  },
});

const deletePestFail = message => ({
  type: DELETE_PEST_FAIL,
  payload: { message },
});

export const deletePest = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deletePestAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_PEST_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_PEST_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deletePestSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deletePestFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
