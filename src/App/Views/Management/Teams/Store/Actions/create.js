import {
  CREATE_TEAM_ITEM_ATTEMPT,
  CREATE_TEAM_ITEM_SUCCESS,
  CREATE_TEAM_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';

const createTeamAttempt = () => ({
  type: CREATE_TEAM_ITEM_ATTEMPT,
});

const createTeamSuccess = response => ({
  type: CREATE_TEAM_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const createTeamFail = message => ({
  type: CREATE_TEAM_ITEM_FAIL,
  payload: { message },
});

export const createTeam = team => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(createTeamAttempt());
    const body = team;
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_CREATE_TEAM_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_CREATE_TEAM_PATH}`, body);
    //  Display success message
    dispatch(showDashBoardSuccess('Item Created'));
    return dispatch(createTeamSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(createTeamFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
