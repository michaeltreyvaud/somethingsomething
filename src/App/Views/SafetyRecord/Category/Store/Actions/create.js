import {
  CREATE_SAFETY_RECORD_CATEGORY_ATTEMPT,
  CREATE_SAFETY_RECORD_CATEGORY_SUCCESS,
  CREATE_SAFETY_RECORD_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createSafetyRecordCategoryAttempt = () => ({
  type: CREATE_SAFETY_RECORD_CATEGORY_ATTEMPT,
});

const createSafetyRecordCategorySuccess = response => ({
  type: CREATE_SAFETY_RECORD_CATEGORY_SUCCESS,
  payload: {
    response,
  },
});

const createSafetyRecordCategoryFail = message => ({
  type: CREATE_SAFETY_RECORD_CATEGORY_FAIL,
  payload: { message },
});

export const createSafetyRecordCategory = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createSafetyRecordCategoryAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_SAFETY_RECORD_CATEGORY_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_SAFETY_RECORD_CATEGORY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createSafetyRecordCategorySuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createSafetyRecordCategoryFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
