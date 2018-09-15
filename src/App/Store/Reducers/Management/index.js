import { combineReducers } from 'redux';
import teamsReducer from './teams';
import usersReducer from './users';

const reducer = combineReducers({
  team: teamsReducer,
  users: usersReducer,
});

export default reducer;
