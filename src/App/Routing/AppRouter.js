import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import coreRoutes from './Routes';

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
    } = this.props;
    if (loading === true && nextProps.loading === false) {
      //  Need to route to login
      if (nextProps.isAuthenticated === false) {
        return history.push('/auth/login');
      }
      //  Route to where the user typed in the url
      const path = ((location.pathname === '/' || !location.pathname)) ? '/dashboard/dashboard' : location.pathname;
      return history.push(path);
    }
    //  TODO - display info about session timeout to the user
    if (sessionTimeout !== nextProps.sessionTimeout) {
      return history.push('/auth/login');
    }
    return nextProps;
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
};

export default AppRouter;
