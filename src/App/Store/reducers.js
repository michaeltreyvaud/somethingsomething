import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';
import loginReducer from '../Views/Login/Store/Reducers';
import forgotPasswordReducer from '../Views/ForgotPassword/Store/Reducers';

const appReducers = combineReducers({
  routes: routingReducer,
  //  TODO: Combine all auth reducers
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,
});

export default appReducers;
