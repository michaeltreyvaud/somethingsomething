import React from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';

import Check from '@material-ui/icons/Check';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Today from '@material-ui/icons/Today';

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

import LoadingTable from '../../../../Components/Loading/LoadingTable';

class Update extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props;
    if (item) {
      const {
        areaName, createdAt, areaItem
      } = item;
      this.state = {
        createdAt,
        areaName,
        areaItem,
      };
    } else {
      this.state = {
        createdAt: 0,
        areaName: '',
        areaItem: '',
      };
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, updating } = nextProps;
    if (item && !updating) {
      const {
        areaName, areaItem, createdAt,
      } = item;
      this.setState({
        areaName,
        createdAt,
        areaItem,
      });
    }
  }

  updateValue(e) {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  save() {
    const {
      loading, updating, duplicating, updateCleaningItem,
    } = this.props;
    if (loading || updating || duplicating) return false;
    return updateCleaningItem(this.state);
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/cleaning/item');
  }

  render() {
    const {
      classes, loading, item,
      updating, duplicating,
    } = this.props;
    if (!item && !loading) return (<NotFound text="Cleaning Item Not Found" />);
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
                {!loading && (
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
                    <Button loading={updating} onClick={() => this.save()} color="rose" className={classes.updateProfileButton}>
                      Save
                    </Button>
                    <Button loading={false} onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                      Back
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
  updateCleaningItem: PropTypes.func.isRequired,
  duplicating: PropTypes.bool.isRequired,
  createCleaningItem: PropTypes.func.isRequired,
};

export default withStyles(extendedFormsStyle)(Update);
