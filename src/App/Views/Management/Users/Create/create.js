import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';

import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';

import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createUser, loading } = this.props;
    if (loading) return false;
    return createUser(this.state);
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id || target.name]: target.value,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/management/users');
  }

  renderAuth() {
    const { authorizations, classes } = this.props;
    return authorizations.map((authorization, index) => (
      <MenuItem
        key={`${authorization}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="authorization"
        value={authorization}
      >
        {authorization}
      </MenuItem>));
  }

  renderTeams() {
    const { teams, classes } = this.props;
    return teams.map((team, index) => (
      <MenuItem
        key={`${team.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="team"
        value={team.name}
      >
        {team.name}
      </MenuItem>));
  }

  render() {
    const { classes, loading } = this.props;
    const {
      email, firstName, lastName, phoneNumber,
      position, team, authorization,
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
                  <ImageUpload
                    avatar
                    addButtonProps={{ color: 'rose', round: true }}
                    changeButtonProps={{ color: 'rose', round: true }}
                    removeButtonProps={{ color: 'danger', round: true }}
                  />
                  <CustomInput
                    labelText="Email"
                    name="email"
                    id="email"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'email' }}
                    value={email}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="First Name"
                    name="firstName"
                    id="firstName"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'text' }}
                    value={firstName}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Last Name"
                    name="lastName"
                    id="lastName"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'text' }}
                    value={lastName}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Phone Number"
                    name="phoneNumber"
                    id="phoneNumber"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'phone' }}
                    value={phoneNumber}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Position"
                    name="position"
                    id="position"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'text' }}
                    value={position}
                    onChange={e => this.updateValue(e)}
                  />
                  <FormControl
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
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
                  <FormControl
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
            Authorization
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      value={authorization}
                      onChange={e => this.updateValue(e)}
                      inputProps={{ name: 'authorization' }}
                    >
                      {this.renderAuth()}
                    </Select>
                  </FormControl>
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
  createUser: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  authorizations: PropTypes.array.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
