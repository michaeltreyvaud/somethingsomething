import React from 'react';
import SignatureCanvas from 'react-signature-canvas';

import withStyles from '@material-ui/core/styles/withStyles';
import Contacts from "@material-ui/icons/Contacts";

import GridContainer from '../../../Components/Grid/GridContainer';
import Card from '../../../Components/Card/Card';
import GridItem from '../../../Components/Grid/GridItem';
import CardBody from '../../../Components/Card/CardBody';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/CustomButtons';
import Clearfix from '../../../Components/Clearfix';
import LoadingTable from '../../../Components/Loading/LoadingTable';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';

import style from './style';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
    };
  }

  render() {
    const {
        email, firstName, lastName, phone,
      } = this.state;
    const { classes, saving, loading } = this.props;
    return (
      <div>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
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
                        addButtonProps={{
                            color: 'rose',
                            round: true,
                        }}
                        changeButtonProps={{
                            color: 'rose',
                            round: true,
                        }}
                        removeButtonProps={{
                            color: 'danger',
                            round: true,
                        }}
                    />
                    </GridItem>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                        onChange={event => this.onChange(event)}
                        value={firstName}
                        labelText="First Name"
                        id="firstName"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                        onChange={event => this.onChange(event)}
                        value={lastName}
                        labelText="Last Name"
                        id="lastName"
                        formControlProps={{
                            fullWidth: true,
                        }}
                        />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                        onChange={event => this.onChange(event)}
                        value={phone}
                        labelText="Contact Phone No."
                        id="phone"
                        formControlProps={{
                            fullWidth: true,
                        }}
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                        onChange={event => this.onChange(event)}
                        value={email}
                        labelText="Email"
                        id="email"
                        formControlProps={{
                            fullWidth: true,
                            disabled: true,
                        }}
                    />
                    </GridItem>
                </GridContainer>
            <Clearfix /> 
            </CardBody>
            </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
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
        <LoadingTable visible={loading} color="red" />
        <Button loading={saving} onClick={() => this.updateInfo()} color="rose" className={classes.updateProfileButton}>
                    Save
        </Button>
        </div>
    );
  }
}

export default withStyles(style)(Profile);