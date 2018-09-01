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
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: 'TODO: Something went wrong',
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
