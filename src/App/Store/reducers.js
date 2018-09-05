import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';
import loginReducer from '../Views/Login/Store/Reducers';
import forgotPasswordReducer from '../Views/ForgotPassword/Store/Reducers';
import fridgeItem from '../Views/Fridge/FridgeItem/Store/Reducers';

const appReducers = combineReducers({
  routes: routingReducer,
  auth: combineReducers({
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
  }),
  fridge: combineReducers({
    item: fridgeItem,
  }),
});

export default appReducers;
