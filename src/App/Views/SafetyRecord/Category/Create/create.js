import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';

import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';

import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';

import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createSafetyRecordCategory, loading } = this.props;
    if (loading) return false;
    return createSafetyRecordCategory(this.state);
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/safety/category');
  }

  render() {
    const { classes, loading } = this.props;
    const { name } = this.state;
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
                    labelText="Category Name"
                    id="name"
                    value={name}
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'text' }}
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
  createSafetyRecordCategory: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
