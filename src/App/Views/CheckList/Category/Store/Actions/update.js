import {
  UPDATE_CHECKLIST_CATEGORY_ATTEMPT,
  UPDATE_CHECKLIST_CATEGORY_SUCCESS,
  UPDATE_CHECKLIST_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateChecklistAttempt = () => ({
  type: UPDATE_CHECKLIST_CATEGORY_ATTEMPT,
});

const updateChecklistSuccess = item => ({
  type: UPDATE_CHECKLIST_CATEGORY_SUCCESS,
  payload: {
    item,
  },
});

const updateChecklistFail = message => ({
  type: UPDATE_CHECKLIST_CATEGORY_FAIL,
  payload: { message },
});

export const updateChecklist = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateChecklistAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_CHECKLIST_CATEGORY_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_CHECKLIST_CATEGORY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateChecklistSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateChecklistFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
