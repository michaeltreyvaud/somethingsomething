import {
  DELETE_FOOD_ITEM_ATTEMPT_ATTEMPT,
  DELETE_FOOD_ITEM_ATTEMPT_SUCCESS,
  DELETE_FOOD_ITEM_ATTEMPT_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FOOD_ITEM_ATTEMPT_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case DELETE_FOOD_ITEM_ATTEMPT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
      };
    }
    case DELETE_FOOD_ITEM_ATTEMPT_FAIL: {
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
