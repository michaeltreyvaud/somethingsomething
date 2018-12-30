import {
  RECORD_DELETE_ATTEMPT,
  RECORD_DELETE_SUCCESS,
  RECORD_DELETE_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../Layouts/Dashboard/Store/Actions';

const attempt = () => ({ type: RECORD_DELETE_ATTEMPT });

const success = id => ({
  type: RECORD_DELETE_SUCCESS,
  payload: { id },
});

const fail = message => ({
  type: RECORD_DELETE_FAIL,
  payload: { message },
});

export const deleteRecord = item => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(attempt());
    const body = { ...item };
    const { id, type } = body;
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/item/${type}/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(success(id));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(fail(_err.message));
  }
};
