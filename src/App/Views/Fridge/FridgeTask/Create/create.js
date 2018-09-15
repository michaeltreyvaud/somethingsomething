import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Datetime from 'react-datetime';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';

const Transition = props => <Slide direction="down" {...props} />;

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeName: '',
      teamName: '',
      userName: '',
      time: '',
      day: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.closeModal();
    }
  }

  closeModal() {
    const { close } = this.props;
    this.setState({
      fridgeName: '',
      teamName: '',
      userName: '',
      time: '',
      day: '',
    }, () => {
      close();
    });
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id || target.name]: target.value,
    });
  }

  updateTime(moment) {
    this.setState({
      time: moment.valueOf()
    });
  }

  renderTeams() {
    const { teams, classes } = this.props;
    return teams.map((team, index) => (
      <MenuItem
        key={`${team.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="teamName"
        value={team.name}
      >
        {team.name}
      </MenuItem>));
  }

  renderFridges() {
    const { fridges, classes } = this.props;
    return fridges.map((fridge, index) => (
      <MenuItem
        key={`${fridge.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="fridgeName"
        value={fridge.name}
      >
        {fridge.name}
      </MenuItem>));
  }

  renderUser() {
    const { users, classes } = this.props;
    return users.map((user, index) => (
      <MenuItem
        key={`${user.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="userName"
        value={`${user.firstName} ${user.lastName}`}
      >
        {`${user.firstName} ${user.lastName}`}
      </MenuItem>));
  }

  render() {
    const { classes, visible } = this.props;
    const {
      teamName, fridgeName, userName, description,
      day, time,
    } = this.state;
    return (
      <Dialog
        classes={{
          root: `${classes.center} ${classes.modalRoot}`,
          paper: classes.modal,
        }}
        open={visible}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.closeModal()}
        aria-labelledby="notice-modal-slide-title"
        aria-describedby="notice-modal-slide-description"
      >
        <DialogTitle
          id="notice-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            justIcon
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="transparent"
            onClick={() => this.closeModal()}
          >
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Create Fridge Task</h4>
        </DialogTitle>
        <DialogContent id="notice-modal-slide-description" className={classes.modalBody}>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Fridge
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              value={fridgeName}
              onChange={e => this.updateValue(e)}
              inputProps={{ name: 'fridgeName' }}
            >
              {this.renderFridges()}
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Team
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              value={teamName}
              onChange={e => this.updateValue(e)}
              inputProps={{ name: 'teamName' }}
            >
              {this.renderTeams()}
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              User
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              value={userName}
              onChange={e => this.updateValue(e)}
              inputProps={{ name: 'userName' }}
            >
              {this.renderUser()}
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Day
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              value={day}
              onChange={e => this.updateValue(e)}
              inputProps={{ name: 'day' }}
            >
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                id="day"
                value="Monday"
              >
                Monday
              </MenuItem>
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                id="day"
                value="Tuesday"
              >
                Tuesday
              </MenuItem>
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                id="day"
                value="Wednesday"
              >
                Wednesday
              </MenuItem>
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                id="day"
                value="Thursday"
              >
                Thursday
              </MenuItem>
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                id="day"
                value="Friday"
              >
                Friday
              </MenuItem>
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                id="day"
                value="Saturday"
              >
                Saturday
              </MenuItem>
              <MenuItem
                classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                id="day"
                value="Sunday"
              >
                Sunday
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <Datetime
              value={time}
              onChange={e => this.updateTime(e)}
              dateFormat={false}
              inputProps={{ placeholder: 'Time' }}
            />
          </FormControl>
          <FormControl fullWidth>
            <CustomInput
              labelText="Description"
              id="description"
              value={description}
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                multiline: true,
                rows: 3,
              }}
              onChange={e => this.updateValue(e)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions className={`${classes.modalFooter} ${classes.modalFooterCenter}`}>
          <Button
            loading={false}
            onClick={() => this.closeModal()}
            color="info"
            round
          >
          Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

Create.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  teams: PropTypes.array.isRequired,
  fridges: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
};

export default Create;
