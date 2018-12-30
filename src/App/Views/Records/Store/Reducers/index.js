import {
  RECORD_LIST_SET_TYPE,
  RECORD_LIST_ATTEMPT,
  RECORD_LIST_SUCCESS,
  RECORD_LIST_FAIL,

  RECORD_DELETE_SUCCESS,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  recordType: '',
  Items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_LIST_SET_TYPE: {
      const { payload } = action;
      const { recordType } = payload;
      return { ...initialState, recordType };
    }
    case RECORD_LIST_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case RECORD_LIST_SUCCESS: {
      const { response } = action.payload;
      const { Items } = response;
      const reducedItems = {};
      state.Items.reduce((map, item) => map[item.id] = item, reducedItems);  //  eslint-disable-line
      Items.reduce((map, item) => map[item.id] = item, reducedItems);  //  eslint-disable-line
      const combinedItemList = Object.keys(reducedItems).map(key => reducedItems[key]);
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
        ...response,
        Items: combinedItemList,
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
      };
    }
    case RECORD_DELETE_SUCCESS: {
      const { id } = action.payload;
      return {
        ...state,
        Items: state.Items.filter(item => item.id !== id),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
