import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/CustomButtons';

const Transition = props => <Slide direction="down" {...props} />;

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      batchNumber: '',
      description: '',
      expiryDateOffset: 0,
      expiryDate: 0,
      allergens: {
        gluten: false,
        sesameSeeds: false,
        molluscs: false,
        fish: false,
        soybeans: false,
        peanuts: false,
        milk: false,
        sulphurDioxideAndSulphites: false,
        crustaceans: false,
        eggs: false,
        lupin: false,
        nuts: false,
        mustard: false,
        celery: false,
      },
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
      name: '',
      batchNumber: '',
      description: '',
      expiryDateOffset: 0,
      expiryDate: 0,
      allergens: {
        gluten: false,
        sesameSeeds: false,
        molluscs: false,
        fish: false,
        soybeans: false,
        peanuts: false,
        milk: false,
        sulphurDioxideAndSulphites: false,
        crustaceans: false,
        eggs: false,
        lupin: false,
        nuts: false,
        mustard: false,
        celery: false,
      },
    }, () => {
      close();
    });
  }

  createFoodItem() {
    const { createFoodItem, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    delete state.expiryDateOffset;
    return createFoodItem(state);
  }

  updateValue(e) {
    const { target } = e;
    if (target.id === 'expiryDate') {
      const now = moment();
      now.add(target.value, 'd');
      this.setState({
        expiryDateOffset: parseInt(target.value, 10),
        expiryDate: parseInt(now.unix(), 10),
      });
    } else {
      this.setState({
        [target.id]: target.value,
      });
    }
  }

  updateAllergens(e) {
    const { target } = e;
    const { allergens } = this.state;
    allergens[target.id] = !(target.value === 'true');
    this.setState({
      allergens,
    });
  }

  render() {
    const { classes, visible, loading } = this.props;
    const {
      name, batchNumber, description, allergens, expiryDateOffset,
    } = this.state;
    const {
      gluten, sesameSeeds, molluscs, fish, soybeans,
      peanuts, milk, sulphurDioxideAndSulphites, crustaceans,
      eggs, lupin, nuts, mustard, celery,
    } = allergens;
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
          <legend>Create Food Item</legend>
        </DialogTitle>
        <DialogContent id="notice-modal-slide-description" className={classes.modalBody}>
          <CustomInput
            value={name}
            labelText="Name"
            id="name"
            formControlProps={{ fullWidth: true }}
            onChange={e => this.updateValue(e)}
          />
          <CustomInput
            value={batchNumber}
            labelText="Batch Number"
            id="batchNumber"
            formControlProps={{ fullWidth: true }}
            onChange={e => this.updateValue(e)}
          />
          <CustomInput
            value={description}
            labelText="Description"
            id="description"
            formControlProps={{ fullWidth: true }}
            inputProps={{ multiline: true, rows: 3 }}
            onChange={e => this.updateValue(e)}
          />
          <CustomInput
            value={parseInt(expiryDateOffset, 10)}
            labelText="Expiry Date After (In Days)"
            id="expiryDate"
            formControlProps={{ fullWidth: true }}
            inputProps={{ type: 'number' }}
            onChange={e => this.updateValue(e)}
          />
          <div className={classes.inlineChecks}>
            <legend>Allergy Information</legend>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={gluten}
                  id="gluten"
                  value={gluten}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Gluten"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={sesameSeeds}
                  id="sesameSeeds"
                  value={sesameSeeds}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Sesame Seeds"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={molluscs}
                  id="molluscs"
                  value={molluscs}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Molluscs"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={fish}
                  id="fish"
                  value={fish}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Fish"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={soybeans}
                  id="soybeans"
                  value={soybeans}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Soybeans"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={peanuts}
                  id="peanuts"
                  value={peanuts}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Peanuts"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={milk}
                  id="milk"
                  value={milk}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Milk"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={sulphurDioxideAndSulphites}
                  id="sulphurDioxideAndSulphites"
                  value={sulphurDioxideAndSulphites}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Sulphur Dioxide And Sulphites"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={crustaceans}
                  id="crustaceans"
                  value={crustaceans}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Crustaceans"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={eggs}
                  id="eggs"
                  value={eggs}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Eggs"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={lupin}
                  id="lupin"
                  value={lupin}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Lupin"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={nuts}
                  id="nuts"
                  value={nuts}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Nuts"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={mustard}
                  id="mustard"
                  value={mustard}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Mustard"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={celery}
                  id="celery"
                  value={celery}
                  onClick={e => this.updateAllergens(e)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                />
              )}
              classes={{ label: classes.label }}
              label="Celery"
            />
          </div>
        </DialogContent>
        <DialogActions className={`${classes.modalFooter} ${classes.modalFooterCenter}`}>
          <Button
            loading={loading}
            onClick={() => this.createFoodItem()}
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
  createFoodItem: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default Create;
