import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Assignment from '@material-ui/icons/Assignment';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import GridContainer from '../../../Components/Grid/GridContainer';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import CardIcon from '../../../Components/Card/CardIcon';

import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';
import Button from '../../../Components/CustomButtons';

import ReportTypes from './RecordTypes';

class Create extends Component {
  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) this.back();
  }

  componentWillUnmount() {
    const { resetRecord } = this.props;
    resetRecord();
  }

  setRecordValue(e) {
    const { resetRecord, setRecordValue } = this.props;
    const { target } = e;
    const { name, value } = target;
    resetRecord();
    setRecordValue(name, value);
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/records');
  }

  create() {
    const { create, loading, record } = this.props;
    if (loading) return false;
    return create(record);
  }

  renderRecordTypes() {
    const { recordTypes: items, classes } = this.props;
    return items.map((item, index) => (
      <MenuItem
        key={`${item}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="type"
        value={item.type}
      >
        {item.displayName}
      </MenuItem>));
  }

  renderRecordType() {
    const { record } = this.props;
    const { type } = record;
    if (!type) return null;
    return React.createElement(ReportTypes[type], this.props, null);
  }

  render() {
    const { classes, loading, record } = this.props;
    const { type } = record;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <FormControl fullWidth className={classes.selectFormControl}>
                <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                  Record Type
                </InputLabel>
                <Select
                  MenuProps={{ className: classes.selectMenu }}
                  classes={{ select: classes.select }}
                  onChange={e => this.setRecordValue(e)}
                  value={type}
                  inputProps={{ name: 'type' }}
                >
                  {this.renderRecordTypes()}
                </Select>
              </FormControl>
              {this.renderRecordType()}
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
    );
  }
}

Create.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  create: PropTypes.func.isRequired,
  recordTypes: PropTypes.array.isRequired,
  foodItems: PropTypes.array.isRequired,
  suppliers: PropTypes.array.isRequired,
  refrigerationTypes: PropTypes.array.isRequired,
  fridgeItems: PropTypes.array.isRequired,
  freezerItems: PropTypes.array.isRequired,
  chillDisplayItems: PropTypes.array.isRequired,
  record: PropTypes.object.isRequired,
  setRecordValue: PropTypes.func.isRequired,
  resetRecord: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
