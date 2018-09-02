import {
  FORGOT_PASSWORD_ATTEMPT,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
      };
    }
    case FORGOT_PASSWORD_FAIL: {
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

export default forgotPasswordReducer;
