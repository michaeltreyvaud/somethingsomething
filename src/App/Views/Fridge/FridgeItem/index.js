import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from '@material-ui/icons/Assignment';
import { withRouter } from 'react-router';
import SweetAlert from 'react-bootstrap-sweetalert';

import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';

import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../Components/CustomInput';
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from '../../../Components/CustomButtons';
import Table from '../../../Components/Table';
import extendedTablesStyle from '../../../Assets/Jss/extendedTablesStyle';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class FridgeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      show: false
    };
    this.hideAlert = this.hideAlert.bind(this);
    this.successDelete = this.successDelete.bind(this);
    this.cancelDetele = this.cancelDetele.bind(this);
    this.warningWithConfirmMessage = this.warningWithConfirmMessage.bind(this);
  }

  warningWithConfirmMessage() {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
        </SweetAlert>
      )
    });
  }

  successDelete() {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          Your imaginary file has been deleted.
        </SweetAlert>
      )
    });
  }

  cancelDetele() {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
        >
          Your imaginary file is safe :)
        </SweetAlert>
      )
    });
  }

  hideAlert() {
    this.setState({
      alert: null
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
      { color: 'warning', icon: Print },
      { color: 'success', icon: Open },
      { color: 'danger', icon: Delete },
    ].map((prop, key) => (
      <Button
        color={prop.color}        
        className={classes.actionButton}
        key={key}
        onClick={this.warningWithConfirmMessage}
      >
        <prop.icon className={classes.icon} />
      </Button>
    ));
    return (
      <div>
        {this.state.alert}
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
            <h4 className={classes.modalTitle}>Create New Fridge</h4>
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
              labelText="Name"
              id="fridgeName"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: 'text',
              }}
            />
            <CustomInput
              labelText="Description"
              id="description"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                multiline: true,
                rows: 3,
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
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={[
                    'Image',
                    'Name',
                    'Description',
                    'Actions',
                  ]}
                  tableData={[
                    [
                      '',
                      'Cold Fridge 1',
                      'Its Cold',
                      simpleButtons,
                    ],
                    [
                      '',
                      'Cold Fridge 2',
                      'Its Cold',
                      simpleButtons,
                    ],
                    [
                      '',
                      'Cold Fridge 3',
                      'Its Cold',
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

export default withRouter(withStyles(extendedTablesStyle)(FridgeItem));
