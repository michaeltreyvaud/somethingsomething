import {
  DELETE_FREEZER_ITEM_ATTEMPT,
  DELETE_FREEZER_ITEM_SUCCESS,
  DELETE_FREEZER_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteFreezerAttempt = () => ({
  type: DELETE_FREEZER_ITEM_ATTEMPT,
});

const deleteFreezerSuccess = index => ({
  type: DELETE_FREEZER_ITEM_SUCCESS,
  payload: {
    index,
  },
});

const deleteFreezerFail = message => ({
  type: DELETE_FREEZER_ITEM_FAIL,
  payload: { message },
});

export const deleteFreezer = (item, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteFreezerAttempt());
    const body = { ...item };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/freezeritem/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteFreezerSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteFreezerFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
