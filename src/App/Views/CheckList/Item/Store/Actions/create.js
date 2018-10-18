import {
  CREATE_CHECKLIST_ITEM_ATTEMPT,
  CREATE_CHECKLIST_ITEM_SUCCESS,
  CREATE_CHECKLIST_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createChecklistItemAttempt = () => ({
  type: CREATE_CHECKLIST_ITEM_ATTEMPT,
});

const createChecklistItemSuccess = response => ({
  type: CREATE_CHECKLIST_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const createChecklistItemFail = message => ({
  type: CREATE_CHECKLIST_ITEM_FAIL,
  payload: { message },
});

export const createChecklistItem = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createChecklistItemAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_CHECKLIST_ITEM_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_CHECKLIST_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createChecklistItemSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createChecklistItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
