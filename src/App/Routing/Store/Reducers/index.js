import {
  COMPANY_INFO_FETCH,
  COMPANY_INFO_SUCCESS,
  COMPANY_INFO_FAIL,
  VALIDATE_TOKEN_ATTEMPT,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_FAIL,
  SESSION_TIMEOUT,
} from '../ActionTypes';
import {
  LOGIN_SUCCESS,
} from '../../../Views/Auth/Login/Store/ActionTypes';

const initialState = {
  loading: true, //  TODO - make sure to update this!
  isAuthenticated: false,
  sessionTimeout: false,
};

const routingReducer = (state = initialState, action) => {
  switch (action.type) {
    //  TODO - this should reset all state in the app
    case SESSION_TIMEOUT: {
      return {
        ...state,
        isAuthenticated: false,
        sessionTimeout: !state.sessionTimeout,
      };
    }
    case COMPANY_INFO_FETCH: {
      return initialState;
    }
    case COMPANY_INFO_SUCCESS: {
      return initialState;
    }
    case COMPANY_INFO_FAIL: {
      return initialState;
    }
    case VALIDATE_TOKEN_ATTEMPT: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case VALIDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false, //  TODO - make sure to update this!
      };
    }
    case VALIDATE_TOKEN_FAIL: {
      return {
        ...state,
        isAuthenticated: false,
        loading: false, //  TODO - make sure to update this!
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default routingReducer;
