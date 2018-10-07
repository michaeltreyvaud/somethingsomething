import React from 'react';

// @material-ui/core components
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
      checked: [24, 22],
      selectedValue: null,
      selectedEnabled: 'b',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }

  handleChange(event) {
    this.setState({ selectedValue: event.target.value });
  }

  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/management/suppliers');
  }

  render() {
    const { classes, loading } = this.props;
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
                    id="supplierName"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'text' }}
                  />
                  <CustomInput
                    labelText="Address"
                    id="address"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ multiline: true, rows: 3 }}
                  />
                  <CustomInput
                    labelText="Phone No."
                    id="phoneNo"
                    formControlProps={{ fullWidth: true }}
                  />
                  <CustomInput
                    labelText="Email"
                    id="emailAddress"
                    formControlProps={{ fullWidth: true }}
                  />
                  <CustomInput
                    labelText="Technical Contact"
                    id="techContact"
                    formControlProps={{ fullWidth: true }}
                  />
                  <CustomInput
                    labelText="Sales Contact"
                    id="salesContact"
                    formControlProps={{ fullWidth: true }}
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
                              tabIndex={-1}
                              onClick={() => this.handleToggle(21)}
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
                              tabIndex={-1}
                              onClick={() => this.handleToggle(21)}
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
                              tabIndex={-1}
                              onClick={() => this.handleToggle(21)}
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
                              tabIndex={-1}
                              onClick={() => this.handleToggle(21)}
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
                              tabIndex={-1}
                              onClick={() => this.handleToggle(21)}
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
                              tabIndex={-1}
                              onClick={() => this.handleToggle(21)}
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

export default withStyles(regularFormsStyle)(Create);
