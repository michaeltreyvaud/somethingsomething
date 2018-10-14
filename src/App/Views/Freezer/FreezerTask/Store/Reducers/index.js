import {
  LIST_FREEZER_TASK_ATTEMPT,
  LIST_FREEZER_TASK_SUCCESS,
  LIST_FREEZER_TASK_FAIL,

  CREATE_FREEZER_TASK_SUCCESS,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_FREEZER_TASK_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case LIST_FREEZER_TASK_SUCCESS: {
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
    case LIST_FREEZER_TASK_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case CREATE_FREEZER_TASK_SUCCESS: {
      const { response } = action.payload;
      const currentItems = Object.assign(state.items);
      currentItems.unshift(response);
      return {
        ...state,
        items: currentItems,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
