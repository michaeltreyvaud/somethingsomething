import {
  UPDATE_TEAM_ITEM_ATTEMPT,
  UPDATE_TEAM_ITEM_SUCCESS,
  UPDATE_TEAM_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const updateTeamAttempt = () => ({
  type: UPDATE_TEAM_ITEM_ATTEMPT,
});

const updateTeamSuccess = item => ({
  type: UPDATE_TEAM_ITEM_SUCCESS,
  payload: {
    item,
  },
});

const updateTeamFail = message => ({
  type: UPDATE_TEAM_ITEM_FAIL,
  payload: { message },
});

export const updateTeam = team => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(updateTeamAttempt());
    const body = team;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_MANAGEMENT_TEAM_UPDATE_PATH } = process.env;
    const updatedItem = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_MANAGEMENT_TEAM_UPDATE_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Updated'));
    return dispatch(updateTeamSuccess(updatedItem));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(updateTeamFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
