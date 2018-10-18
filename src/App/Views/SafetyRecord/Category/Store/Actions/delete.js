import {
  DELETE_SAFETY_RECORD_CATEGORY_ATTEMPT,
  DELETE_SAFETY_RECORD_CATEGORY_SUCCESS,
  DELETE_SAFETY_RECORD_CATEGORY_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deletesafetyRecordCategoryAttempt = () => ({
  type: DELETE_SAFETY_RECORD_CATEGORY_ATTEMPT,
});

const deletesafetyRecordCategorySuccess = index => ({
  type: DELETE_SAFETY_RECORD_CATEGORY_SUCCESS,
  payload: {
    index,
  },
});

const deletesafetyRecordCategoryFail = message => ({
  type: DELETE_SAFETY_RECORD_CATEGORY_FAIL,
  payload: { message },
});

export const deletesafetyRecordCategory = (id, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deletesafetyRecordCategoryAttempt());
    const body = { id };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_SAFETY_RECORD_CATEGORY_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_SAFETY_RECORD_CATEGORY_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deletesafetyRecordCategorySuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deletesafetyRecordCategoryFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
