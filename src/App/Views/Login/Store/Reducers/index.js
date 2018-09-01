import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PASSWORD_CHALLENGE_ATTEMPT,
  PASSWORD_CHALLENGE_SUCCESS,
  PASSWORD_CHALLENGE_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  challengeType: '',
  session: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_CHALLENGE_ATTEMPT:
    case LOGIN_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    }
    case PASSWORD_CHALLENGE_SUCCESS:
    case LOGIN_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        challengeType: (response && response.ChallengeName) || '',
        session: (response && response.Session) || '',
      };
    }
    case PASSWORD_CHALLENGE_FAIL:
    case LOGIN_FAIL: {
      const { message } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: message,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
