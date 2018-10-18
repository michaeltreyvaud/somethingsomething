import {
  UPDATE_CHECKLIST_ITEM_ATTEMPT,
  UPDATE_CHECKLIST_ITEM_SUCCESS,
  UPDATE_CHECKLIST_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateChecklistItemAttempt = () => ({
  type: UPDATE_CHECKLIST_ITEM_ATTEMPT,
});

const updateChecklistItemSuccess = item => ({
  type: UPDATE_CHECKLIST_ITEM_SUCCESS,
  payload: {
    item,
  },
});

const updateChecklistItemFail = message => ({
  type: UPDATE_CHECKLIST_ITEM_FAIL,
  payload: { message },
});

export const updateChecklistItem = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateChecklistItemAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_CHECKLIST_ITEM_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_CHECKLIST_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateChecklistItemSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateChecklistItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
