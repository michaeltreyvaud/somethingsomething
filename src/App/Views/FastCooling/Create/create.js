import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/CustomButtons';

const Transition = props => <Slide direction="down" {...props} />;

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItem: 0,
      temperature: 0,
      user: 'Some User',
      image: 'https://todo.com',
      comments: '',
      signature: 'https://todo.com',
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
      foodItem: 0,
      temperature: 0,
      user: '',
      image: 'https://todo.com',
      comments: '',
      signature: 'https://todo.com',
    }, () => {
      close();
    });
  }

  createFastCooling() {
    const { createFastCooling, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    return createFastCooling(state);
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id || target.name]: target.value,
    });
  }

  renderFoodItems() {
    const { foodItems, classes } = this.props;
    return foodItems.map((foodItem, index) => (
      <MenuItem
        key={`${foodItem.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="foodItem"
        value={foodItem.createdAt}
      >
        {foodItem.name}
      </MenuItem>));
  }

  renderUsers() {
    const { users, classes } = this.props;
    return users.map((user, index) => (
      <MenuItem
        key={`${user.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="user"
        value={`${user.email}`}
      >
        {`${user.firstName} ${user.lastName}`}
      </MenuItem>));
  }

  render() {
    const { classes, visible, loading } = this.props;
    const {
      foodItem, temperature, user,
      comments,
    } = this.state;
    return (
      <Dialog
        classes={{ root: `${classes.center} ${classes.modalRoot}`, paper: classes.modal }}
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
          <legend>Create Fast Cooling</legend>
        </DialogTitle>
        <DialogContent id="notice-modal-slide-description" className={classes.modalBody}>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Choose Food Item
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              value={foodItem}
              onChange={e => this.updateValue(e)}
              inputProps={{ name: 'foodItem' }}
            >
              {this.renderFoodItems()}
            </Select>
          </FormControl>
          <CustomInput
            value={temperature}
            onChange={e => this.updateValue(e)}
            labelText="Capture Temperature Value"
            id="temperature"
            formControlProps={{ fullWidth: true }}
            inputProps={{ type: 'number' }}
          />
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Choose User
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              value={user}
              onChange={e => this.updateValue(e)}
              inputProps={{ name: 'user' }}
            >
              {this.renderUsers()}
            </Select>
          </FormControl>
          <InputLabel className={classes.label}>
            Capture Datetime
          </InputLabel>
          <br />
          <FormControl fullWidth>
            <Datetime
              inputProps={{ placeholder: '08/01/2018 12:00 AM', disabled: true }}
            />
          </FormControl>
          <ImageUpload
            avatar
            addButtonProps={{ color: 'rose', round: true }}
            changeButtonProps={{ color: 'rose', round: true }}
            removeButtonProps={{ color: 'danger', round: true }}
          />
          <CustomInput
            value={comments}
            labelText="Comments"
            id="comments"
            formControlProps={{ fullWidth: true }}
            inputProps={{ multiline: true, rows: 3 }}
            onChange={e => this.updateValue(e)}
          />
          <InputLabel style={{ color: '#AAAAAA' }}>Signature</InputLabel>
        </DialogContent>
        <DialogActions className={`${classes.modalFooter} ${classes.modalFooterCenter}`}>
          <Button
            loading={loading}
            onClick={() => this.createFastCooling()}
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
  createFastCooling: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  foodItems: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

export default Create;
