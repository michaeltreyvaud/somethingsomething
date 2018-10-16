import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';

import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Today from '@material-ui/icons/Today';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import Radio from '@material-ui/core/Radio';

import CustomInput from '../../../../Components/CustomInput';
import GridItem from '../../../../Components/Grid/GridItem';
import Button from '../../../../Components/CustomButtons';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: -1,
      selectedCategory: -1,
      team: '',
      user: {},
      category: {},
      startDate: '',
      isRepeatable: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createChecklistItem, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    const item = { ...state };
    delete item.selectedUser;
    delete item.selectedCategory;
    return createChecklistItem(item);
  }

  updateRepeatable(e) {
    const { target } = e;
    this.setState({
      isRepeatable: !(target.value === 'true'),
    });
  }

  updateStartDate(date) {
    return this.setState({
      startDate: date.valueOf(),
    });
  }

  updateValue(e) {
    const { target } = e;
    const { value } = target;
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
    if (target.name === 'category') {
      const { categories } = this.props;
      return this.setState({
        selectedCategory: value,
        category: {
          id: categories[value].id,
          name: categories[value].name,
        },
      });
    }
    return this.setState({
      [target.id || target.name]: value,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/checklist/item');
  }

  renderTeams() {
    const { teams, classes } = this.props;
    return teams.map((item, index) => (
      <MenuItem
        key={`${item.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="team"
        value={item.name}
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

  renderCategories() {
    const { categories, classes } = this.props;
    return categories.map((item, index) => (
      <MenuItem
        key={`${item.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="category"
        value={index}
      >
        {item.name}
      </MenuItem>));
  }

  render() {
    const { classes, loading } = this.props;
    const {
      team, selectedUser, selectedCategory, taskName,
      description, startDate, time, isRepeatable,
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
                <h4 className={classes.cardIconTitle}>Create Task</h4>
              </CardHeader>
              <CardBody>
                <div>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      Team
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      value={team}
                      onChange={e => this.updateValue(e)}
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
                      Category
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      onChange={e => this.updateValue(e)}
                      value={selectedCategory}
                      inputProps={{ name: 'category' }}
                    >
                      {this.renderCategories()}
                    </Select>
                  </FormControl>
                  <CustomInput
                    labelText="Task Name"
                    id="taskName"
                    value={taskName}
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'text' }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    value={description}
                    labelText="Description"
                    id="description"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ multiline: true, rows: 3 }}
                    onChange={e => this.updateValue(e)}
                  />
                  <FormControl fullWidth>
                    <Datetime
                      value={moment(startDate)}
                      dateFormat="DD/MM/YYYY"
                      id="startDate"
                      onChange={date => this.updateStartDate(date)}
                      timeFormat={false}
                      inputProps={{ placeholder: 'Start Date' }}
                    />
                  </FormControl>
                  <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                    <FormControlLabel
                      control={(
                        <Radio
                          checked={time === 'MORNING'}
                          onChange={e => this.updateValue(e)}
                          value="MORNING"
                          name="time"
                          aria-label="MORNING"
                          icon={(<FiberManualRecord className={classes.radioUnchecked} />)}
                          checkedIcon={(<FiberManualRecord className={classes.radioChecked} />)}
                          classes={{ checked: classes.radio }}
                        />)}
                      classes={{ label: classes.label }}
                      label="Morning"
                    />
                    <FormControlLabel
                      control={(
                        <Radio
                          checked={time === 'AFTERNOON'}
                          onChange={e => this.updateValue(e)}
                          value="AFTERNOON"
                          name="time"
                          aria-label="AFTERNOON"
                          icon={(<FiberManualRecord className={classes.radioUnchecked} />)}
                          checkedIcon={(<FiberManualRecord className={classes.radioChecked} />)}
                          classes={{ checked: classes.radio }}
                        />)}
                      classes={{ label: classes.label }}
                      label="Afternoon"
                    />
                    <FormControlLabel
                      control={(
                        <Radio
                          checked={time === 'EVENING'}
                          onChange={e => this.updateValue(e)}
                          value="EVENING"
                          name="time"
                          aria-label="EVENING"
                          icon={(<FiberManualRecord className={classes.radioUnchecked} />)}
                          checkedIcon={(<FiberManualRecord className={classes.radioChecked} />)}
                          classes={{ checked: classes.radio }}
                        />)}
                      classes={{ label: classes.label }}
                      label="Evening"
                    />
                  </div>
                  <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={isRepeatable}
                          id="isRepeatable"
                          name="isRepeatable"
                          value={isRepeatable}
                          onChange={e => this.updateRepeatable(e)}
                          checkedIcon={<Check className={classes.checkedIcon} />}
                          icon={<Check className={classes.uncheckedIcon} />}
                          classes={{ checked: classes.checked }}
                        />)}
                      classes={{ label: classes.label }}
                      label="Repeatable"
                    />
                  </div>
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
  teams: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  createChecklistItem: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
