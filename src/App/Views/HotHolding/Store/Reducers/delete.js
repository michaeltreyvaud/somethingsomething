import {
  DELETE_HOT_HOLDING_ATTEMPT,
  DELETE_HOT_HOLDING_SUCCESS,
  DELETE_HOT_HOLDING_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_HOT_HOLDING_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case DELETE_HOT_HOLDING_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
      };
    }
    case DELETE_HOT_HOLDING_FAIL: {
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
