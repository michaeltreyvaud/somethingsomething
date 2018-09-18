import {
  LIST_TEAM_USERS_ATTEMPT,
  LIST_TEAM_USERS_SUCCESS,
  LIST_TEAM_USERS_FAIL,
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
    case LIST_TEAM_USERS_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case LIST_TEAM_USERS_SUCCESS: {
      const { response } = action.payload;
      //  TODO - store the next key etc for pagination
      const { Users } = response;
      const displayUsers = Users.map((user) => {
        const attributes = user.Attributes;
        const findValue = (field) => {
          let value;
          attributes.forEach((attribute) => {
            if (attribute.Name === field) {
              value = attribute.Value;
            }
          });
          return value;
        };
        const User = {
          email: findValue('email'),
          firstName: findValue('given_name'),
          lastName: findValue('family_name'),
          phoneNumber: findValue('phone_number'),
          position: findValue('custom:position'),
          team: findValue('custom:team'),
          authorization: findValue('custom:authorization'),
        };
        return User;
      });
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        success: true,
        items: displayUsers,
      };
    }
    case LIST_TEAM_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
