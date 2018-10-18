import {
  UPDATE_SAFETY_RECORD_CATEGORY_ATTEMPT,
  UPDATE_SAFETY_RECORD_CATEGORY_SUCCESS,
  UPDATE_SAFETY_RECORD_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updatesafetyRecordCategoryAttempt = () => ({
  type: UPDATE_SAFETY_RECORD_CATEGORY_ATTEMPT,
});

const updatesafetyRecordCategorySuccess = item => ({
  type: UPDATE_SAFETY_RECORD_CATEGORY_SUCCESS,
  payload: {
    item,
  },
});

const updatesafetyRecordCategoryFail = message => ({
  type: UPDATE_SAFETY_RECORD_CATEGORY_FAIL,
  payload: { message },
});

export const updatesafetyRecordCategory = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updatesafetyRecordCategoryAttempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_UPDATE_SAFETY_RECORD_CATEGORY_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_UPDATE_SAFETY_RECORD_CATEGORY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updatesafetyRecordCategorySuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updatesafetyRecordCategoryFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
