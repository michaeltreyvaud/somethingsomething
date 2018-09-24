import { combineReducers } from 'redux';
import profileReducer from './profile';

const reducer = combineReducers({
  profile: profileReducer,
});

export default reducer;
