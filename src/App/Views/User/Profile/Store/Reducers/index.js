import jwtDecode from 'jwt-decode';
import {
  USER_PROFILE_UPDATE_ATTEMPT,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,

  USER_AUTH_UPDATED,
} from '../ActionTypes';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
      };
    }
    case USER_PROFILE_UPDATE_SUCCESS: {
      const { item } = action.payload;
      const currentUser = {
        ...state.user,
        ...item,
      };
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
        user: currentUser,
      };
    }
    case USER_PROFILE_UPDATE_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
      };
    }
    case USER_AUTH_UPDATED: {
      const { response } = action.payload;
      const { AuthenticationResult, signature } = response;
      const user = {};
      if (AuthenticationResult) {
        const { IdToken } = AuthenticationResult;
        const decodedToken = jwtDecode(IdToken);
        user.userName = decodedToken['cognito:username'];
        user.authorization = decodedToken['custom:authorization'];
        user.position = decodedToken['custom:position'];
        user.team = decodedToken['custom:team'];
        user.email = decodedToken.email;
        user.lastName = decodedToken.family_name;
        user.firstName = decodedToken.given_name;
        user.phoneNumber = decodedToken.phone_number;
        user.signature = signature;
      }
      return {
        ...state,
        user,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
