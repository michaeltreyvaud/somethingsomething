import {
  DELETE_CHECKLIST_CATEGORY_ATTEMPT,
  DELETE_CHECKLIST_CATEGORY_SUCCESS,
  DELETE_CHECKLIST_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteChecklistAttempt = () => ({
  type: DELETE_CHECKLIST_CATEGORY_ATTEMPT,
});

const deleteChecklistSuccess = index => ({
  type: DELETE_CHECKLIST_CATEGORY_SUCCESS,
  payload: {
    index,
  },
});

const deleteChecklistFail = message => ({
  type: DELETE_CHECKLIST_CATEGORY_FAIL,
  payload: { message },
});

export const deleteChecklist = (id, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteChecklistAttempt());
    const body = { id };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_CHECKLIST_CATEGORY_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_CHECKLIST_CATEGORY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteChecklistSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteChecklistFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
