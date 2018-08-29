import React from 'react';
import Datetime from 'react-datetime';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from "@material-ui/core/Select";
import CustomInput from '../../../Components/CustomInput';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
// @material-ui/icons
import Today from "@material-ui/icons/Today";
// core components
import GridItem from '../../../Components/Grid/GridItem';
import Button from '../../../Components/CustomButtons';
import FormControl from '@material-ui/core/FormControl';
import Card from '../../../Components/Card/Card';
import GridContainer from '../../../Components/Grid/GridContainer';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import CardIcon from '../../../Components/Card/CardIcon';
import InputLabel from '@material-ui/core/InputLabel';
import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';

class FastCoolingCreate extends React.Component {
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
        <Button color="info">Cancel</Button>        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Capture Cooling Temperature</h4>
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
                    Choose Food Item
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
                    Fridge 1
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="3"
                  >
                    Fridge 2
                  </MenuItem>
                  </Select>
                </FormControl>
                  <CustomInput
                    success={this.state.numberState === "success"}
                    error={this.state.numberState === "error"}
                    labelText="Capture Temperature Value"
                    id="number"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event =>
                        this.change(event, "number", "number"),
                      type: "number"
                    }}
                  />
                    <CustomInput
                    id="disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "Bob Bobson",
                      disabled: true
                    }}
                  />
                  <InputLabel className={classes.label}>
                  Capture Datetime
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "08/01/2018 12:00 AM", disabled: true } }
                    />
                  </FormControl>
                  <ImageUpload
                      addButtonProps={{
                        color: "rose",
                        round: true
                      }}
                      changeButtonProps={{
                        color: "rose",
                        round: true
                      }}
                      removeButtonProps={{
                        color: "danger",
                        round: true
                      }}
                    />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <Card>
              <CardBody>
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
                <InputLabel style={{ color: '#AAAAAA' }}>Signature</InputLabel>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(extendedFormsStyle)(FastCoolingCreate);