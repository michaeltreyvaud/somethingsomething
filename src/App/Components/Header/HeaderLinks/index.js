import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Hidden from '@material-ui/core/Hidden';
import Popper from '@material-ui/core/Popper';
import Notifications from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';

import Button from '../../CustomButtons';
import CustomInput from '../../CustomInput';
import headerLinksStyle from './style';

import { userLogout } from '../../../Views/User/Profile/Store/Actions';

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchQuery: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleClick(path) {
    const { history } = this.props;
    const { open } = this.state;
    this.setState({
      open: !open,
    }, () => {
      history.push(`/dashboard/user/${path}`);
    });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  logout() {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { classes } = this.props;
    const { open, searchQuery } = this.state;
    const searchButton = `${classes.top} ${classes.searchButton}`;
    const dropdownItem = classNames(
      classes.dropdownItem,
      classes.primaryHover,
    );
    const managerClasses = classNames({
      [classes.managerClasses]: true,
    });
    return (
      <div>
        <CustomInput
          formControlProps={{ className: `${classes.top} ${classes.search}` }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search',
              className: classes.searchInput,
            },
          }}
          onChange={e => this.setState({ searchQuery: e.target.value })}
          value={searchQuery}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={searchButton}
        >
          <Search className={`${classes.headerLinksSvg} ${classes.searchIcon}`} />
        </Button>
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={open ? 'menu-list' : null}
            aria-haspopup="true"
            onClick={this.handleOpen}
            className={classes.buttonLink}
            muiClasses={{ label: '' }}
            buttonRef={(node) => { this.anchorEl = node; }}
          >
            <Notifications
              className={`${classes.headerLinksSvg} ${classes.links}`}
            />
            <Hidden mdUp implementation="css">
              <span onClick={this.handleClick} className={classes.linkText}>
                {'Notification'}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !open,
              [classes.pooperResponsive]: true,
              [classes.pooperNav]: true,
            })}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="menu-list"
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={() => this.handleClick('profile')}
                        className={dropdownItem}
                      >
                        {'Profile Settings'}
                      </MenuItem>
                      <MenuItem
                        onClick={() => this.handleClick('password')}
                        className={dropdownItem}
                      >
                        {'Security'}
                      </MenuItem>
                      <MenuItem
                        onClick={() => this.handleClick('medical')}
                        className={dropdownItem}
                      >
                        {'Medical Log'}
                      </MenuItem>
                      <MenuItem
                        onClick={() => this.handleClick('training')}
                        className={dropdownItem}
                      >
                        {'Training Log'}
                      </MenuItem>
                      <MenuItem
                        onClick={() => this.logout()}
                        className={dropdownItem}
                      >
                        {'Log Out'}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({ logout: () => dispatch(userLogout()) });

const connected = connect(mapStateToProps, mapDispatchToProps)(HeaderLinks);

export default withRouter(withStyles(headerLinksStyle)(connected));
