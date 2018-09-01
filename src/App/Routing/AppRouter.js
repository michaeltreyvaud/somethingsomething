import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import coreRoutes from './Routes';

const noMatch = () => (<h1>No Match</h1>);
class AppRouter extends Component {
  constructor(props) {
    super(props);
    const { getCompanyInfo } = props;
    getCompanyInfo();
  }

  render() {
    const { loading } = this.props;
    if (loading) return null;
    return (
      <Switch>
        {coreRoutes.map((prop, key) => <Route exact path={prop.path} component={prop.component} key={key} />)}
        <Route component={noMatch} />
      </Switch>
    );
  }
}

AppRouter.propTypes = {
  loading: PropTypes.bool.isRequired,
  getCompanyInfo: PropTypes.func.isRequired,
};

export default AppRouter;
