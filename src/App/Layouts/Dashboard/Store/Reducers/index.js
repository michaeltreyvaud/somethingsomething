import {
  DASHBOARD_LOADING,
  DASHBOARD_SHOW_ERROR,
  DASHBOARD_HIDE_ERROR,
  DASHBOARD_SHOW_SUCCESS,
  DASHBOARD_HIDE_SUCCESS,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  successMessage: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        successMessage: '',
      };
    }
    case DASHBOARD_SHOW_ERROR: {
      const { errorMessage } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage,
        success: false,
        successMessage: '',
      };
    }
    case DASHBOARD_HIDE_ERROR: {
      return initialState;
    }
    case DASHBOARD_SHOW_SUCCESS: {
      const { successMessage } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
        successMessage,
      };
    }
    case DASHBOARD_HIDE_SUCCESS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
