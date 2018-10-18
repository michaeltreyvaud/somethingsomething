import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import coreRoutes from './Routes';
import { listServices } from '../Views/Service/Store/Actions';
import { listCleaningLogs } from '../Views/Cleaning/CleaningLog/Store/Actions';

const noMatch = () => (<h1>No Match</h1>);
const Loading = () => (<h1>TODO App loading</h1>);

class AppRouter extends Component {
  constructor(props) {
    super(props);
    const { getCompanyInfo, validateToken } = props;
    getCompanyInfo();
    validateToken();
  }

  //  Handle app redirects here when app loads
  componentWillReceiveProps(nextProps) {
    const {
      loading, history, sessionTimeout, location,
      isAuthenticated, getCompanyInfo, validateToken,
    } = this.props;
    //  user logged out
    if ((loading === false && nextProps.loading === true)
      && (isAuthenticated && !nextProps.isAuthenticated)) {
      getCompanyInfo();
      validateToken();
    }
    if (loading === true && nextProps.loading === false) {
      //  Need to route to login
      if (!nextProps.isAuthenticated) {
        return history.push('/auth/login');
      }
      this.loadAppInformation();
      //  Route to where the user typed in the url
      const path = ((location.pathname === '/' || !location.pathname)) ? '/dashboard/dashboard' : location.pathname;
      return history.push(path);
    }
    //  TODO - display info about session timeout to the user
    if (sessionTimeout !== nextProps.sessionTimeout) {
      return history.push('/auth/login');
    }

    if (!isAuthenticated && nextProps.isAuthenticated) {
      this.loadAppInformation();
    }
    return nextProps;
  }

  loadAppInformation() {
    const {
      listTeams, listUsers,
      listFreezers, listFridges,
      listFoodItems, listSuppliers,
      listFridgeLogs, listFreezerLogs,
      listMedicalLogs, listTrainingLogs,
      listHotHoldings, listFastCoolings,
      listReports, listPests, listSafetys,
      listServices, listCleaningItems, listCleaningLogs,
    } = this.props;
    //  TODO: Load all app view items
    listTeams();
    listUsers();
    listFreezers();
    listFridges();
    listFoodItems();
    listSuppliers();
    listFridgeLogs();
    listFreezerLogs();
    listMedicalLogs();
    listTrainingLogs();
    listHotHoldings();
    listFastCoolings();
    listReports();
    listPests();
    listSafetys();
    listServices();
    listCleaningItems();
    listCleaningLogs();
  }

  render() {
    const { loading } = this.props;
    if (loading) return <Loading />;
    return (
      <Switch>
        {coreRoutes.map((prop, key) => <Route exact path={prop.path} component={prop.component} key={key} />)}
        <Route component={noMatch} />
      </Switch>
    );
  }
}

AppRouter.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  sessionTimeout: PropTypes.bool.isRequired,
  getCompanyInfo: PropTypes.func.isRequired,
  validateToken: PropTypes.func.isRequired,
  listTeams: PropTypes.func.isRequired,
  listUsers: PropTypes.func.isRequired,
  listFreezers: PropTypes.func.isRequired,
  listFridges: PropTypes.func.isRequired,
  listFoodItems: PropTypes.func.isRequired,
  listSuppliers: PropTypes.func.isRequired,
  listFridgeLogs: PropTypes.func.isRequired,
  listFreezerLogs: PropTypes.func.isRequired,
  listMedicalLogs: PropTypes.func.isRequired,
  listTrainingLogs: PropTypes.func.isRequired,
  listHotHoldings: PropTypes.func.isRequired,
  listFastCoolings: PropTypes.func.isRequired,
};

export default AppRouter;
