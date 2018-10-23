import React from 'react';
import Datetime from 'react-datetime';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SignatureCanvas from 'react-signature-canvas';
import CustomInput from '../../../../Components/CustomInput';
import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';
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

class DeliveryRecordCreate extends React.Component {
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
        <Button color="danger">Reject</Button>
        <Button color="success">Accept</Button>
        <Button color="info" onClick={() => this.props.history.push('/dashboard/fridge/log')}>
          Cancel
        </Button>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
              </CardHeader>
              <CardBody>
                  <CustomInput
                    id="operator"
                    value="operator"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                  <CustomInput
                    id="supplierList"
                    value="Supplier List Drop Down"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                    <CustomInput
                    id="orderNumber"
                    value="Delivery/order number"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                  <InputLabel className={classes.label}>
                  Capture Datetime
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      value="Date"
                      inputProps={{ disabled: true } }
                    />
                  </FormControl>
                  <CustomInput
                    success={this.state.numberState === "success"}
                    error={this.state.numberState === "error"}
                    labelText="Temperature"
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
              <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel
                      className={
                        classes.labelHorizontal +
                        " " +
                        classes.labelHorizontalRadioCheckbox
                      }
                    >
                      Delivery Type
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={10}>
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
                        label="Fresh Goods"
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
                        label="Frozen Goods"
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
                        label="Dry Goods"
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
                        label="Miscellaneous"
                      />
                    </div>
                  </GridItem>
                </GridContainer>                
              <GridContainer>
              <GridItem xs={12} sm={2}>
                    <FormLabel
                      className={
                        classes.labelHorizontal +
                        " " +
                        classes.labelHorizontalRadioCheckbox
                      }
                    >
                      Conditions
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={10}>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(3)}
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
                        label="Temperature Acceptance"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(3)}
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
                        label="Condition Of Delivery"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(3)}
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
                        label="Use By And Best Before Date"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(3)}
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
                        label="Aspect Of The Products"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            tabIndex={-1}
                            onClick={() => this.handleToggle(3)}
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
                        label="Quality Of The Products"
                      />
                    </div>                    
                  </GridItem>
                  </GridContainer>
                <InputLabel style={{ color: '#AAAAAA' }}>Signature</InputLabel>
                <SignatureCanvas
                  ref={(ref) => { this.sigCanvas = ref; }}
                  backgroundColor="#ECECEC"
                  penColor="black"
                  canvasProps={{ width: 740, height: 320 }}
                />
                <InputLabel style={{ color: '#AAAAAA' }}>Comments</InputLabel>
                  <CustomInput
                  id="comments"
                  //value={comments}
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

export default withStyles(extendedFormsStyle)(DeliveryRecordCreate);