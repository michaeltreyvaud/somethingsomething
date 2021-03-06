import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { getCompanyInfo, validateToken } from './Store/Actions';
import { listTeams } from '../Views/Management/Teams/Store/Actions';
import { listUsers } from '../Views/Management/Users/Store/Actions';
import { listFreezers } from '../Views/Freezer/FreezerItem/Store/Actions';
import { listFridges } from '../Views/Fridge/FridgeItem/Store/Actions';
import { listFoodItems } from '../Views/FoodItem/Store/Actions';
import { listSuppliers } from '../Views/Management/Suppliers/Store/Actions';
import { listMedicalLogs } from '../Views/User/MedicalLog/Store/Actions';
import { listTrainingLogs } from '../Views/User/TrainingLog/Store/Actions';
import { listCleaningItems } from '../Views/Cleaning/Cleaning/Store/Actions';
import { listCleaningLogs } from '../Views/Cleaning/CleaningLog/Store/Actions';
import { listChecklistCategory } from '../Views/CheckList/Category/Store/Actions';
import { listsafetyRecordCategoryCategory } from '../Views/SafetyRecord/Category/Store/Actions';

const mapStateToProps = state => ({
  loading: state.routes.loading,
  isAuthenticated: state.routes.isAuthenticated,
  sessionTimeout: state.routes.sessionTimeout,
});

const mapDispatchToProps = dispatch => ({
  getCompanyInfo: () => dispatch(getCompanyInfo()),
  validateToken: () => dispatch(validateToken()),
  listTeams: () => dispatch(listTeams()),
  listUsers: () => dispatch(listUsers()),
  listFreezers: () => dispatch(listFreezers()),
  listFridges: () => dispatch(listFridges()),
  listFoodItems: () => dispatch(listFoodItems()),
  listSuppliers: () => dispatch(listSuppliers()),
  listMedicalLogs: () => dispatch(listMedicalLogs()),
  listTrainingLogs: () => dispatch(listTrainingLogs()),
  listCleaningItems: () => dispatch(listCleaningItems()),
  listCleaningLogs: () => dispatch(listCleaningLogs()),
  listChecklistCategory: () => dispatch(listChecklistCategory()),
  listsafetyRecordCategoryCategory: () => dispatch(listsafetyRecordCategoryCategory()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
