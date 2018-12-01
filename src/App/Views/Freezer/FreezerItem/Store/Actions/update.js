import {
  UPDATE_FREEZER_ITEM_ATTEMPT,
  UPDATE_FREEZER_ITEM_SUCCESS,
  UPDATE_FREEZER_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateFreezerAttempt = () => ({
  type: UPDATE_FREEZER_ITEM_ATTEMPT,
});

const updateFreezerSuccess = item => ({
  type: UPDATE_FREEZER_ITEM_SUCCESS,
  payload: {
    item,
  },
});

const updateFreezerFail = message => ({
  type: UPDATE_FREEZER_ITEM_FAIL,
  payload: { message },
});

export const updateFreezer = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateFreezerAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/freezeritem/create`;
    const updatedItem = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateFreezerSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateFreezerFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
