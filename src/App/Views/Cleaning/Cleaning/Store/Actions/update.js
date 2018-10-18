import {
  UPDATE_CLEANING_ITEM_ATTEMPT,
  UPDATE_CLEANING_ITEM_SUCCESS,
  UPDATE_CLEANING_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateCleaningItemAttempt = () => ({
  type: UPDATE_CLEANING_ITEM_ATTEMPT,
});

const updateCleaningItemSuccess = item => ({
  type: UPDATE_CLEANING_ITEM_SUCCESS,
  payload: {
    item,
  },
});

const updateCleaningItemFail = message => ({
  type: UPDATE_CLEANING_ITEM_FAIL,
  payload: { message },
});

export const updateCleaningItem = cleaning => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateCleaningItemAttempt());
    const body = cleaning;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_CLEANING_ITEM_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_CLEANING_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateCleaningItemSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateCleaningItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
