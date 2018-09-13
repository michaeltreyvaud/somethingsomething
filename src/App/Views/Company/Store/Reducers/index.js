import {
  GET_COMPANY_INFO_ATTEMPT,
  GET_COMPANY_INFO_SUCCESS,
  GET_COMPANY_INFO_FAIL,

  UPDATE_COMPANY_INFO_ATTEMPT,
  UPDATE_COMPANY_INFO_SUCCESS,
  UPDATE_COMPANY_INFO_FAIL,
} from '../ActionTypes';

const initialState = {
  loading: false,
  saving: false,
  error: false,
  errorMessage: '',
  success: false,
  name: '',
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  mobile: '',
  country: '',
  city: '',
  address1: '',
  address2: '',
  address3: '',
  logo: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_INFO_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        name: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        mobile: '',
        country: '',
        city: '',
        address1: '',
        address2: '',
        address3: '',
        logo: '',
      };
    }
    case GET_COMPANY_INFO_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
        ...response,
      };
    }
    case GET_COMPANY_INFO_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
      };
    }
    case UPDATE_COMPANY_INFO_ATTEMPT: {
      const { info } = action.payload;
      return {
        ...state,
        loading: false,
        saving: true,
        error: false,
        errorMessage: '',
        success: false,
        ...info,
      };
    }
    case UPDATE_COMPANY_INFO_SUCCESS: {
      const { response } = action.payload;
      return {
        ...state,
        loading: false,
        saving: false,
        error: false,
        errorMessage: '',
        success: true,
        ...response,
      };
    }
    case UPDATE_COMPANY_INFO_FAIL: {
      return {
        ...state,
        loading: true,
        error: true,
        errorMessage: '',
        success: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
