import {
  UPDATE_FOOD_ITEM_ATTEMPT,
  UPDATE_FOOD_ITEM_SUCCESS,
  UPDATE_FOOD_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const updateFoodItemAttempt = () => ({
  type: UPDATE_FOOD_ITEM_ATTEMPT,
});

const updateFoodItemSuccess = item => ({
  type: UPDATE_FOOD_ITEM_SUCCESS,
  payload: {
    item,
  },
});

const updateFoodItemFail = message => ({
  type: UPDATE_FOOD_ITEM_FAIL,
  payload: { message },
});

export const updateFoodItem = foodItem => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateFoodItemAttempt());
    const body = foodItem;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/food/update`;
    const updatedItem = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateFoodItemSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateFoodItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
