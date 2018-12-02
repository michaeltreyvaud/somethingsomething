import {
  LIST_TEAM_USERS_ATTEMPT,
  LIST_TEAM_USERS_SUCCESS,
  LIST_TEAM_USERS_FAIL,

  LIST_TEAM_USERS_DELETE_ATTEMPT,
  LIST_TEAM_USERS_DELETE_SUCCESS,
  LIST_TEAM_USERS_DELETE_FAIL,
} from '../ActionTypes';
import { dashboardLoading, showDashBoardError, showDashBoardSuccess } from '../../../../../Layouts/Dashboard/Store/Actions';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listTeamUsersAttempt = () => ({
  type: LIST_TEAM_USERS_ATTEMPT,
});

const listTeamUsersSuccess = response => ({
  type: LIST_TEAM_USERS_SUCCESS,
  payload: {
    response,
  },
});

const listTeamUsersFail = message => ({
  type: LIST_TEAM_USERS_FAIL,
  payload: { message },
});

export const listTeamUsers = name => async (dispatch) => {
  try {
    dispatch(listTeamUsersAttempt());
    const body = { name };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/management/team/user/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listTeamUsersSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listTeamUsersFail(_err.message));
  }
};

const deleteTeamUserAttempt = () => ({
  type: LIST_TEAM_USERS_DELETE_ATTEMPT,
});

const deleteTeamUserSuccess = index => ({
  type: LIST_TEAM_USERS_DELETE_SUCCESS,
  payload: {
    index,
  },
});

const deleteTeamUserFail = message => ({
  type: LIST_TEAM_USERS_DELETE_FAIL,
  payload: { message },
});

export const deleteTeamUser = (name, userName, index) => async (dispatch) => {
  try {
    //  Tell the layout we are doing something
    dispatch(dashboardLoading());
    dispatch(deleteTeamUserAttempt());
    const body = { name, userName };
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/management/team/user/delete`;
    await AuthenticatedFetch(url, body);
    //  Display success message
    dispatch(showDashBoardSuccess('User Removed'));
    return dispatch(deleteTeamUserSuccess(index));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    //  Display error message
    dispatch(showDashBoardError(_err.message));
    return dispatch(deleteTeamUserFail(_err.message));
  }
};
