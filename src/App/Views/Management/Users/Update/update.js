import React from 'react';
import PropTypes from 'prop-types';
import SignatureCanvas from 'react-signature-canvas';

import withStyles from '@material-ui/core/styles/withStyles';
import Contacts from '@material-ui/icons/Contacts';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import GridContainer from '../../../../Components/Grid/GridContainer';
import Card from '../../../../Components/Card/Card';
import GridItem from '../../../../Components/Grid/GridItem';
import CardBody from '../../../../Components/Card/CardBody';
import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';
import Clearfix from '../../../../Components/Clearfix';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardIcon from '../../../../Components/Card/CardIcon';
import NotFound from '../../../../Components/NotFound';
import LoadingTable from '../../../../Components/Loading/LoadingTable';

import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      this.state = {
        ...item,
      };
    } else {
      this.state = {
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        position: '',
        team: '',
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating } = nextProps;
    if (item && !updating) {
      this.setState({
        ...item,
      });
    }
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id || target.name]: target.value,
    });
  }

  updateUser() {
    const { updateUser, updating } = this.props;
    if (updating) return false;
    return updateUser(this.state);
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
    const {
      classes, loading, item, updating,
    } = this.props;
    if (!item && !loading) return (<NotFound text="User Not Found" />);
    const {
      email, lastName, firstName, phoneNumber,
      position, team, authorization,
    } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Contacts />
                </CardIcon>
              </CardHeader>
              <CardBody>
                {!loading && (
                <div>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <ImageUpload
                        avatar
                        addButtonProps={{ color: 'rose', round: true }}
                        changeButtonProps={{ color: 'rose', round: true }}
                        removeButtonProps={{ color: 'danger', round: true }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={e => this.updateValue(e)}
                        value={firstName}
                        labelText="First Name"
                        id="firstName"
                        formControlProps={{ fullWidth: true }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={e => this.updateValue(e)}
                        value={lastName}
                        labelText="Last Name"
                        id="lastName"
                        formControlProps={{ fullWidth: true }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={e => this.updateValue(e)}
                        value={phoneNumber}
                        labelText="Contact Phone No."
                        id="phoneNumber"
                        formControlProps={{ fullWidth: true }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        value={email}
                        labelText="Email"
                        id="email"
                        formControlProps={{ fullWidth: true, disabled: true }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        onChange={e => this.updateValue(e)}
                        value={position}
                        labelText="Position"
                        id="position"
                        formControlProps={{ fullWidth: true }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
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
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
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
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <h4 className={classes.cardIconTitle}>Signature</h4>
                        <SignatureCanvas
                          ref={(ref) => { this.sigCanvas = ref; }}
                          backgroundColor="#ECECEC"
                          penColor="black"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <Clearfix />
                </div>)}
                <LoadingTable visible={loading} color="red" />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <Button loading={updating} onClick={() => this.updateUser()} color="rose" className={classes.updateProfileButton}>
          Save
        </Button>
      </div>
    );
  }
}

Update.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  updating: PropTypes.bool.isRequired,
  updateUser: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  authorizations: PropTypes.array.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
