import {
  DELETE_CLEANING_ITEM_ATTEMPT,
  DELETE_CLEANING_ITEM_SUCCESS,
  DELETE_CLEANING_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteCleaningItemAttempt = () => ({
  type: DELETE_CLEANING_ITEM_ATTEMPT,
});

const deleteCleaningItemSuccess = index => ({
  type: DELETE_CLEANING_ITEM_SUCCESS,
  payload: {
    index,
  },
});

const deleteCleaningItemFail = message => ({
  type: DELETE_CLEANING_ITEM_FAIL,
  payload: { message },
});

export const deleteCleaningItem = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteCleaningItemAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_CLEANING_ITEM_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_CLEANING_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteCleaningItemSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteCleaningItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
