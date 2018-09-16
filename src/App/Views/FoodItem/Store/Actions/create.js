import {
  CREATE_FOOD_ITEM_ATTEMPT_ATTEMPT,
  CREATE_FOOD_ITEM_ATTEMPT_SUCCESS,
  CREATE_FOOD_ITEM_ATTEMPT_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const createFoodItemAttempt = () => ({
  type: CREATE_FOOD_ITEM_ATTEMPT_ATTEMPT,
});

const createFoodItemSuccess = response => ({
  type: CREATE_FOOD_ITEM_ATTEMPT_SUCCESS,
  payload: {
    response,
  },
});

const createFoodItemFail = message => ({
  type: CREATE_FOOD_ITEM_ATTEMPT_FAIL,
  payload: { message },
});

export const createFoodItem = foodItem => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFoodItemAttempt());
    const body = foodItem;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FOOD_ITEM_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FOOD_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFoodItemSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFoodItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
