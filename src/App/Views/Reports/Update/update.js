import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignatureCanvas from 'react-signature-canvas';
import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';

import FormControl from '@material-ui/core/FormControl';

import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import GridContainer from '../../../Components/Grid/GridContainer';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import CardIcon from '../../../Components/Card/CardIcon';
import NotFound from '../../../Components/NotFound';
import ImageUpload from '../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../Components/CustomInput';
import Button from '../../../Components/CustomButtons';

import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';

import LoadingTable from '../../../Components/Loading/LoadingTable';

class Update extends Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        user, reportType, file,
        signature, comments, createdAt,
      } = item;
      this.state = {
        user,
        reportType,
        file,
        comments,
        signature,
        createdAt,
      };
    } else {
      this.state = {
        user: {},
        reportType: '',
        file: '',
        comments: '',
        signature: '',
        createdAt: 0,
      };
    }
  }

  componentDidMount() {
    const { signature } = this.state;
    if (signature) this.sigCanvas.fromDataURL(signature);
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating, loading } = nextProps;
    if (item && !updating && !loading) {
      const {
        user, reportType, file,
        signature, comments, createdAt,
      } = item;
      this.setState({
        user,
        reportType,
        file,
        comments,
        signature,
        createdAt,
      });
    }
  }

  componentDidUpdate() {
    const { signature } = this.state;
    if (signature) this.sigCanvas.fromDataURL(signature);
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  update() {
    const {
      loading, updating, updateReport,
    } = this.props;
    if (loading || updating) return false;
    return updateReport(this.state);
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/reports');
  }

  render() {
    const {
      classes, loading,
      updating, item,
    } = this.props;
    if (!item && !loading) return (<NotFound text="Item Not Found" />);
    const {
      reportType, comments, user,
    } = this.state;
    const { firstName, lastName } = user;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
              </CardHeader>
              <CardBody>
                {!loading && (
                <div>
                  <CustomInput
                    labelText="Report Type"
                    id="reportType"
                    value={reportType}
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ reportType: 'text' }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    value={`${firstName} ${lastName}`}
                    labelText="User"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ disabled: true }}
                  />
                  <ImageUpload
                    avatar
                    addButtonProps={{ color: 'rose', round: true }}
                    changeButtonProps={{ color: 'rose', round: true }}
                    removeButtonProps={{ color: 'danger', round: true }}
                  />
                  <CustomInput
                    value={comments}
                    labelText="Comments"
                    id="comments"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ multiline: true, rows: 3 }}
                    onChange={e => this.updateValue(e)}
                  />
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <h4 className={classes.cardIconTitle}>Signature</h4>
                    <SignatureCanvas
                      ref={(ref) => { this.sigCanvas = ref; }}
                      backgroundColor="#ECECEC"
                      penColor="black"
                      clearOnResize={false}
                    />
                  </FormControl>
                  <Button loading={updating} onClick={() => this.update()} color="rose" className={classes.updateProfileButton}>
                    Save
                  </Button>
                  <Button loading={false} onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                    Cancel
                  </Button>
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
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  updating: PropTypes.bool.isRequired,
  updateReport: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
