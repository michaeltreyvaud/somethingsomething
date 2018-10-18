import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';
import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';

import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';

import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaName: '',
      areaItem: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createCleaningItem, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    return createCleaningItem(state);
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/cleaning/item');
  }

  render() {
    const { classes, loading } = this.props;
    const {
      areaName, areaItem
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
                <div>
                  <CustomInput
                    value={areaName}
                    labelText="Name"
                    id="areaName"
                    formControlProps={{ fullWidth: true }}
                    onChange={e => this.updateValue(e)}
                  />
                  <CustomInput
                    value={areaItem}
                    labelText="areaItem"
                    id="areaItem"
                    formControlProps={{ fullWidth: true }}
                    onChange={e => this.updateValue(e)}
                  />
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

Create.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  createCleaningItem: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
