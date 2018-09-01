import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
      };
    }
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
