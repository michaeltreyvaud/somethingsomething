import {
  COMPANY_INFO_FETCH,
  COMPANY_INFO_SUCCESS,
  COMPANY_INFO_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: true,
};

const routingReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_INFO_FETCH: {
      return initialState;
    }
    case COMPANY_INFO_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case COMPANY_INFO_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default routingReducer;
