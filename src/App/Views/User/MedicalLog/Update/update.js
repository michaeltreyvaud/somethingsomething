import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import Datetime from 'react-datetime';
import moment from 'moment';

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

import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';

import LoadingTable from '../../../../Components/Loading/LoadingTable';

class Update extends Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        fromDate, toDate, illnessType,
        details, certification, createdAt,
      } = item;
      this.state = {
        fromDate,
        toDate,
        illnessType,
        details,
        certification,
        createdAt,
      };
    } else {
      this.state = {
        fromDate: '',
        toDate: '',
        illnessType: '',
        details: '',
        certification: 'https://TODO.com',
        createdAt: '',
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating, loading } = nextProps;
    if (item && !updating && !loading) {
      const {
        fromDate, toDate, illnessType,
        details, certification, createdAt,
      } = item;
      this.setState({
        fromDate,
        toDate,
        illnessType,
        details,
        certification,
        createdAt,
      });
    }
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  updateFromDate(date) {
    this.setState({
      fromDate: date.valueOf(),
    });
  }

  updateToDate(date) {
    this.setState({
      toDate: date.valueOf(),
    });
  }

  update() {
    const { loading, updating, updateMedicalLog } = this.props;
    if (loading || updating) return false;
    return updateMedicalLog(this.state);
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/user/medical');
  }

  render() {
    const {
      classes, loading, item, updating,
    } = this.props;
    if (!item && !loading) return (<NotFound text="Item Not Found" />);
    const {
      fromDate, toDate, illnessType, details,
    } = this.state;
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
                    <FormControl fullWidth>
                      <Datetime
                        value={moment(fromDate)}
                        dateFormat="DD/MM/YYYY"
                        id="fromDate"
                        onChange={e => this.updateFromDate(e)}
                        timeFormat={false}
                        inputProps={{ placeholder: 'From Date' }}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Datetime
                        value={moment(toDate)}
                        dateFormat="DD/MM/YYYY"
                        id="toDate"
                        onChange={e => this.updateToDate(e)}
                        timeFormat={false}
                        inputProps={{ placeholder: 'To Date' }}
                      />
                    </FormControl>
                    <CustomInput
                      value={illnessType}
                      id="illnessType"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{ placeholder: 'Type of Illness' }}
                      onChange={e => this.updateValue(e)}
                    />
                    <ImageUpload
                      avatar
                      addButtonProps={{ color: 'rose', round: true }}
                      changeButtonProps={{ color: 'rose', round: true }}
                      removeButtonProps={{ color: 'danger', round: true }}
                    />
                    <CustomInput
                      value={details}
                      labelText="Comments"
                      id="details"
                      formControlProps={{ fullWidth: true }}
                      inputProps={{ multiline: true, rows: 3 }}
                      onChange={e => this.updateValue(e)}
                    />
                    <Button loading={updating} onClick={() => this.update()} color="rose" className={classes.updateProfileButton}>
                      Save
                    </Button>
                    <Button onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
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
  updateMedicalLog: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
