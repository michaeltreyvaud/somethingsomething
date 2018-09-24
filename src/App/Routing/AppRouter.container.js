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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
