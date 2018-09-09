import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';

const Transition = props => <Slide direction="down" {...props} />;

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      position: '',
      team: '',
      authorization: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.closeModal();
    }
  }

  closeModal() {
    const { close } = this.props;
    this.setState({
      userName: '',
      userDescription: '',
    }, () => {
      close();
    });
  }

  createUser() {
    const { createUser } = this.props;
    createUser(this.state);
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { classes, visible } = this.props;
    const {
      email, firstName, lastName, phoneNumber,
      position, team, authorization,
    } = this.state;
    return (
      <Dialog
        classes={{
          root: `${classes.center} ${classes.modalRoot}`,
          paper: classes.modal,
        }}
        open={visible}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => this.closeModal()}
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
            onClick={() => this.closeModal()}
          >
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Create User</h4>
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
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'email',
            }}
            value={email}
            onChange={e => this.updateValue(e)}
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
            value={firstName}
            onChange={e => this.updateValue(e)}
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
            value={lastName}
            onChange={e => this.updateValue(e)}
          />
          <CustomInput
            labelText="Phone Number"
            id="phoneNumber"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'phone',
            }}
            value={phoneNumber}
            onChange={e => this.updateValue(e)}
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
            value={position}
            onChange={e => this.updateValue(e)}
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
            value={team}
            onChange={e => this.updateValue(e)}
          />
          <CustomInput
            labelText="Authorisation"
            id="authorization"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
              placeholder: 'drop down menu',
            }}
            value={authorization}
            onChange={e => this.updateValue(e)}
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
            onClick={() => this.createUser()}
            color="info"
            round
          >
          Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

Create.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  createUser: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default Create;
