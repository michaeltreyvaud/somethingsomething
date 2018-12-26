import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import coreRoutes from './Routes';
import Loading from '../Layouts/Loading';

const noMatch = () => (<h1>TODO: No Match</h1>);

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
      listMedicalLogs, listTrainingLogs,
      listCleaningItems, listCleaningLogs,
      listChecklistCategory, listsafetyRecordCategoryCategory,
    } = this.props;
    //  TODO: Load all app view items
    listTeams();
    listUsers();
    listFreezers();
    listFridges();
    listFoodItems();
    listSuppliers();
    listMedicalLogs();
    listTrainingLogs();
    listCleaningItems();
    listCleaningLogs();
    listChecklistCategory();
    listsafetyRecordCategoryCategory();
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
  listMedicalLogs: PropTypes.func.isRequired,
  listTrainingLogs: PropTypes.func.isRequired,
  listChecklistCategory: PropTypes.func.isRequired,
  listsafetyRecordCategoryCategory: PropTypes.func.isRequired,
  listCleaningItems: PropTypes.func.isRequired,
  listCleaningLogs: PropTypes.func.isRequired,
};

export default AppRouter;
