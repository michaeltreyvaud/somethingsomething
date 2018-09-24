import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';

import dashBoardReducer from '../Layouts/Dashboard/Store/Reducers';

import userDetailsReducer from '../Views/Auth/Login/Store/Reducers/userDetails';
import loginReducer from '../Views/Auth/Login/Store/Reducers';
import forgotPasswordReducer from '../Views/ForgotPassword/Store/Reducers';
import companyReducer from '../Views/Company/Store/Reducers';

import freezerReducer from './Reducers/Freezer';
import fridgeReducer from './Reducers/Fridge';
import managementReducer from './Reducers/Management';
import foodItemReducer from './Reducers/FoodItem';
import hotHoldingReducer from './Reducers/HotHolding';
import fastCoolingReducer from './Reducers/FastCooling';

//  TODO - break these out
const appReducers = combineReducers({
  routes: routingReducer,
  layouts: combineReducers({
    dashboard: dashBoardReducer,
  }),
  auth: combineReducers({
    userDetails: userDetailsReducer,
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
  }),
  company: companyReducer,
  fridge: fridgeReducer,
  freezer: freezerReducer,
  management: managementReducer,
  foodItem: foodItemReducer,
  hotHolding: hotHoldingReducer,
  fastCooling: fastCoolingReducer,
});

export default appReducers;
