import {
  CREATE_CHECKLIST_CATEGORY_ATTEMPT,
  CREATE_CHECKLIST_CATEGORY_SUCCESS,
  CREATE_CHECKLIST_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createChecklistAttempt = () => ({
  type: CREATE_CHECKLIST_CATEGORY_ATTEMPT,
});

const createChecklistSuccess = response => ({
  type: CREATE_CHECKLIST_CATEGORY_SUCCESS,
  payload: {
    response,
  },
});

const createChecklistFail = message => ({
  type: CREATE_CHECKLIST_CATEGORY_FAIL,
  payload: { message },
});

export const createChecklist = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createChecklistAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_CHECKLIST_CATEGORY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_CHECKLIST_CATEGORY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createChecklistSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createChecklistFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
