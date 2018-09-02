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
  success: false,
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
        success: false,
      };
    }
    case PASSWORD_CHALLENGE_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        challengeType: (response && response.ChallengeName) || '',
        session: (response && response.Session) || '',
        success: false,
      };
    }
    case LOGIN_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        challengeType: (response && response.ChallengeName) || '',
        session: (response && response.Session) || '',
        success: true,
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
        success: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
