import {
  LIST_USER_ATTEMPT,
  LIST_USER_SUCCESS,
  LIST_USER_FAIL,

  CREATE_USER_SUCCESS,

  DELETE_USER_SUCCESS,

  UPDATE_USER_SUCCESS,
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
    case LIST_USER_ATTEMPT: {
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case LIST_USER_SUCCESS: {
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
    case LIST_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: '',
        success: false,
        items: [],
      };
    }
    case CREATE_USER_SUCCESS: {
      const { response } = action.payload;
      const currentItems = Object.assign(state.items);
      //  TODO: Sorting by username or something
      // const sortByName = (a, b) => {
      //   if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      //   if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      //   return 0;
      // };
      currentItems.push(response.User);
      // currentItems.sort((a, b) => sortByName(a, b));
      return {
        ...state,
        items: currentItems,
      };
    }
    case DELETE_USER_SUCCESS: {
      const { index } = action.payload;
      const currentItems = Object.assign(state.items);
      currentItems.splice(index, 1);
      return {
        ...state,
        items: currentItems,
      };
    }
    case UPDATE_USER_SUCCESS: {
      const { index, item } = action.payload;
      const currentItems = Object.assign(state.items);
      currentItems.splice(index, 1);
      const sortByName = (a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
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
