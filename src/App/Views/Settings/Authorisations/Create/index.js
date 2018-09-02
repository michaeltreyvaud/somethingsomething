import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import GridContainer from '../../../../Components/Grid/GridContainer';
import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import CardBody from '../../../../Components/Card/CardBody';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardIcon from '../../../../Components/Card/CardIcon';
import Button from '../../../../Components/CustomButtons';
import NavPills from '../../../../Components/NavPills';
import CustomInput from '../../../../Components/CustomInput';
import { cardTitle, primaryColor } from '../../../../Assets/Jss/material-dashboard-pro-react';

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: '#3C4858',
    textDecoration: 'none',
    textAlign: 'center',
  },
  cardCategory: {
    margin: '0',
    color: '#999999',
  },
  label: {
    cursor: 'pointer',
    paddingLeft: '0',
    color: '#AAAAAA',
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: '400',
    display: 'inline-flex',
    transition: '0.3s ease all',
  },
  labelHorizontal: {
    color: 'rgba(0, 0, 0, 0.26)',
    cursor: 'pointer',
    display: 'inline-flex',
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: '400',
    paddingTop: '39px',
    marginRight: '0',
    '@media (min-width: 992px)': {
      float: 'right',
    },
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: '22px',
  },
  checkboxAndRadio: {
    position: 'relative',
    display: 'block',
    marginTop: '10px',
    marginBottom: '10px',
  },
  checkboxAndRadioHorizontal: {
    position: 'relative',
    display: 'block',
    '&:first-child': {
      marginTop: '10px',
    },
    '&:not(:first-child)': {
      marginTop: '-14px',
    },
    marginTop: '0',
    marginBottom: '0',
  },
  checked: {
    color: `${primaryColor}!important`,
  },
  checkedIcon: {
    width: '20px',
    height: '20px',
    border: '1px solid rgba(0, 0, 0, .54)',
    borderRadius: '3px',
  },
  uncheckedIcon: {
    width: '0px',
    height: '0px',
    padding: '9px',
    border: '1px solid rgba(0, 0, 0, .54)',
    borderRadius: '3px',
  },
};

class AuthorisationsCreate extends React.Component {
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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button color="info" onClick={() => this.props.history.push('/dashboard/settings/authorisations/')}>
          Cancel
        </Button>
        <Button color="rose">Save</Button>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <NavPills
                  color="warning"
                  tabs={[
                    {
                      tabButton: 'Details',
                      tabContent: (
                        <form>
                          <CustomInput
                            labelText="Role"
                            id="role"
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
                                  onClick={() => this.handleToggle(21)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                    }
                                  icon={<Check className={classes.uncheckedIcon} />}
                                  classes={{
                                    checked: classes.checked,
                                  }}
                                />
                          )}
                              classes={{
                                label: classes.label,
                              }}
                              label="Admin"
                            />
                          </div>
                        </form>
                      ),
                    },
                    {
                      tabButton: 'Permissions',
                      tabContent: (

                        <NavPills
                          color="rose"
                          horizontal={{
                            tabsGrid: { xs: 12, sm: 12, md: 2 },
                            contentGrid: { xs: 12, sm: 12, md: 10 },
                          }}
                          tabs={[
                            {
                              tabButton: 'Company Profile',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                        Companys profile
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
)}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'User',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                        Authorisations
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
)}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    User Settings
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                        Authorisations
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Fridge Temperature',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                        Fridge item
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
)}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Fridge Log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Assign Fridge Temperature Tasks
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Freezer Temperature',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                        Freezer item
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
)}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Freezer Log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Assign Freezer Temperature Tasks
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Delivery Activity',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                        Delivery Supplier
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
)}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Delivery records
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Menus
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Oil Test',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                      Oil Area Item
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Oil test log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Plan
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Cleaning Activity',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Cleaning Location
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Cleaning Log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Plan
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Laboratory Activity',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Laboratory Log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Safety Datasheet',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Safety Datasheet
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Pest Management',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Pest Management
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Food item',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Food item
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Transport Location',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Transport Location
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Transport Log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                  )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Hot holding',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Hot holding log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Fast Cooling',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Fast Cooling Log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Service Temperature',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Service log
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                            {
                              tabButton: 'Check List',
                              tabContent: (
                                <GridContainer>
                                  <GridItem xs={12} sm={2}>
                                    <FormLabel
                                      className={
                                          `${classes.labelHorizontal
                                          } ${
                                            classes.labelHorizontalRadioCheckbox}`
                                        }
                                    >
                                    Custom Task
                                    </FormLabel>
                                  </GridItem>
                                  <GridItem xs={12} sm={2}>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Create"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="View"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Edit"
                                      />
                                    </div>
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
                                            onClick={() => this.handleToggle(21)}
                                            checkedIcon={
                                              <Check className={classes.checkedIcon} />
                                              }
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                              checked: classes.checked,
                                            }}
                                          />
                                    )}
                                        classes={{
                                          label: classes.label,
                                        }}
                                        label="Delete"
                                      />
                                    </div>
                                  </GridItem>
                                </GridContainer>
                              ),
                            },
                          ]}
                        />
                      ),
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(AuthorisationsCreate);
