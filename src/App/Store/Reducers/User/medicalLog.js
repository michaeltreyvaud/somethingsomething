import { combineReducers } from 'redux';

import index from '../../../Views/User/MedicalLog/Store/Reducers';
import create from '../../../Views/User/MedicalLog/Store/Reducers/create';
import del from '../../../Views/User/MedicalLog/Store/Reducers/delete';
import update from '../../../Views/User/MedicalLog/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
