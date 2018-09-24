import React from 'react';
import PropTypes from 'prop-types';
import SignatureCanvas from 'react-signature-canvas';

import withStyles from '@material-ui/core/styles/withStyles';
import Contacts from '@material-ui/icons/Contacts';

import GridContainer from '../../../Components/Grid/GridContainer';
import Card from '../../../Components/Card/Card';
import GridItem from '../../../Components/Grid/GridItem';
import CardBody from '../../../Components/Card/CardBody';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/CustomButtons';
import Clearfix from '../../../Components/Clearfix';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';

import style from './style';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    const { user } = props;
    this.state = {
      ...user,
    };
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  updateInfo() {
    const { updateUser, loading } = this.props;
    if (loading) return false;
    return updateUser(this.state);
  }

  render() {
    const {
      email, lastName, firstName, phoneNumber,
      position, team,
    } = this.state;
    const { classes, loading } = this.props;
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
                      value={position}
                      labelText="Position"
                      id="position"
                      formControlProps={{ fullWidth: true, disabled: true }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      value={team}
                      labelText="Team"
                      id="team"
                      formControlProps={{ fullWidth: true, disabled: true }}
                    />
                  </GridItem>
                </GridContainer>
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <h4 className={classes.cardIconTitle}>Signature</h4>
              </CardHeader>
              <CardBody>
                <SignatureCanvas
                  ref={(ref) => { this.sigCanvas = ref; }}
                  backgroundColor="#ECECEC"
                  penColor="black"
                  canvasProps={{ width: 740, height: 320 }}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <Button loading={loading} onClick={() => this.updateInfo()} color="rose" className={classes.updateProfileButton}>
          Save
        </Button>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default withStyles(style)(Profile);
