import React from 'react';
import SignatureCanvas from 'react-signature-canvas';

import withStyles from '@material-ui/core/styles/withStyles';

import GridContainer from '../../Components/Grid/GridContainer';
import Card from '../../Components/Card/Card';
import GridItem from '../../Components/Grid/GridItem';
import CardBody from '../../Components/Card/CardBody';
import NavPills from '../../Components/NavPills/';
import ImageUpload from '../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/CustomButtons';
import Clearfix from '../../Components/Clearfix';
import LoadingTable from '../../Components/Loading/LoadingTable';
import Table from '../../Components/Table';
import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

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
    const simpleButtons = [
        { color: 'success', icon: Open, tooltip: 'Edit' },
        { color: 'danger', icon: Delete, tooltip: 'Delete' },
      ].map((prop, key) => {
        return (
          <Tooltip
            id="tooltip-top"
            title={prop.tooltip}
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color={prop.color}
              className={classes.actionButton}
              key={key}
            >
              <prop.icon className={classes.icon} />
            </Button>
          </Tooltip>
        );
      });
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <NavPills
                  color="warning"
                  tabs={[
                    {
                      tabButton: "Profile",
                      tabContent: (
                        <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
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
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <SignatureCanvas
                                    ref={(ref) => { this.sigCanvas = ref; }}
                                    backgroundColor="#ECECEC"
                                    penColor="black"
                                    canvasProps={{ width: 720, height: 340 }}
                                />
                            </GridItem>                            
                        </GridContainer>
                        <LoadingTable visible={loading} color="red" />
                        <Button loading={saving} onClick={() => this.updateInfo()} color="rose" className={classes.updateProfileButton}>
                                    Save
                        </Button>
                        </div>
                      )
                    },
                    {
                      tabButton: "Password",
                      tabContent: (
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                            labelText="Password"
                            id="password"
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            type: "password"
                            }}
                        />
                        <CustomInput
                            labelText="New Password"
                            id="newPassword"
                            formControlProps={{
                                fullWidth: true
                            }}
                            inputProps={{
                                type: "password"
                            }}
                        />
                        <CustomInput
                            labelText="Confirm New Password"
                            id="confirmPassword"
                            formControlProps={{
                            fullWidth: true
                            }}
                            inputProps={{
                            type: "password"
                            }}
                        />
                        </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Medical Log",
                      tabContent: (
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Button
                                        color="info"
                                        className={classes.marginRight}
                                    >
                                    New
                                </Button>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <Table
                                    hover
                                    tableHead={[
                                        'Illness Type',
                                        'From Date',
                                        'To Date',                                        
                                        'Certification',
                                        'Detail',
                                        'Actions',
                                    ]}
                                    tableData={[
                                        ["dwa", "08/01/2018", "08/01/2018", "Link to Cert", "sick", simpleButtons],
                                    ]}
                                    customCellClasses={[
                                        classes.left,
                                        classes.left,
                                        classes.right,
                                    ]}
                                    customClassesForCells={[0, 1, 2]}
                                    customHeadCellClasses={[
                                        classes.left,
                                        classes.left,
                                        classes.right,
                                    ]}
                                    customHeadClassesForCells={[0, 1, 2]}
                                />
                            </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                        tabButton: "Training Log",
                        tabContent: (
                            <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <Button
                                        color="info"
                                        className={classes.marginRight}
                                    >
                                    New
                                </Button>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <Table
                                    hover
                                    tableHead={[
                                        'Training Name',
                                        'From Date',
                                        'To Date',                                        
                                        'Certification',
                                        'Detail',
                                        'Actions',
                                    ]}
                                    tableData={[
                                        ["dwa", "08/01/2018", "08/01/2018", "Link to Cert", "sick", simpleButtons],
                                    ]}
                                    customCellClasses={[
                                        classes.left,
                                        classes.left,
                                        classes.right,
                                    ]}
                                    customClassesForCells={[0, 1, 2]}
                                    customHeadCellClasses={[
                                        classes.left,
                                        classes.left,
                                        classes.right,
                                    ]}
                                    customHeadClassesForCells={[0, 1, 2]}
                                />
                            </GridItem>
                        </GridContainer>
                        )
                      }
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Profile);