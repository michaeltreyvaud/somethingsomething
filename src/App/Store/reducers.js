import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';
import loginReducer from '../Views/Login/Store/Reducers';

const appReducers = combineReducers({
  routes: routingReducer,
  //  TODO: Combine all auth reducers
  login: loginReducer,
});

export default appReducers;
