import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';

import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Today from '@material-ui/icons/Today';

import CustomInput from '../../../Components/CustomInput';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import GridContainer from '../../../Components/Grid/GridContainer';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import CardIcon from '../../../Components/Card/CardIcon';
import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';

import LoadingTable from '../../../Components/Loading/LoadingTable';

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        name, batchNumber, description, allergens, expiryDate,
      } = item;
      const {
        gluten, sesameSeeds, molluscs, fish, soybeans,
        peanuts, milk, sulphurDioxideAndSulphites, crustaceans,
        eggs, lupin, nuts, mustard, celery,
      } = allergens;
      this.state = {
        name,
        batchNumber,
        description,
        expiryDate,
        allergens: {
          gluten,
          sesameSeeds,
          molluscs,
          fish,
          soybeans,
          peanuts,
          milk,
          sulphurDioxideAndSulphites,
          crustaceans,
          eggs,
          lupin,
          nuts,
          mustard,
          celery,
        },
      };
    } else {
      this.state = {
        name: '',
        batchNumber: '',
        description: '',
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
  }

  componentWillReceiveProps(nextProps) {
    const { item } = nextProps;
    if (item) {
      const {
        name, batchNumber, description, allergens, expiryDate,
      } = item;
      const {
        gluten, sesameSeeds, molluscs, fish, soybeans,
        peanuts, milk, sulphurDioxideAndSulphites, crustaceans,
        eggs, lupin, nuts, mustard, celery,
      } = allergens;
      this.setState({
        name,
        batchNumber,
        description,
        expiryDate,
        allergens: {
          gluten,
          sesameSeeds,
          molluscs,
          fish,
          soybeans,
          peanuts,
          milk,
          sulphurDioxideAndSulphites,
          crustaceans,
          eggs,
          lupin,
          nuts,
          mustard,
          celery,
        },
      });
    }
  }

  render() {
    const { classes, loading } = this.props;
    const {
      name, batchNumber, description, allergens, expiryDate,
    } = this.state;
    const {
      gluten, sesameSeeds, molluscs, fish, soybeans,
      peanuts, milk, sulphurDioxideAndSulphites, crustaceans,
      eggs, lupin, nuts, mustard, celery,
    } = allergens;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Capture Reheating Temperature</h4>
              </CardHeader>
              <CardBody>
                {!loading && (
                <div><CustomInput
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
                  <FormControl fullWidth>
                    <Datetime
                      value={moment.unix(expiryDate)}
                      dateFormat="DD/MM/YYYY"
                      id="expiryDate"
                      onChange={e => this.updateExpiryDate(e)}
                      timeFormat={false}
                      inputProps={{ placeholder: 'Expiry Date', disabled: true }}
                    />
                  </FormControl>
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
                </div>
                )}
                <LoadingTable visible={loading} color="red" />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Update.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
