import {
  DELETE_CHECKLIST_ITEM_ATTEMPT,
  DELETE_CHECKLIST_ITEM_SUCCESS,
  DELETE_CHECKLIST_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteChecklistItemAttempt = () => ({
  type: DELETE_CHECKLIST_ITEM_ATTEMPT,
});

const deleteChecklistItemSuccess = index => ({
  type: DELETE_CHECKLIST_ITEM_SUCCESS,
  payload: {
    index,
  },
});

const deleteChecklistItemFail = message => ({
  type: DELETE_CHECKLIST_ITEM_FAIL,
  payload: { message },
});

export const deleteChecklistItem = (id, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteChecklistItemAttempt());
    const body = { id };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_CHECKLIST_ITEM_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_CHECKLIST_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteChecklistItemSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteChecklistItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
