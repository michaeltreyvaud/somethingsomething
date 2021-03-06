import React from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';

import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Collapse from '@material-ui/core/Collapse';

import HeaderLinks from '../Header/HeaderLinks';
import Icons from '../../Util/icons';

import style from './style';

let ps;

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
class SidebarWrapper extends React.Component {
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.refs.sidebarWrapper, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) ps.destroy();
  }

  render() {
    const { className, headerLinks, links } = this.props;
    return (
      <div className={className} ref="sidebarWrapper">
        {headerLinks}
        {links}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      openManagement: this.activeCollapse('/dashboard/management'),
      openSafetyRecord: this.activeCollapse('/dashboard/safety'),
      openFridge: this.activeCollapse('/dashboard/fridge'),
      openFreezer: this.activeCollapse('/dashboard/freezer'),
      openColdHot: this.activeCollapse('/dashboard/hotcold'),
      openTrace: this.activeCollapse('/dashboard/traceability'),
      openOilTest: this.activeCollapse('/dashboard/oil'),
      openCleaning: this.activeCollapse('/dashboard/cleaning'),
      miniActive: true,
    };
    this.activeRoute.bind(this);
    this.iconProps = {};
  }

  activeRoute(routeName) {
    const { location } = this.props;
    const { pathname } = location;
    return (pathname === routeName || pathname.includes(routeName));
  }

  activeCollapse(route) {
    const { location } = this.props;
    const { pathname } = location;
    return pathname.indexOf(route) > -1;
  }

  openCollapse(collapse) {
    const st = { [collapse]: !this.state[collapse] };
    this.setState(st);
  }

  renderIcon(icon) {
    return React.createElement(Icons[icon], this.iconProps, null);
  }

  render() {
    const {
      classes,
      color,
      logo,
      image,
      logoText,
      routes,
      bgColor,
      rtlActive,
      miniActive: propsMiniActive,
    } = this.props;
    const { miniActive: stateMiniActive } = this.state;
    const links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.hidden) return null;
          if (prop.redirect) return null;
          if (prop.collapse) {
            let navLinkClasses = `${classes.itemLink} ${cx({ [` ${classes.collapseActive}`]: this.activeRoute(prop.path) })}`;
            const itemText = `${classes.itemText
            } ${
              cx({
                [classes.itemTextMini]: propsMiniActive && stateMiniActive,
                [classes.itemTextMiniRTL]: rtlActive && propsMiniActive && stateMiniActive,
                [classes.itemTextRTL]: rtlActive,
              })}`;
            const collapseItemText = `${classes.collapseItemText
            } ${
              cx({
                [classes.collapseItemTextMini]: propsMiniActive && stateMiniActive,
                [classes.collapseItemTextMiniRTL]: rtlActive && propsMiniActive && stateMiniActive,
                [classes.collapseItemTextRTL]: rtlActive,
              })}`;
            const itemIcon = `${classes.itemIcon
            } ${cx({ [classes.itemIconRTL]: rtlActive })}`;
            const caret = `${classes.caret} ${cx({ [classes.caretRTL]: rtlActive })}`;
            return (
              <ListItem key={key} className={classes.item}>
                <NavLink
                  to="#"
                  className={navLinkClasses}
                  onClick={() => this.openCollapse(prop.state)}
                >
                  <ListItemIcon className={itemIcon}>
                    {this.renderIcon(prop.icon)}
                  </ListItemIcon>
                  <ListItemText
                    primary={prop.name}
                    secondary={(<b className={`${caret} ${this.state[prop.state] ? classes.caretActive : ''}`} />)}
                    disableTypography
                    className={itemText}
                  />
                </NavLink>
                <Collapse in={this.state[prop.state]} unmountOnExit>
                  <List className={`${classes.list} ${classes.collapseList}`}>
                    {prop.views.map((_prop, _key) => {
                      if (_prop.hidden) return null;
                      if (_prop.redirect) return null;
                      navLinkClasses = `${classes.collapseItemLink} ${cx({ [` ${classes[color]}`]: this.activeRoute(_prop.path) })}`;
                      const collapseItemMini = `${classes.collapseItemMini} ${cx({ [classes.collapseItemMiniRTL]: rtlActive })}`;
                      return (
                        <ListItem key={_key} className={classes.collapseItem}>
                          <NavLink to={_prop.path} className={navLinkClasses}>
                            <span className={collapseItemMini}>
                              {_prop.mini}
                            </span>
                            <ListItemText
                              primary={_prop.name}
                              disableTypography
                              className={collapseItemText}
                            />
                          </NavLink>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </ListItem>
            );
          }
          const navLinkClasses = `${classes.itemLink} ${cx({ [` ${classes[color]}`]: this.activeRoute(prop.path) })}`;
          const itemText = `${classes.itemText} ${
            cx({
              [classes.itemTextMini]: propsMiniActive && stateMiniActive,
              [classes.itemTextMiniRTL]: rtlActive && propsMiniActive && stateMiniActive,
              [classes.itemTextRTL]: rtlActive,
            })}`;
          const itemIcon = `${classes.itemIcon} ${cx({ [classes.itemIconRTL]: rtlActive })}`;
          return (
            <ListItem key={key} className={classes.item}>
              <NavLink to={prop.path} className={navLinkClasses}>
                <ListItemIcon className={itemIcon}>
                  {this.renderIcon(prop.icon)}
                </ListItemIcon>
                <ListItemText
                  primary={prop.name}
                  disableTypography
                  className={itemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );

    const logoNormal = `${classes.logoNormal
    } ${
      cx({
        [classes.logoNormalSidebarMini]: propsMiniActive && stateMiniActive,
        [classes.logoNormalSidebarMiniRTL]: rtlActive && propsMiniActive && stateMiniActive,
        [classes.logoNormalRTL]: rtlActive,
      })}`;
    const logoMini = `${classes.logoMini} ${cx({ [classes.logoMiniRTL]: rtlActive })}`;
    const logoClasses = `${classes.logo} ${cx({ [classes.whiteAfter]: bgColor === 'white' })}`;
    const brand = (
      <div className={logoClasses}>
        <a href="#" className={logoMini}>
          <img src={logo} alt="logo" className={classes.img} />
        </a>
        <a href="#" className={logoNormal}>
          {logoText}
        </a>
      </div>
    );
    const drawerPaper = `${classes.drawerPaper} ${
      cx({
        [classes.drawerPaperMini]: propsMiniActive && stateMiniActive,
        [classes.drawerPaperRTL]: rtlActive,
      })}`;
    const sidebarWrapper = `${classes.sidebarWrapper} ${
      cx({
        [classes.drawerPaperMini]: propsMiniActive && stateMiniActive,
        [classes.sidebarWrapperWithPerfectScrollbar]:
          navigator.platform.indexOf('Win') > -1,
      })}`;
    return (
      <div ref="mainPanel">
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={rtlActive ? 'left' : 'right'}
            open={this.props.open}
            classes={{ paper: `${drawerPaper} ${classes[`${bgColor}Background`]}` }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              headerLinks={<HeaderLinks rtlActive={rtlActive} />}
              links={links}
            />
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: `url(${image})` }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            onMouseOver={() => this.setState({ miniActive: false })}
            onMouseOut={() => this.setState({ miniActive: true })}
            anchor={rtlActive ? 'right' : 'left'}
            variant="permanent"
            open
            classes={{ paper: `${drawerPaper} ${classes[`${bgColor}Background`]}` }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              links={links}
            />
            {image !== undefined ? (<div className={classes.background} style={{ backgroundImage: `url(${image})` }} />) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: 'blue',
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  bgColor: PropTypes.oneOf(['white', 'black', 'blue']),
  rtlActive: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'red',
    'orange',
    'green',
    'blue',
    'purple',
    'rose',
  ]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(style)(Sidebar);
