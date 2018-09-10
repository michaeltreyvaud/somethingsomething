import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import Menu from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import ViewList from '@material-ui/icons/ViewList';

import headerStyle from './style';
import Button from '../CustomButtons';

import HeaderLinks from './HeaderLinks';

function Header({ ...props }) {
  function makeBrand() {
    let name;
    props.routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      }
      if (prop.path === props.location.pathname) {
        name = prop.name;
      }
      return null;
    });
    return name;
  }
  const { classes, color, rtlActive } = props;
  const appBarClasses = cx({
    [` ${classes[color]}`]: color,
  });
  const sidebarMinimize = `${classes.sidebarMinimize
  } ${
    cx({
      [classes.sidebarMinimizeRTL]: rtlActive,
    })}`;
  const { miniActive, sidebarMinimize: sidebarMinimized, handleDrawerToggle } = props;
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div className={sidebarMinimize}>
            {miniActive ? (
              <Button
                justIcon
                round
                color="white"
                onClick={sidebarMinimized}
              >
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                justIcon
                round
                color="white"
                onClick={sidebarMinimized}
              >
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title} color="transparent">
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks rtlActive={rtlActive} />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  rtlActive: PropTypes.bool,
};

export default withStyles(headerStyle)(Header);
