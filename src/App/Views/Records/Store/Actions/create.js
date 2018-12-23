import {
  CREATE_FOOD_DELIVERY_RECORD_ATTEMPT,
  CREATE_FOOD_DELIVERY_RECORD_SUCCESS,
  CREATE_FOOD_DELIVERY_RECORD_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const attempt = () => ({
  type: CREATE_FOOD_DELIVERY_RECORD_ATTEMPT,
});

const success = response => ({
  type: CREATE_FOOD_DELIVERY_RECORD_SUCCESS,
  payload: { response },
});

const fail = message => ({
  type: CREATE_FOOD_DELIVERY_RECORD_FAIL,
  payload: { message },
});

export const create = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(attempt());
    const body = item;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/fooddelivery/create`;
    const response = await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(success(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(fail(_err.message));
  }
};
