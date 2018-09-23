import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignatureCanvas from 'react-signature-canvas';

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
    const { user } = props;
    this.state = {
      selectedFoodItem: -1,
      temperature: 0,
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
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
      selectedFoodItem: -1,
      temperature: 0,
      user: {},
      image: 'https://todo.com',
      comments: '',
      signature: 'https://todo.com',
    }, () => {
      close();
    });
  }

  createHotHolding() {
    const { createHotHolding, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    delete state.selectedFoodItem;
    return createHotHolding(state);
  }

  updateValue(e) {
    const { target } = e;
    const { value } = target;
    if (target.name === 'foodItem') {
      const { foodItems } = this.props;
      return this.setState({
        selectedFoodItem: value,
        foodItem: {
          id: foodItems[value].createdAt,
          displayName: foodItems[value].name,
        },
      });
    }
    return this.setState({
      [target.id || target.name]: value,
    });
  }

  renderFoodItems() {
    const { foodItems, classes } = this.props;
    return foodItems.map((foodItem, index) => (
      <MenuItem
        key={`${foodItem.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="foodItem"
        value={index}
      >
        {foodItem.name}
      </MenuItem>));
  }

  render() {
    const { classes, visible, loading } = this.props;
    const {
      selectedFoodItem, temperature, comments,
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
          <legend>Create Hot Holding</legend>
        </DialogTitle>
        <DialogContent id="notice-modal-slide-description" className={classes.modalBody}>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Choose Food Item
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              onChange={e => this.updateValue(e)}
              value={selectedFoodItem}
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
          <SignatureCanvas
            ref={(ref) => { this.sigCanvas = ref; }}
            backgroundColor="#ECECEC"
            penColor="black"
            canvasProps={{ width: 500, height: 250 }}
          />
        </DialogContent>
        <DialogActions className={`${classes.modalFooter} ${classes.modalFooterCenter}`}>
          <Button
            loading={loading}
            onClick={() => this.createHotHolding()}
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
  createHotHolding: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  foodItems: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default Create;
