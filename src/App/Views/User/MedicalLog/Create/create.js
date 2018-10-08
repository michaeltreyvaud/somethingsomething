import React from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Today from '@material-ui/icons/Today';
import FormControl from '@material-ui/core/FormControl';
import CustomInput from '../../../../Components/CustomInput';
import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';

import GridItem from '../../../../Components/Grid/GridItem';
import Button from '../../../../Components/CustomButtons';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: '',
      toDate: '',
      illnessType: '',
      certification: 'https://TODO.com',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createMedicalLog, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    return createMedicalLog(state);
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/user/medical');
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

  render() {
    const { classes, loading } = this.props;
    const {
      fromDate, toDate,
      illnessType, certification,
      details,
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
                <Button loading={loading} onClick={() => this.create()} color="rose" className={classes.updateProfileButton}>
                  Save
                </Button>
                <Button onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                  Cancel
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Create.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  createMedicalLog: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
