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

//  TODO: Rename directory
import team from '../Views/Settings/Teams/Store/Reducers';
import createTeam from '../Views/Settings/Teams/Store/Reducers/create';
import deleteTeam from '../Views/Settings/Teams/Store/Reducers/delete';
import updateTeam from '../Views/Settings/Teams/Store/Reducers/update';

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
  management: combineReducers({
    team: combineReducers({
      index: team,
      create: createTeam,
      delete: deleteTeam,
      update: updateTeam,
    }),
  }),
});

export default appReducers;
