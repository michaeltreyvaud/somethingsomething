import React from 'react';
import Datetime from 'react-datetime';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
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
import NotFound from '../../../../Components/NotFound';

import LoadingTable from '../../../../Components/Loading/LoadingTable';

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        signature, image, comments, user, createdAt, freezerItem, id, temperature
      } = item;
      this.state = {
        signature,
        image,
        comments,
        user,
        createdAt,
        freezerItem,
        id,
        temperature,
      };
    } else {
      this.state = {
        signature: '',
        image: '',
        comments: '',
        user: '',
        createdAt: 0,
        freezerItem: '',
        id: '',
        temperature: 0,
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating } = nextProps;
    if (item && !updating) {
      const {
        signature, image, comments, user, createdAt, freezerItem, id, temperature
      } = item;
      this.setState({
        signature,
        image,
        comments,
        user,
        createdAt,
        freezerItem,
        id,
        temperature,
      });
    }
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
    const {
      classes, loading, item, updating,
    } = this.props;
    if (!item && !loading) return (<NotFound text="Freezer Log Not Found" />);
    const {
      signature, image, comments, user, createdAt, freezerItem, id, temperature
    } = this.state;
    return (
      <div>
        <Button color="rose">Clone</Button>
        <Button color="info" onClick={() => this.props.history.push('/dashboard/freezer/log')}>
          Cancel
        </Button>        
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Freezer Temperature</h4>
              </CardHeader>
              <CardBody>
                  <CustomInput
                    id="freezer"
                    value={freezerItem.displayName}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                  <CustomInput
                    id="temperature"
                    value={temperature}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                    <CustomInput
                    id="user"
                    value={`${user.firstName} ${user.lastName}`}
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
                      value={createdAt}
                      inputProps={{ disabled: true } }
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
                  id="comments"
                  value={comments}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 3,
                    disabled: true,
                  }}
                />
                <InputLabel style={{ color: '#AAAAAA' }}>Signature</InputLabel>
                <SignatureCanvas
                  ref={(ref) => { this.sigCanvas = ref; }}
                  backgroundColor="#ECECEC"
                  penColor="black"
                  canvasProps={{ width: 740, height: 320 }}
                />
                <CustomInput
                  id="signature"
                  value={signature}
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 3,
                    disabled: true,
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

export default withStyles(extendedFormsStyle)(Update);