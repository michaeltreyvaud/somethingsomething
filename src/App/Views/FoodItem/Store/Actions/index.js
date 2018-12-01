import {
  LIST_FOOD_ITEM_ATTEMPT,
  LIST_FOOD_ITEM_SUCCESS,
  LIST_FOOD_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';

const listFoodItemAttempt = () => ({
  type: LIST_FOOD_ITEM_ATTEMPT,
});

const listFoodItemSuccess = response => ({
  type: LIST_FOOD_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const listFoodItemFail = message => ({
  type: LIST_FOOD_ITEM_FAIL,
  payload: { message },
});

export const listFoodItems = () => async (dispatch) => {
  try {
    dispatch(listFoodItemAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fooditem/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listFoodItemSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listFoodItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
