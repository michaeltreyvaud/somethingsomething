import React from 'react';
import Datetime from 'react-datetime';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
import CustomInput from '../../../../Components/CustomInput';
import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Today from "@material-ui/icons/Today";
// core components
import GridItem from '../../../../Components/Grid/GridItem';
import Button from '../../../../Components/CustomButtons';
import FormControl from '@material-ui/core/FormControl';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';
import InputLabel from '@material-ui/core/InputLabel';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class SafetyTaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
    };
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
      noticeModal: false,
    });
  }  

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button color="rose">Save</Button>
        <Button color="info" onClick={() => this.props.history.push('/dashboard/safety/task')}>Cancel</Button>        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Create Task</h4>
              </CardHeader>
              <CardBody>
              <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                >
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    Team
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="2"
                  >
                    Team 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="3"
                  >
                    Team 2
                  </MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                >
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    Operator
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="2"
                  >
                    Operator 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="3"
                  >
                    Operator 2
                  </MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                >
                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    Category
                  </InputLabel>
                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={this.state.simpleSelect}
                    onChange={this.handleSimple}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}
                  >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="2"
                  >
                    Category 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="3"
                  >
                    Category 2
                  </MenuItem>
                  </Select>
                </FormControl>                
                <CustomInput
                    labelText="Task Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  
                  <CustomInput
                    labelText="Description"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3,
                    }}
                  />                  
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <Card>
              <CardBody>
              <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
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
                    />)}
                  classes={{
                    label: classes.label,
                  }}
                  label="After Use"
                />
              </div>
              <FormControl fullWidth>
                <Datetime
                  timeFormat={false}
                  inputProps={{ placeholder: "From Date" }}
                />
              </FormControl>
              <div className={classes.inlineChecks}>
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => this.handleToggle(10)}
                      checkedIcon={
                        <Check className={classes.checkedIcon} />
                      }
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked
                      }}
                    />
                  }
                  classes={{
                    label: classes.label
                  }}
                  label="Morning"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => this.handleToggle(11)}
                      checkedIcon={
                        <Check className={classes.checkedIcon} />
                      }
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked
                      }}
                    />
                  }
                  classes={{
                    label: classes.label
                  }}
                  label="Afternoon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => this.handleToggle(12)}
                      checkedIcon={
                        <Check className={classes.checkedIcon} />
                      }
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked
                      }}
                    />
                  }
                  classes={{
                    label: classes.label
                  }}
                  label="Evening"
                />
              </div>
              <div className={`${classes.checkboxAndRadio} ${classes.checkboxAndRadioHorizontal}`}>
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
                    />)}
                  classes={{
                    label: classes.label,
                  }}
                  label="Repeat"
                />
              </div>              
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(extendedFormsStyle)(SafetyTaskCreate);