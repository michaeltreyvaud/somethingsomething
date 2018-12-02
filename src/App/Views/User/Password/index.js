import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Contacts from '@material-ui/icons/Contacts';

import GridContainer from '../../../Components/Grid/GridContainer';
import Card from '../../../Components/Card/Card';
import GridItem from '../../../Components/Grid/GridItem';
import CardBody from '../../../Components/Card/CardBody';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/CustomButtons';
import Clearfix from '../../../Components/Clearfix';
import LoadingTable from '../../../Components/Loading/LoadingTable';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';

import style from './style';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, saving, loading } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Contacts />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Change Password</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Current Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{ type: 'password' }}
                />
                <CustomInput
                  labelText="New Password"
                  id="newPassword"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ type: 'password' }}
                />
                <CustomInput
                  labelText="Confirm New Password"
                  id="confirmPassword"
                  formControlProps={{ fullWidth: true }}
                  inputProps={{ type: 'password' }}
                />
                <Button color="rose">Save</Button>
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <LoadingTable visible={loading} color="red" />
      </div>
    );
  }
}

export default withStyles(style)(Password);
