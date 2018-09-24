import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MailOutline from '@material-ui/icons/MailOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '../../../../Components/CustomButtons';
import CustomInput from '../../../../Components/CustomInput';
import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';
import NotFound from '../../../../Components/NotFound';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

import LoadingTable from '../../../../Components/Loading/LoadingTable';

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        id, name, address, email, phoneNo, questions, salesContact, techContact,
      } = item;
      const {
        q1, q2, q3, q4, q5, q6
      } = questions;
      this.state = {
        id,
        name,        
        address, 
        email,
        phoneNo, 
        questions: {
          q1,
          q2,
          q3,
          q4,
          q5,
          q6,
        },
        salesContact,
        techContact,
      };
    } else {
      this.state = {
        name: '',
        address: '',
        email: '',
        phoneNo: '',
        questions: {
          q1: false,
          q2: false,
          q3: false,
          q4: false,
          q5: false,
          q6: false,
        },
        salesContact: '',
        techContact: '',
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating } = nextProps;
    if (item && !updating) {
      const {
        id, name, address, email, phoneNo, questions, salesContact, techContact,
      } = item;
      const {
        q1, q2, q3, q4, q5, q6
      } = questions;
      this.setState({
        id,
        name,
        address,
        email,
        phoneNo,
        questions: {
          q1,
          q2,
          q3,
          q4,
          q5,
          q6,
        },
        salesContact,
        techContact,
      });
    }
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  updateQuestions(e) {
    const { target } = e;
    const { questions } = this.state;
    questions[target.id] = !(target.value === 'true');
    this.setState({
      questions,
    });
  }  

  updateSupplier() {
    const { loading, updating, updateSupplier } = this.props;
    if (loading || updating) return false;
    return updateSupplier(this.state);
  }

  render() {
    const {
      classes, loading, updating, item,
    } = this.props;
    if (!item && !loading) return (<NotFound text="Supplier Not Found" />);
    const {
      name, address, email, phoneNo, questions, salesContact, techContact,
    } = this.state;
    const {
      q1, q2, q3, q4, q5, q6
    } = questions;
    return (
      <div>
      <Button loading={updating} onClick={() => this.updateSupplier()} color="rose" className={classes.updateProfileButton}>
              Save
          </Button>
      <Button color="info" onClick={() => this.props.history.push('/dashboard/management/suppliers')}>
        Cancel
      </Button>      
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <MailOutline />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Stacked Form</h4>
            </CardHeader>
            <CardBody>
              <CustomInput
                labelText="Supplier Name"
                id="name"
                value={name}
                onChange={e => this.updateValue(e)}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: 'text',
                }}
              />
              <CustomInput
                labelText="Address"
                id="address"
                value={address}
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  multiline: true,
                  rows: 3,
                }}
                onChange={e => this.updateValue(e)}
              />
              <CustomInput
                labelText="Phone No."
                id="phoneNo"
                value={phoneNo}
                formControlProps={{
                  fullWidth: true,
                }}
                onChange={e => this.updateValue(e)}
              />
              <CustomInput
                labelText="Email"
                id="email"
                onChange={e => this.updateValue(e)}
                value={email}
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                labelText="Technical Contact"
                id="techContact"
                value={techContact}
                formControlProps={{
                  fullWidth: true,
                }}
                onChange={e => this.updateValue(e)}
              />
              <CustomInput
                labelText="Sales Contact"
                id="salesContact"
                value={salesContact}
                formControlProps={{
                  fullWidth: true,
                }}
                onChange={e => this.updateValue(e)}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <FormLabel
                      className={
                            `${classes.labelHorizontal
                            } ${
                              classes.labelHorizontalRadioCheckbox}`
                          }
                    >
                      <b>Does the Company operate a HACCP/Risk Management System?</b>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
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
                            checked={q1}
                            id="q1"
                            value={q1}
                            onClick={(e) => this.updateQuestions(e)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                          }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                            }}
                          />)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <FormLabel
                      className={
                            `${classes.labelHorizontal
                            } ${
                              classes.labelHorizontalRadioCheckbox}`
                          }
                    >
                      <b>Does the Company have a Product Recall System?</b>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
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
                            checked={q2}
                            id="q2"
                            value={q2}
                            onClick={(e) => this.updateQuestions(e)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                          }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                            }}
                          />)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <FormLabel
                      className={
                            `${classes.labelHorizontal
                            } ${
                              classes.labelHorizontalRadioCheckbox}`
                          }
                    >
                      <b>Does the Company operate a Quality Management System?</b>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
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
                            checked={q3}
                            id="q3"
                            value={q3}                            
                            onClick={(e) => this.updateQuestions(e)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                          }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                            }}
                          />)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <FormLabel
                      className={
                            `${classes.labelHorizontal
                            } ${
                              classes.labelHorizontalRadioCheckbox}`
                          }
                    >
                      <b>If "yes" is it documented ?</b>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
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
                            checked={q4}
                            id="q4"
                            value={q4}
                            onClick={(e) => this.updateQuestions(e)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                          }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                            }}
                          />)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <FormLabel
                      className={
                            `${classes.labelHorizontal
                            } ${
                              classes.labelHorizontalRadioCheckbox}`
                          }
                    >
                      <b>If "yes" is it certified ?</b>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
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
                            checked={q5}
                            id="q5"
                            value={q5}
                            onClick={(e) => this.updateQuestions(e)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                          }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                            }}
                          />)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <FormLabel
                      className={
                            `${classes.labelHorizontal
                            } ${
                              classes.labelHorizontalRadioCheckbox}`
                          }
                    >
                      <b>Does the Company have a 3rd party Audit Accreditation? (EFSIS or other-please indicate)?</b>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
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
                            checked={q6}
                            id="q6"
                            value={q6}
                            onClick={(e) => this.updateQuestions(e)}
                            checkedIcon={
                              <Check className={classes.checkedIcon} />
                          }
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                              checked: classes.checked,
                            }}
                          />)}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
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
  updating: PropTypes.bool.isRequired,
  updateSupplier: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
