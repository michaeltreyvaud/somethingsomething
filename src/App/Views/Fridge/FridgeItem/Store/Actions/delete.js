import {
  DELETE_FRIDGE_ITEM_ATTEMPT,
  DELETE_FRIDGE_ITEM_SUCCESS,
  DELETE_FRIDGE_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteFridgeAttempt = () => ({
  type: DELETE_FRIDGE_ITEM_ATTEMPT,
});

const deleteFridgeSuccess = index => ({
  type: DELETE_FRIDGE_ITEM_SUCCESS,
  payload: {
    index,
  },
});

const deleteFridgeFail = message => ({
  type: DELETE_FRIDGE_ITEM_FAIL,
  payload: { message },
});

export const deleteFridge = (id, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteFridgeAttempt());
    const body = { id };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fridgeitem/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteFridgeSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteFridgeFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
