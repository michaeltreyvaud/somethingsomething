import {
  CREATE_FRIDGE_ITEM_ATTEMPT,
  CREATE_FRIDGE_ITEM_SUCCESS,
  CREATE_FRIDGE_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createFridgeAttempt = () => ({
  type: CREATE_FRIDGE_ITEM_ATTEMPT,
});

const createFridgeSuccess = response => ({
  type: CREATE_FRIDGE_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const createFridgeFail = message => ({
  type: CREATE_FRIDGE_ITEM_FAIL,
  payload: { message },
});

export const createFridge = fridgeItem => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFridgeAttempt());
    const body = fridgeItem;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FRIDGES_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FRIDGES_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFridgeSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFridgeFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
