import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';

import dashBoardReducer from '../Layouts/Dashboard/Store/Reducers';

import loginReducer from '../Views/Login/Store/Reducers';
import forgotPasswordReducer from '../Views/ForgotPassword/Store/Reducers';

import freezerReducer from './Reducers/Freezer';
import fridgeReducer from './Reducers/Fridge';
import managementReducer from './Reducers/Management';

//  TODO - break these out
const appReducers = combineReducers({
  routes: routingReducer,
  layouts: combineReducers({
    dashboard: dashBoardReducer,
  }),
  auth: combineReducers({
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
  }),
  fridge: fridgeReducer,
  freezer: freezerReducer,
  management: managementReducer,
});

export default appReducers;
