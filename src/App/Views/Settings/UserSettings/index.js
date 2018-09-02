import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Datetime from 'react-datetime';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Check from '@material-ui/icons/Check';

// core components
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import Button from '../../../Components/CustomButtons';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import NavPills from '../../../Components/NavPills';
import Card from '../../../Components/Card/Card';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../Components/CustomInput';
import Table from '../../../Components/Table';

import regularFormsStyle from './style';
import extendedTablesStyle from '../../../Assets/Jss/extendedTablesStyle';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: 'b',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedValue: event.target.value });
  }

  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
      noticeModal: false,
    });
  }

  handleClickOpen(modal) {
    const x = [];
    x[modal] = true;
    this.setState(x);
  }

  handleClose(modal) {
    const x = [];
    x[modal] = false;
    this.setState(x);
  }

  render() {
    const { classes } = this.props;
    const simpleButtons = [
      { color: 'success', icon: Edit },
      { color: 'danger', icon: Close },
    ].map((prop, key) => (
      <Button
        color={prop.color}
        simple
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    ));
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <h4 className={classes.cardTitle}>
            Personal Settings
              </h4>
            </CardHeader>
            <CardBody>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 12, md: 2 },
                  contentGrid: { xs: 12, sm: 12, md: 10 },
                }}
                tabs={[
                  {
                    tabButton: 'Profile',
                    tabContent: (
                      <form>
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
                        <CustomInput
                          labelText="First Name"
                          id="firstName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'text',
                          }}
                        />
                        <CustomInput
                          labelText="Second Name"
                          id="secondName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'text',
                          }}
                        />
                        <CustomInput
                          labelText="Email adress"
                          id="emailAdress"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'email',
                          }}
                        />
                        <CustomInput
                          labelText="Phone Number"
                          id="phoneNo"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'phone',
                          }}
                        />
                        <Button color="rose">Save</Button>
                      </form>
                    ),
                  },
                  {
                    tabButton: 'Account',
                    tabContent: (
                      <form>
                        <CustomInput
                          labelText="Current password"
                          id="currentPassword"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'password',
                          }}
                        />
                        <CustomInput
                          labelText="New Password"
                          id="newPassword"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'password',
                          }}
                        />
                        <CustomInput
                          labelText="Confirm New Password"
                          id="confirmPassword"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'password',
                          }}
                        />
                        <CustomInput
                          labelText="Login Code"
                          id="loginCode"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'number',
                          }}
                        />
                        <Button color="rose">Save</Button>
                      </form>
                    ),
                  },
                  {
                    tabButton: 'Signature',
                    tabContent: (
                      <SignatureCanvas
                        penColor="green"
                        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                      />,
                      document.getElementById('react-container')
                    ),
                  },
                  {
                    tabButton: 'Medical Questionaire',
                    tabContent: (
                      <form>
                        <GridContainer>
                          <GridItem xs={12} sm={2} lg={2}>
                            <FormLabel
                              className={
                                            `${classes.labelHorizontal
                                            } ${
                                              classes.labelHorizontalRadioCheckbox}`
                                          }
                            >
                              <b>Have you ever been a carrier of</b>
                            </FormLabel>
                          </GridItem>
                          <GridItem xs={12} sm={4} lg={2}>
                            <div
                              className={
                                            `${classes.checkboxAndRadio
                                            } ${
                                              classes.checkboxAndRadioHorizontal}`
                                          }
                            >
                              <FormControlLabel
                                control={(
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(21)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                                }
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked,
                                    }}
                                  />)}
                                classes={{
                                  label: classes.label,
                                }}
                                label="A food borne disease"
                              />
                            </div>
                            <div
                              className={
                                            `${classes.checkboxAndRadio
                                            } ${
                                              classes.checkboxAndRadioHorizontal}`
                                          }
                            >
                              <FormControlLabel
                                control={(
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(21)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                                }
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked,
                                    }}
                                  />)}
                                classes={{
                                  label: classes.label,
                                }}
                                label="Typhoid or paratyphoid"
                              />
                            </div>
                            <div
                              className={
                                            `${classes.checkboxAndRadio
                                            } ${
                                              classes.checkboxAndRadioHorizontal}`
                                          }
                            >
                              <FormControlLabel
                                control={(
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(21)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                                }
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked,
                                    }}
                                  />)}
                                classes={{
                                  label: classes.label,
                                }}
                                label="Tuberculosis"
                              />
                            </div>
                            <div
                              className={
                                            `${classes.checkboxAndRadio
                                            } ${
                                              classes.checkboxAndRadioHorizontal}`
                                          }
                            >
                              <FormControlLabel
                                control={(
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(21)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                                }
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked,
                                    }}
                                  />)}
                                classes={{
                                  label: classes.label,
                                }}
                                label="Parasitic infections"
                              />
                            </div>
                            <div
                              className={
                                            `${classes.checkboxAndRadio
                                            } ${
                                              classes.checkboxAndRadioHorizontal}`
                                          }
                            >
                              <FormControlLabel
                                control={(
                                  <Checkbox
                                    tabIndex={-1}
                                    onClick={() => this.handleToggle(21)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon} />
                                                }
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                      checked: classes.checked,
                                    }}
                                  />)}
                                classes={{
                                  label: classes.label,
                                }}
                                label="none"
                              />
                            </div>
                          </GridItem>
                        </GridContainer>
                      </form>
                    ),
                  },
                  {
                    tabButton: 'Medical Log',
                    tabContent: (
                      <div>
                        <GridContainer>
                          <GridItem>
                            <Button
                              color="info"
                              round
                              className={classes.marginRight}
                              onClick={() => this.handleClickOpen('noticeModal')}
                            >
                            Add
                            </Button>
                            <Dialog
                              classes={{
                                root: `${classes.center} ${classes.modalRoot}`,
                                paper: classes.modal,
                              }}
                              open={this.state.noticeModal}
                              TransitionComponent={Transition}
                              keepMounted
                              onClose={() => this.handleClose('noticeModal')}
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
                                  onClick={() => this.handleClose('noticeModal')}
                                >
                                  <Close className={classes.modalClose} />
                                </Button>
                                <h4 className={classes.modalTitle}>Medical Log</h4>
                              </DialogTitle>
                              <DialogContent
                                id="notice-modal-slide-description"
                                className={classes.modalBody}
                              >
                                <CustomInput
                                  labelText="Illness"
                                  id="illness"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                  inputProps={{
                                    type: 'text',
                                  }}
                                />
                                <CustomInput
                                  labelText="Details"
                                  id="illDetails"
                                  formControlProps={{
                                    fullWidth: true,
                                  }}
                                  inputProps={{
                                    multiline: true,
                                    rows: 3,
                                  }}
                                />
                                <Datetime
                                  timeFormat={false}
                                  inputProps={{ placeholder: 'From' }}
                                />
                                <Datetime
                                  timeFormat={false}
                                  inputProps={{ placeholder: 'To' }}
                                />
                              </DialogContent>
                              <DialogActions
                                className={
                              `${classes.modalFooter
                              } ${
                                classes.modalFooterCenter}`
                            }
                              >
                                <Button
                                  onClick={() => this.handleClose('noticeModal')}
                                  color="info"
                                  round
                                >
                              Save
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </GridItem>
                        </GridContainer>
                        <Table
                          tableHead={[
                            'Illness Type',
                            'From Date',
                            'To Date',
                            'Certification',
                            'Details',
                            'Update Time',
                            'Actions',
                          ]}
                          tableData={[
                            [
                              '08/01/2018',
                              '08/01/2018',
                              'dwa',
                              'LINK TO DOCUMENT',
                              'dwad',
                              '08/12/2018 19:46:45',
                              simpleButtons,
                            ],
                          ]}
                          customCellClasses={[
                            classes.center,
                            classes.right,
                            classes.right,
                          ]}
                          customClassesForCells={[0, 4, 5]}
                          customHeadCellClasses={[
                            classes.center,
                            classes.right,
                            classes.right,
                          ]}
                          customHeadClassesForCells={[0, 4, 5]}
                        />
                      </div>
                    ),
                  },
                  {
                    tabButton: 'Training Log',
                    tabContent: (
                      <div>
                        <Button
                          color="info"
                          round
                          className={classes.marginRight}
                          onClick={() => this.handleClickOpen('noticeModal')}
                        >
                      Add
                        </Button>
                        <Dialog
                          classes={{
                            root: `${classes.center} ${classes.modalRoot}`,
                            paper: classes.modal,
                          }}
                          open={this.state.noticeModal}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={() => this.handleClose('noticeModal')}
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
                              onClick={() => this.handleClose('noticeModal')}
                            >
                              <Close className={classes.modalClose} />
                            </Button>
                            <h4 className={classes.modalTitle}>Training Certificate</h4>
                          </DialogTitle>
                          <DialogContent
                            id="notice-modal-slide-description"
                            className={classes.modalBody}
                          >
                            <CustomInput
                              labelText="Training Name"
                              id="trainingName"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: 'text',
                              }}
                            />
                            <CustomInput
                              labelText="Details"
                              id="illDetails"
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                multiline: true,
                                rows: 3,
                              }}
                            />
                            <Datetime
                              timeFormat={false}
                              inputProps={{ placeholder: 'From' }}
                            />
                            <Datetime
                              timeFormat={false}
                              inputProps={{ placeholder: 'To' }}
                            />
                          </DialogContent>
                          <DialogActions
                            className={
                            `${classes.modalFooter
                            } ${
                              classes.modalFooterCenter}`
                          }
                          >
                            <Button
                              onClick={() => this.handleClose('noticeModal')}
                              color="info"
                              round
                            >
                            Save
                            </Button>
                          </DialogActions>
                        </Dialog>
                        <Table
                          tableHead={[
                            'Training Name',
                            'From Date',
                            'To Date',
                            'Certification',
                            'Details',
                            'Update Time',
                            'Actions',
                          ]}
                          tableData={[
                            [
                              '08/01/2018',
                              '08/01/2018',
                              'dwa',
                              'LINK TO DOCUMENT',
                              'dwad',
                              '08/12/2018 19:46:45',
                              simpleButtons,
                            ],
                          ]}
                          customCellClasses={[
                            classes.center,
                            classes.right,
                            classes.right,
                          ]}
                          customClassesForCells={[0, 4, 5]}
                          customHeadCellClasses={[
                            classes.center,
                            classes.right,
                            classes.right,
                          ]}
                          customHeadClassesForCells={[0, 4, 5]}
                        />
                      </div>
                    ),
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(regularFormsStyle, extendedTablesStyle)(UserSettings);
