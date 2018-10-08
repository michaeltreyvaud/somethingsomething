import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
import CustomInput from '../../../../Components/CustomInput';
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

class OilTaskCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      numberState: "",
    };
    this.typeClick = this.typeClick.bind(this);
  }

  // function that verifies if value contains only numbers
  verifyNumber(value) {
    var numberRex = new RegExp("^-?\\d+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  }  

  typeClick() {
    if (this.state.numberState === "") {
      this.setState({ numberState: "error" });
    }
  }
  
  change(event, stateName, type, stateNameEqualTo, maxValue) {
    switch (type) {
      case "number":
        if (this.verifyNumber(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      }
    }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button color="rose">Save</Button>
        <Button color="info" className={classes.marginRight} onClick={() => this.props.history.push('/dashboard/oil/task')}>Cancel</Button>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
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
                  Location
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={this.state.simpleSelect}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: 'simpleSelect',
                    id: 'simple-select',
                  }}
                >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                  >
                  Location 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                  Location 2
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Location 3
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
                  Item
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={this.state.simpleSelect}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: 'simpleSelect',
                    id: 'simple-select',
                  }}
                >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                  >
                  Item 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                  Item 2
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Item 3
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
                  Team
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={this.state.simpleSelect}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: 'simpleSelect',
                    id: 'simple-select',
                  }}
                >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                  >
                  Team 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                  Team 2
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Team 3
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
                  User
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={this.state.simpleSelect}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: 'simpleSelect',
                    id: 'simple-select',
                  }}
                >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                  >
                  User 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                  User 2
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  User 3
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
                  Day
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={this.state.simpleSelect}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: 'simpleSelect',
                    id: 'simple-select',
                  }}
                >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                  >
                  Monday
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                  Tuesday
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Wednesday
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Thursday
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Friday
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Saturday
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Sunday
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
                  Time
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={this.state.simpleSelect}
                  onChange={this.handleSimple}
                  inputProps={{
                    name: 'simpleSelect',
                    id: 'simple-select',
                  }}
                >
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                  >
                  Morning
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="2"
                  >
                  Afternoon
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected,
                    }}
                    value="3"
                  >
                  Evening
                  </MenuItem>
                </Select>
              </FormControl>
              <InputLabel style={{ color: '#AAAAAA' }}>Comments</InputLabel>
                <CustomInput
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
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(extendedFormsStyle)(OilTaskCreate);