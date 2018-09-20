import {
  LIST_TEAM_USERS_DELETE_ATTEMPT,
  LIST_TEAM_USERS_DELETE_SUCCESS,
  LIST_TEAM_USERS_DELETE_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TEAM_USERS_DELETE_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case LIST_TEAM_USERS_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
      };
    }
    case LIST_TEAM_USERS_DELETE_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
