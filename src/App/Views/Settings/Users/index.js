import React from 'react';
import ReactTable from 'react-table';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from "@material-ui/icons/Assignment";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from '../../../Components/CustomButtons';
import Table from '../../../Components/Table';
import Delete from '@material-ui/icons/Delete';
import Close from '@material-ui/icons/Close';
import Open from '@material-ui/icons/OpenInNew';
import CustomInput from '../../../Components/CustomInput';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';

import style from '../../../Assets/Jss/style';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
    };
    this.handleTags = this.handleTags.bind(this);
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

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleMultiple = event => {
    this.setState({ multipleSelect: event.target.value });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleTags(regularTags) {
    this.setState({ tags: regularTags });
  }

  render() {
    const { classes } = this.props;
    const { simpleSelect } = this.state;
    const simpleButtons = [
      { color: 'success', icon: Open },
      { color: 'danger', icon: Delete },
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
      <div>
      <Button color="info" className={classes.marginRight} onClick={() => this.handleClickOpen('noticeModal')}>
      New
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
          <h4 className={classes.modalTitle}>Create New User</h4>
        </DialogTitle>
        <DialogContent
          id="notice-modal-slide-description"
          className={classes.modalBody}
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
            labelText="Last Name"
            id="lastName"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
            }}
          />
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'email',
            }}
          />
          <CustomInput
            labelText="Code"
            id="code"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'number',
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
          <CustomInput
            labelText="Position"
            id="position"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
            }}
          />
          <CustomInput
            labelText="Team"
            id="team"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'drop down menu',
            }}
          />
          <CustomInput
            labelText="Authorisation"
            id="authorisation"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'drop down menu',
            }}
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
      <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="primary" icon>
                <CardIcon color="primary">
                  <Assignment />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Records</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={[
                    'ID',
                    'Full Name',
                    'Email',
                    'Digit Code',
                    'Phone',
                    'Position',
                    'Team',
                    'Authorisation',
                    'Last Login',
                    'Status',
                    'Actions',
                  ]}
                  tableData={[
                    [
                      '1',
                      'Dan Treyvaud',
                      'test@test.test',
                      '133700',
                      '0857100738',
                      'Staff',
                      'Kitchen',
                      'Administrator',
                      'Active',
                      '08/29/2018 18:07:32',
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
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Users);
