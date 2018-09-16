import {
  DELETE_FOOD_ITEM_ATTEMPT,
  DELETE_FOOD_ITEM_SUCCESS,
  DELETE_FOOD_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const deleteFoodItemAttempt = () => ({
  type: DELETE_FOOD_ITEM_ATTEMPT,
});

const deleteFoodItemSuccess = index => ({
  type: DELETE_FOOD_ITEM_SUCCESS,
  payload: {
    index,
  },
});

const deleteFoodItemFail = message => ({
  type: DELETE_FOOD_ITEM_FAIL,
  payload: { message },
});

export const deleteFoodItem = (createdAt, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteFoodItemAttempt());
    const body = { createdAt };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_FOOD_ITEM_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_FOOD_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteFoodItemSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteFoodItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
