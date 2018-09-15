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
      fridgeName: '',
      fridgeDescription: '',
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
      fridgeName: '',
      fridgeDescription: '',
    }, () => {
      close();
    });
  }

  createFridge() {
    const { createFridge, loading } = this.props;
    if (loading) return false;
    const { fridgeName, fridgeDescription } = this.state;
    return createFridge(fridgeName, fridgeDescription);
  }

  render() {
    const { classes, visible, loading } = this.props;
    const { fridgeName, fridgeDescription } = this.state;
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
          <h4 className={classes.modalTitle}>Create Fridge Item</h4>
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
            value={fridgeName}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: 'text',
            }}
            onChange={e => this.setState({ fridgeName: e.target.value })}
          />
          <CustomInput
            labelText="Description"
            id="description"
            value={fridgeDescription}
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              multiline: true,
              rows: 3,
            }}
            onChange={e => this.setState({ fridgeDescription: e.target.value })}
          />
        </DialogContent>
        <DialogActions className={`${classes.modalFooter} ${classes.modalFooterCenter}`}>
          <Button
            loading={loading}
            onClick={() => this.createFridge()}
            color="info"
            round
          >
          Create
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
  createFridge: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default Create;
