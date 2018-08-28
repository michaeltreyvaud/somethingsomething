import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import withStyles from '@material-ui/core/styles/withStyles';

import dashboardRoutes from '../../Routing/Routes/dashboard';

import appStyle from './style';

import image from '../../Assets/Images/sidebar-2.jpg';
import logo from '../../Assets/Images/logo-white.svg';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';

const noMatch = () => (<h1>fuck off</h1>);
const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect) { return <Redirect from={prop.path} to={prop.pathTo} key={key} />; }
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
    <Route component={noMatch} />
  </Switch>
);

let ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: false,
    };
    this.resizeFunction = this.resizeFunction.bind(this);
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

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
    window.removeEventListener('resize', this.resizeFunction);
  }

  getRoute() {
    return this.props.location.pathname !== '/maps/full-screen-maps';
  }

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  sidebarMinimize() {
    this.setState({ miniActive: !this.state.miniActive });
  }

  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const mainPanel = `${classes.mainPanel
    } ${
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf('Win') > -1,
      })}`;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText="TreyBro"
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          bgColor="black"
          miniActive={this.state.miniActive}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <Header
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer fluid /> : null}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(appStyle)(Dashboard);
