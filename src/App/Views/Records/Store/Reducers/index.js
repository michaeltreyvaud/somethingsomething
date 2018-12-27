import {
  RECORD_LIST_SET_TYPE,
  RECORD_LIST_ATTEMPT,
  RECORD_LIST_SUCCESS,
  RECORD_LIST_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  recordType: '',
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_LIST_SET_TYPE: {
      const { payload } = action;
      const { recordType } = payload;
      return { ...state, recordType };
    }
    case RECORD_LIST_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case RECORD_LIST_SUCCESS: {
      const { response } = action.payload;
      //  TODO - store the next key etc for pagination
      const { Items } = response;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
        items: Items,
      };
    }
    case RECORD_LIST_FAIL: {
      const { message } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: message,
        success: false,
        items: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
