import { combineReducers } from 'redux';
import AuthStore from '../Util/authstore';
import { USER_AUTH_LOGOUT } from '../Views/User/Profile/Store/ActionTypes';
import routingReducer from '../Routing/Store/Reducers';

import dashBoardReducer from '../Layouts/Dashboard/Store/Reducers';
import loginReducer from '../Views/Auth/Login/Store/Reducers';
import forgotPasswordReducer from '../Views/ForgotPassword/Store/Reducers';
import companyReducer from '../Views/Company/Store/Reducers';

import records from './Reducers/Records';
import freezerReducer from './Reducers/Freezer';
import fridgeReducer from './Reducers/Fridge';
import managementReducer from './Reducers/Management';
import foodItemReducer from './Reducers/FoodItem';
import userReducer from './Reducers/User';
import cleaningItemsReducer from './Reducers/Cleaning';
import checklistReducer from './Reducers/Checklist';
import safetyRecordReducer from './Reducers/SafetyRecord';

const appReducers = combineReducers({
  routes: routingReducer,
  layouts: combineReducers({
    dashboard: dashBoardReducer,
  }),
  auth: combineReducers({
    login: loginReducer,
    forgotPassword: forgotPasswordReducer,
  }),
  records,
  company: companyReducer,
  fridge: fridgeReducer,
  freezer: freezerReducer,
  management: managementReducer,
  foodItem: foodItemReducer,
  user: userReducer,
  cleaningItem: cleaningItemsReducer,
  checklist: checklistReducer,
  safetyrecord: safetyRecordReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_AUTH_LOGOUT) {
    AuthStore.removeIdToken();
    AuthStore.removeRefreshToken();
    AuthStore.removeAccessToken();
    return appReducers(undefined, action);
  }
  return appReducers(state, action);
};

export default rootReducer;
