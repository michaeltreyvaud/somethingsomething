import { combineReducers } from 'redux';
import teamsReducer from './teams';
import usersReducer from './users';
import suppliersReducer from './suppliers';

const reducer = combineReducers({
  team: teamsReducer,
  users: usersReducer,
  suppliers: suppliersReducer,
});

export default reducer;
