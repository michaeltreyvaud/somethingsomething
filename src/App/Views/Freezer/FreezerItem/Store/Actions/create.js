import {
  CREATE_FREEZER_ITEM_ATTEMPT,
  CREATE_FREEZER_ITEM_SUCCESS,
  CREATE_FREEZER_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createFreezerAttempt = () => ({
  type: CREATE_FREEZER_ITEM_ATTEMPT,
});

const createFreezerSuccess = response => ({
  type: CREATE_FREEZER_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const createFreezerFail = message => ({
  type: CREATE_FREEZER_ITEM_FAIL,
  payload: { message },
});

export const createFreezer = freezerItem => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createFreezerAttempt());
    const body = freezerItem;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_FREEZER_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_FREEZER_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createFreezerSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createFreezerFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
