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

const updateFreezerSuccess = (index, item) => ({
  type: UPDATE_FREEZER_ITEM_SUCCESS,
  payload: {
    index,
    item,
  },
});

const updateFreezerFail = message => ({
  type: UPDATE_FREEZER_ITEM_FAIL,
  payload: { message },
});

export const updateFreezer = (item, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateFreezerAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_FREEZER_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_FREEZER_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateFreezerSuccess(index, updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateFreezerFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};