import {
  LIST_FRIDGE_ITEM_ATTEMPT,
  LIST_FRIDGE_ITEM_SUCCESS,
  LIST_FRIDGE_ITEM_FAIL,

  CREATE_FRIDGE_ITEM_SUCCESS,

  DELETE_FRIDGE_ITEM_SUCCESS,
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
    case LIST_FRIDGE_ITEM_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case LIST_FRIDGE_ITEM_SUCCESS: {
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
    case LIST_FRIDGE_ITEM_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case CREATE_FRIDGE_ITEM_SUCCESS: {
      const { response } = action.payload;
      const currentItems = Object.assign(state.items);
      currentItems.push(response);
      return {
        ...state,
        items: currentItems,
      };
    }
    case DELETE_FRIDGE_ITEM_SUCCESS: {
      const { index } = action.payload;
      const currentItems = Object.assign(state.items);
      currentItems.splice(index, 1);
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
