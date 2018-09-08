import {
  CREATE_FREEZER_ITEM_ATTEMPT,
  CREATE_FREEZER_ITEM_SUCCESS,
  CREATE_FREEZER_ITEM_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FREEZER_ITEM_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case CREATE_FREEZER_ITEM_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
      };
    }
    case CREATE_FREEZER_ITEM_FAIL: {
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
