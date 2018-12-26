import {
  RECORD_CREATE_ATTEMPT,
  RECORD_CREATE_SUCCESS,
  RECORD_CREATE_FAIL,
  RECORD_SET_VALUE,
  RECORD_RESET,
} from '../ActionTypes';

const initialRecord = { type: '' };

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  record: initialRecord,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_CREATE_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case RECORD_CREATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
      };
    }
    case RECORD_CREATE_FAIL: {
      const { message } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: message,
        success: false,
      };
    }
    case RECORD_SET_VALUE: {
      const { payload } = action;
      const { key, value } = payload;
      const { record: currentRecord } = state;
      const record = { ...currentRecord, [key]: value };
      return { ...state, record };
    }
    case RECORD_RESET: {
      return { ...state, record: initialRecord };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
