import {
  CREATE_CLEANING_ITEM_ATTEMPT,
  CREATE_CLEANING_ITEM_SUCCESS,
  CREATE_CLEANING_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createCleaningItemAttempt = () => ({
  type: CREATE_CLEANING_ITEM_ATTEMPT,
});

const createCleaningItemSuccess = response => ({
  type: CREATE_CLEANING_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const createCleaningItemFail = message => ({
  type: CREATE_CLEANING_ITEM_FAIL,
  payload: { message },
});

export const createCleaningItem = cleaning => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createCleaningItemAttempt());
    const body = cleaning;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_CLEANING_ITEM_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_CLEANING_ITEM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createCleaningItemSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createCleaningItemFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
