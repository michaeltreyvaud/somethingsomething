import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';
import loginReducer from '../Views/Login/Store/Reducers';

const appReducers = combineReducers({
  routes: routingReducer,
  login: loginReducer,
});

export default appReducers;
