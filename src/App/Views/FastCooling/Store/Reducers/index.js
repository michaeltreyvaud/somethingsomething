import {
  LIST_FAST_COOLING_ATTEMPT,
  LIST_FAST_COOLING_SUCCESS,
  LIST_FAST_COOLING_FAIL,

  CREATE_FAST_COOLING_SUCCESS,

  DELETE_FAST_COOLING_SUCCESS,

  UPDATE_FAST_COOLING_SUCCESS,
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
    case LIST_FAST_COOLING_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case LIST_FAST_COOLING_SUCCESS: {
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
    case LIST_FAST_COOLING_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case CREATE_FAST_COOLING_SUCCESS: {
      const { response } = action.payload;
      const currentItems = Object.assign(state.items);
      currentItems.unshift(response);
      return {
        ...state,
        items: currentItems,
      };
    }
    case DELETE_FAST_COOLING_SUCCESS: {
      const { index } = action.payload;
      const currentItems = Object.assign(state.items);
      currentItems.splice(index, 1);
      return {
        ...state,
        items: currentItems,
      };
    }
    case UPDATE_FAST_COOLING_SUCCESS: {
      const { item } = action.payload;
      const currentItems = Object.assign(state.items);
      let index;
      currentItems.forEach((_item, _index) => {
        if (_item.createdAt === item.createdAt) index = _index;
      });
      currentItems.splice(index, 1);
      const sortByName = (a, b) => {
        if (a.createdAt < b.createdAt) { return -1; }
        if (a.createdAt > b.createdAt) { return 1; }
        return 0;
      };
      currentItems.push(item);
      currentItems.sort((a, b) => sortByName(a, b));
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
