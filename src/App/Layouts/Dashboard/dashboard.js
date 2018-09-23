import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import withStyles from '@material-ui/core/styles/withStyles';

import dashboardRoutes from '../../Routing/Routes/dashboard';

import appStyle from './style';

import image from '../../Assets/Images/sidebar-4.jpg';
import logo from '../../Assets/Images/logo-white.svg';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';
import Snackbar from '../../Components/Snackbar/Snackbar';

const TODO = () => (<h1>TODO</h1>);

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        return prop.views.map((_prop, _key) => (
          <Route exact path={_prop.path} component={_prop.component} key={_key} />
        ));
      }
      if (!prop.collapse && prop.views) {
        const mapping = prop.views.map((_prop, _key) => (
          <Route exact path={_prop.path} component={_prop.component} key={_key} />
        ));
        mapping.push(<Route exact path={prop.path} component={prop.component} key={key} />);
        return mapping;
      }
      return <Route exact path={prop.path} component={prop.component} key={key} />;
    })}
    <Route component={TODO} />
  </Switch>
);

let ps;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
    };
    this.resizeFunction = this.resizeFunction.bind(this);
    const { isAuthenticated, history } = props;
    if (!isAuthenticated) history.push('/auth/login');
  }

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', this.resizeFunction);
  }

  componentWillReceiveProps(nextProps) {
    //  Check if we need to close some popups
    const { loading } = this.props;
    if (loading === true && nextProps.loading === false) {
      const timeout = setInterval(() => {
        clearInterval(timeout);
        this.hideSuccessMessage();
        this.hideErrorMessage();
      }, 2000);
    }
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      //  wtf is this bollox?
      // const { mobileOpen } = this.state;
      // if (mobileOpen) {
      //   this.setState({ mobileOpen: false });
      // }
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
    window.removeEventListener('resize', this.resizeFunction);
  }

  handleDrawerToggle() {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  }

  sidebarMinimize() {
    const { miniActive } = this.state;
    this.setState({ miniActive: !miniActive });
  }

  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  hideSuccessMessage() {
    const { hideDashBoardSuccess } = this.props;
    hideDashBoardSuccess();
  }

  hideErrorMessage() {
    const { hideDashBoardError } = this.props;
    hideDashBoardError();
  }

  render() {
    const { classes, ...rest } = this.props;
    const {
      error, errorMessage, success, successMessage,
    } = rest;
    const { mobileOpen, miniActive } = this.state;
    const mainPanel = `${classes.mainPanel
    } ${
      cx({
        [classes.mainPanelSidebarMini]: miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf('Win') > -1,
      })}`;
    return (
      <div className={classes.wrapper}>
        <Snackbar
          place="bc"
          color="danger"
          message={errorMessage}
          open={error}
          closeNotification={() => this.hideErrorMessage()}
          close
        />
        <Snackbar
          place="bc"
          color="success"
          message={successMessage}
          open={success}
          closeNotification={() => this.hideSuccessMessage()}
          close
        />
        <Sidebar
          routes={dashboardRoutes}
          logoText="TreyBro"
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={mobileOpen}
          color="blue"
          bgColor="black"
          miniActive={miniActive}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <Header
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={miniActive}
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  successMessage: PropTypes.string.isRequired,
  hideDashBoardError: PropTypes.func.isRequired,
  hideDashBoardSuccess: PropTypes.func.isRequired,
};

export default withStyles(appStyle)(Dashboard);
