import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import MailOutline from '@material-ui/icons/MailOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';

import regularFormsStyle from '../../../../Assets/Jss/regularFormsStyle';
import GridContainer from '../../../../Components/Grid/GridContainer';
import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import CardBody from '../../../../Components/Card/CardBody';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardIcon from '../../../../Components/Card/CardIcon';
import Button from '../../../../Components/CustomButtons';
import CustomInput from '../../../../Components/CustomInput';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createSupplier, loading } = this.props;
    if (loading) return false;
    return createSupplier(this.state);
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  updateQuestion(e) {
    const { target } = e;
    const { questions } = this.state;
    questions[target.id] = !(target.value === 'true');
    this.setState({
      questions,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/management/suppliers');
  }

  render() {
    const { classes, loading } = this.props;
    const { questions } = this.state;
    const {
      q1, q2, q3,
      q4, q5, q6,
    } = questions;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <MailOutline />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Stacked Form</h4>
              </CardHeader>
              <CardBody>
                <div>
                  <CustomInput
                    labelText="Supplier Name"
                    id="name"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'text' }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Address"
                    id="address"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ multiline: true, rows: 3 }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Phone No."
                    id="phoneNo"
                    formControlProps={{ fullWidth: true }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{ fullWidth: true }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Technical Contact"
                    id="techContact"
                    formControlProps={{ fullWidth: true }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    labelText="Sales Contact"
                    id="salesContact"
                    formControlProps={{ fullWidth: true }}
                    onChange={e => this.updateValue(e)}
                  />
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={`${classes.labelHorizontal} ${classes.labelHorizontalRadioCheckbox}`}>
                        <b>Does the Company operate a HACCP/Risk Management System?</b>
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={q1}
                              id="q1"
                              value={q1}
                              onClick={e => this.updateQuestion(e)}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{ checked: classes.checked }}
                            />)}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={`${classes.labelHorizontal} ${classes.labelHorizontalRadioCheckbox}`}>
                        <b>Does the Company have a Product Recall System?</b>
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={q2}
                              id="q2"
                              value={q2}
                              onClick={e => this.updateQuestion(e)}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{ checked: classes.checked }}
                            />)}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={`${classes.labelHorizontal} ${classes.labelHorizontalRadioCheckbox}`}>
                        <b>Does the Company operate a Quality Management System?</b>
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={q3}
                              id="q3"
                              value={q3}
                              onClick={e => this.updateQuestion(e)}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{ checked: classes.checked }}
                            />)}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={`${classes.labelHorizontal} ${classes.labelHorizontalRadioCheckbox}`}>
                        <b>If yes is it documented ?</b>
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={q4}
                              id="q4"
                              value={q4}
                              onClick={e => this.updateQuestion(e)}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{ checked: classes.checked }}
                            />)}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={`${classes.labelHorizontal} ${classes.labelHorizontalRadioCheckbox}`}>
                        <b>If yes is it certified ?</b>
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={q5}
                              id="q5"
                              value={q5}
                              onClick={e => this.updateQuestion(e)}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{ checked: classes.checked }}
                            />)}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <FormLabel className={`${classes.labelHorizontal} ${classes.labelHorizontalRadioCheckbox}`}>
                        <b>Does the Company have a 3rd party Audit Accreditation? (EFSIS or other-please indicate)?</b>
                      </FormLabel>
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
                        <FormControlLabel
                          control={(
                            <Checkbox
                              checked={q6}
                              id="q6"
                              value={q6}
                              onClick={e => this.updateQuestion(e)}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{ checked: classes.checked }}
                            />)}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                  <Button loading={loading} onClick={() => this.create()} color="rose" className={classes.updateProfileButton}>
                    Save
                  </Button>
                  <Button onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Create.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  createSupplier: PropTypes.func.isRequired,
};

export default withStyles(regularFormsStyle)(Create);
