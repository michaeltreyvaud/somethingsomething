import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Hidden from '@material-ui/core/Hidden';
import Popper from '@material-ui/core/Popper';
import Notifications from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';

import Button from '../../CustomButtons';
import CustomInput from '../../CustomInput';
import headerLinksStyle from './style';

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchQuery: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    const { open, searchQuery } = this.state;
    const searchButton = `${classes.top
    } ${
      classes.searchButton
    } `;
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
          formControlProps={{
            className: `${classes.top} ${classes.search}`,
          }}
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
          <Search
            className={`${classes.headerLinksSvg} ${classes.searchIcon}`}
          />
        </Button>
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={open ? 'menu-list' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className={classes.buttonLink}
            muiClasses={{
              label: '',
            }}
            buttonRef={(node) => {
              this.anchorEl = node;
            }}
          >
            <Notifications
              className={
                `${classes.headerLinksSvg
                } ${classes.links}`
              }
            />
            <span className={classes.notifications}>5</span>
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
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list"
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'Mike John responded to your email'}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'You have 5 new tasks'}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {"You're now friend with Andrew"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'Another Notification'}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {'Another One'}
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerLinksStyle)(HeaderLinks);
