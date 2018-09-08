import {
  DELETE_TEAM_ITEM_ATTEMPT,
  DELETE_TEAM_ITEM_SUCCESS,
  DELETE_TEAM_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const deleteTeamAttempt = () => ({
  type: DELETE_TEAM_ITEM_ATTEMPT,
});

const deleteTeamSuccess = index => ({
  type: DELETE_TEAM_ITEM_SUCCESS,
  payload: {
    index,
  },
});

const deleteTeamFail = message => ({
  type: DELETE_TEAM_ITEM_FAIL,
  payload: { message },
});

export const deleteTeam = (name, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteTeamAttempt());
    const body = { name };
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_DELETE_TEAM_PATH } = process.env;
    await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_DELETE_TEAM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Deleted'));
    return dispatch(deleteTeamSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteTeamFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
