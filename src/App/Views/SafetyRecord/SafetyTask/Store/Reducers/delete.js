import {
  DELETE_SAFETY_RECORD_TASK_ATTEMPT,
  DELETE_SAFETY_RECORD_TASK_SUCCESS,
  DELETE_SAFETY_RECORD_TASK_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SAFETY_RECORD_TASK_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case DELETE_SAFETY_RECORD_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
      };
    }
    case DELETE_SAFETY_RECORD_TASK_FAIL: {
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

export default reducer;
