import {
  RECORD_GET_ATTEMPT,
  RECORD_GET_SUCCESS,
  RECORD_GET_FAIL,
  RECORD_UPDATE_ATTEMPT,
  RECORD_UPDATE_SUCCESS,
  RECORD_UPDATE_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  item: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_GET_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        item: {},
      };
    }
    case RECORD_GET_SUCCESS: {
      const { item } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
        item,
      };
    }
    case RECORD_GET_FAIL: {
      const { message } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: message,
        success: false,
        item: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
