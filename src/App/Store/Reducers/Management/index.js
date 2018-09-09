import { combineReducers } from 'redux';
import teamsReducer from './teams';
import usersReducer from './users';

const managementReducer = combineReducers({
  team: teamsReducer,
  users: usersReducer,
});

export default managementReducer;
