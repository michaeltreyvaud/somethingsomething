import { combineReducers } from 'redux';
import profileReducer from './profile';
import medicalLogReducer from './medicalLog';
import trainingLogReducer from './trainingLog';

const reducer = combineReducers({
  profile: profileReducer,
  medicalLog: medicalLogReducer,
  trainingLog: trainingLogReducer,
});

export default reducer;
