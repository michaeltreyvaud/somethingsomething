import { combineReducers } from 'redux';
import routingReducer from '../Routing/Store/Reducers';

const appReducers = combineReducers({
  routes: routingReducer,
});

export default appReducers;
