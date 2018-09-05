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

  componentWillReceiveProps(nextProps) {
    const { loading, history, sessionTimeout } = this.props;
    if (loading === true && nextProps.loading === false) {
      if (nextProps.isAuthenticated === false) {
        history.push('/auth/login');
      }
    }
    //  TODO - display info about session timeout to the user
    if (sessionTimeout !== nextProps.sessionTimeout) {
      history.push('/auth/login');
    }
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
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  sessionTimeout: PropTypes.bool.isRequired,
  getCompanyInfo: PropTypes.func.isRequired,
  validateToken: PropTypes.func.isRequired,
};

export default AppRouter;
