import { combineReducers } from 'redux';

import index from '../../../Views/User/TrainingLog/Store/Reducers';
import create from '../../../Views/User/TrainingLog/Store/Reducers/create';
import del from '../../../Views/User/TrainingLog/Store/Reducers/delete';
import update from '../../../Views/User/TrainingLog/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
