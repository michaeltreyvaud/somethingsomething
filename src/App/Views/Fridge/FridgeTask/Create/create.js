import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';

import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';

import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFridgeItem: -1,
      selectedUser: -1,
      selectedTeam: -1,
      day: '',
      time: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createFridgeTask, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    const item = { ...state };
    delete item.selectedFridgeItem;
    delete item.selectedUser;
    delete item.selectedTeam;
    return createFridgeTask(item);
  }

  updateValue(e) {
    const { target } = e;
    const { value } = target;
    if (target.name === 'fridgeItem') {
      const { fridgeItems } = this.props;
      return this.setState({
        selectedFridgeItem: value,
        fridgeItem: {
          id: fridgeItems[value].id,
          displayName: fridgeItems[value].name,
        },
      });
    }
    if (target.name === 'team') {
      const { teams } = this.props;
      return this.setState({
        selectedTeam: value,
        team: teams[value].name,
      });
    }
    if (target.name === 'user') {
      const { users } = this.props;
      return this.setState({
        selectedUser: value,
        user: {
          email: users[value].email,
          firstName: users[value].firstName,
          lastName: users[value].lastName,
        },
      });
    }
    return this.setState({
      [target.id || target.name]: value,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/fridge/task');
  }

  renderFridgeItems() {
    const { fridgeItems, classes } = this.props;
    return fridgeItems.map((item, index) => (
      <MenuItem
        key={`${item.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="fridgeItem"
        value={index}
      >
        {item.name}
      </MenuItem>));
  }

  renderTeams() {
    const { teams, classes } = this.props;
    return teams.map((item, index) => (
      <MenuItem
        key={`${item.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="team"
        value={index}
      >
        {item.name}
      </MenuItem>));
  }

  renderUsers() {
    const { users, classes } = this.props;
    return users.map((item, index) => (
      <MenuItem
        key={`${item.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="user"
        value={index}
      >
        {`${item.firstName} ${item.lastName}`}
      </MenuItem>));
  }

  render() {
    const { classes, loading } = this.props;
    const {
      selectedTeam, selectedFridgeItem, selectedUser,
      description, day, time,
    } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <div>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      Choose Fridge Item
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      onChange={e => this.updateValue(e)}
                      value={selectedFridgeItem}
                      inputProps={{ name: 'fridgeItem' }}
                    >
                      {this.renderFridgeItems()}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      Choose Team
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      onChange={e => this.updateValue(e)}
                      value={selectedTeam}
                      inputProps={{ name: 'team' }}
                    >
                      {this.renderTeams()}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      Choose User
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      onChange={e => this.updateValue(e)}
                      value={selectedUser}
                      inputProps={{ name: 'user' }}
                    >
                      {this.renderUsers()}
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
                        value="MONDAY"
                      >
                        Monday
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="day"
                        value="TUESDAY"
                      >
                        Tuesday
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="day"
                        value="WEDNESDAY"
                      >
                        Wednesday
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="day"
                        value="THURSDAY"
                      >
                        Thursday
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="day"
                        value="FRIDAY"
                      >
                        Friday
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="day"
                        value="SATURDAY"
                      >
                        Saturday
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="day"
                        value="SUNDAY"
                      >
                        Sunday
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      Time
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      value={time}
                      onChange={e => this.updateValue(e)}
                      inputProps={{ name: 'time' }}
                    >
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="time"
                        value="MORNING"
                      >
                        Morning
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="time"
                        value="AFTERNOON"
                      >
                        Afternoon
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="time"
                        value="EVENING"
                      >
                        Evening
                      </MenuItem>
                      <MenuItem
                        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
                        id="time"
                        value="NIGHT"
                      >
                        Night
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <CustomInput
                    labelText="Description"
                    id="description"
                    value={description}
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ multiline: true, rows: 3 }}
                    onChange={e => this.updateValue(e)}
                  />
                  <Button loading={loading} onClick={() => this.create()} color="rose" className={classes.updateProfileButton}>
                    Save
                  </Button>
                  <Button onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Create.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  fridgeItems: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  createFridgeTask: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
