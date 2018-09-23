import jwtDecode from 'jwt-decode';
import {
  USER_AUTH_UPDATED,
} from '../ActionTypes';

const initialState = {
  userName: '',
  authorization: '',
  position: '',
  team: '',
  email: '',
  lastName: '',
  firstName: '',
  phoneNumber: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTH_UPDATED: {
      const { response } = action.payload;
      const { AuthenticationResult } = response;
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
      }
      return {
        ...state,
        ...user,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
