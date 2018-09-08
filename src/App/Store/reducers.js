import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';

import dashBoardReducer from '../Layouts/Dashboard/Store/Reducers';

import loginReducer from '../Views/Login/Store/Reducers';
import forgotPasswordReducer from '../Views/ForgotPassword/Store/Reducers';

import fridgeItem from '../Views/Fridge/FridgeItem/Store/Reducers';
import createFridgeItem from '../Views/Fridge/FridgeItem/Store/Reducers/create';
import deleteFridgeItem from '../Views/Fridge/FridgeItem/Store/Reducers/delete';
import updateFridgeItem from '../Views/Fridge/FridgeItem/Store/Reducers/update';

import freezerItem from '../Views/Freezer/FreezerItem/Store/Reducers';
import createFreezerItem from '../Views/Freezer/FreezerItem/Store/Reducers/create';
import deleteFreezerItem from '../Views/Freezer/FreezerItem/Store/Reducers/delete';
import updateFreezerItem from '../Views/Freezer/FreezerItem/Store/Reducers/update';

const appReducers = combineReducers({
  routes: routingReducer,
  layouts: combineReducers({
    dashboard: dashBoardReducer,
  }),
  auth: combineReducers({
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
  }),
  fridge: combineReducers({
    item: combineReducers({
      index: fridgeItem,
      create: createFridgeItem,
      delete: deleteFridgeItem,
      update: updateFridgeItem,
    }),
  }),
  freezer: combineReducers({
    item: combineReducers({
      index: freezerItem,
      create: createFreezerItem,
      delete: deleteFreezerItem,
      update: updateFreezerItem,
    }),
  }),
});

export default appReducers;
