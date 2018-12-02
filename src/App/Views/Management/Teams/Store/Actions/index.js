import {
  LIST_TEAM_ITEM_ATTEMPT,
  LIST_TEAM_ITEM_SUCCESS,
  LIST_TEAM_ITEM_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../../Util/fetch';

const listTeamAttempt = () => ({
  type: LIST_TEAM_ITEM_ATTEMPT,
});

const listTeamSuccess = response => ({
  type: LIST_TEAM_ITEM_SUCCESS,
  payload: {
    response,
  },
});

const listTeamFail = message => ({
  type: LIST_TEAM_ITEM_FAIL,
  payload: { message },
});

export const listTeams = () => async (dispatch) => {
  try {
    dispatch(listTeamAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL } = process.env;
    const url = `${REACT_APP_API_URL}/management/team/list`;
    const response = await AuthenticatedFetch(url, body);
    return dispatch(listTeamSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listTeamFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
