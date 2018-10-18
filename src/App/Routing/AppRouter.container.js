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
import { listFridgeLogs } from '../Views/Fridge/FridgeLog/Store/Actions';
import { listFreezerLogs } from '../Views/Freezer/FreezerLog/Store/Actions';
import { listMedicalLogs } from '../Views/User/MedicalLog/Store/Actions';
import { listTrainingLogs } from '../Views/User/TrainingLog/Store/Actions';
import { listHotHoldings } from '../Views/HotHolding/Store/Actions';
import { listFastCoolings } from '../Views/FastCooling/Store/Actions';
import { listReports } from '../Views/Reports/Store/Actions';
import { listPests } from '../Views/PestControl/Store/Actions';
import { listSafetys } from '../Views/SafetySheet/Store/Actions';
import { listServices } from '../Views/Service/Store/Actions';
import { listCleaningItems } from '../Views/Cleaning/Cleaning/Store/Actions';
import { listCleaningLogs } from '../Views/Cleaning/CleaningLog/Store/Actions';

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
  listFridgeLogs: () => dispatch(listFridgeLogs()),
  listFreezerLogs: () => dispatch(listFreezerLogs()),
  listMedicalLogs: () => dispatch(listMedicalLogs()),
  listTrainingLogs: () => dispatch(listTrainingLogs()),
  listHotHoldings: () => dispatch(listHotHoldings()),
  listFastCoolings: () => dispatch(listFastCoolings()),
  listReports: () => dispatch(listReports()),
  listPests: () => dispatch(listPests()),
  listSafetys: () => dispatch(listSafetys()),
  listServices: () => dispatch(listServices()),
  listCleaningItems: () => dispatch(listCleaningItems()),
  listCleaningLogs: () => dispatch(listCleaningLogs()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
