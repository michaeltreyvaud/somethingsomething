import {
  UPDATE_FRIDGE_ITEM_ATTEMPT,
  UPDATE_FRIDGE_ITEM_SUCCESS,
  UPDATE_FRIDGE_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateFridgeAttempt = () => ({
  type: UPDATE_FRIDGE_ITEM_ATTEMPT,
});

const updateFridgeSuccess = item => ({
  type: UPDATE_FRIDGE_ITEM_SUCCESS,
  payload: {
    item,
  },
});

const updateFridgeFail = message => ({
  type: UPDATE_FRIDGE_ITEM_FAIL,
  payload: { message },
});

export const updateFridge = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateFridgeAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_FRIDGES_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_FRIDGES_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateFridgeSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateFridgeFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
