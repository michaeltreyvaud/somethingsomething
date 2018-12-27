import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from '@material-ui/icons/Assignment';
import { withRouter } from 'react-router';
import moment from 'moment';

import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Card from '../../Components/Card/Card';
import CardBody from '../../Components/Card/CardBody';
import CardHeader from '../../Components/Card/CardHeader';
import CardIcon from '../../Components/Card/CardIcon';
import Button from '../../Components/CustomButtons';
import Table from '../../Components/Table';
import LoadingTable from '../../Components/Loading/LoadingTable';

//import FoodItemDelete from './Delete/delete.container';

import style from '../../Assets/Jss/extendedTablesStyle';

const FoodItemDelete = () => (<h1>TODO</h1>);

const initialState = {
  displayDeleteModal: false,
  selectedDeleteItem: {},
};

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const { list, recordType } = this.props;
    list(recordType);
  }

  showDeleteModal(createdAt, index) {
    this.setState({
      displayDeleteModal: true,
      selectedDeleteItem: {
        createdAt,
        index,
      },
    });
  }

  hideDeleteModal() {
    this.setState({
      displayDeleteModal: false,
      selectedDeleteItem: {},
    });
  }

  renderRecordTypes() {
    const { recordTypes: items, classes } = this.props;
    return items.map((item, index) => (
      <MenuItem
        key={`${item}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="recordType"
        value={item.type}
      >
        {item.displayName}
      </MenuItem>));
  }

  render() {
    const {
      classes, items, loading, history,
      recordType, setRecordType,
    } = this.props;
    const {
      displayDeleteModal, selectedDeleteItem,
    } = this.state;
    const simpleButtons = (item, index) => [
      { color: 'warning', icon: Print, tooltip: 'Print' },
      { color: 'success', icon: Open, tooltip: 'Edit' },
      { color: 'danger', icon: Delete, tooltip: 'Delete' },
    ].map((prop, key) => {
      let onClick;
      switch (key) {
        case 1: {
          onClick = () => history.push(`/dashboard/records/${item.createdAt}`);
          break;
        }
        case 2: {
          onClick = () => this.showDeleteModal(item.createdAt, index);
          break;
        }
        default: {
          onClick = () => {};
        }
      }
      return (
        <Tooltip
          id="tooltip-top"
          title={prop.tooltip}
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color={prop.color}
            className={classes.actionButton}
            key={key}
            onClick={onClick}
          >
            <prop.icon className={classes.icon} />
          </Button>
        </Tooltip>
      );
    });
    const tableData = items.map((_item, index) => {
      const item = [_item.name, _item.description, moment(_item.expiryDate).format('DD/MM/YYYY'),
        moment(_item.createdAt).format('DD/MM/YYYY'), _item.batchNumber, simpleButtons(_item, index)];
      return item;
    });
    return (
      <div>
        <FoodItemDelete
          item={selectedDeleteItem}
          visible={displayDeleteModal}
          classes={classes}
          close={() => this.hideDeleteModal()}
        />
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
                <Button
                  color="info"
                  className={classes.marginRight}
                  onClick={() => history.push('/dashboard/records/create')}
                >
                  Create
                </Button>
              </CardHeader>
              <CardBody>
                <FormControl fullWidth className={classes.selectFormControl}>
                  <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                    Record Type
                  </InputLabel>
                  <Select
                    MenuProps={{ className: classes.selectMenu }}
                    classes={{ select: classes.select }}
                    value={recordType}
                    onChange={e => setRecordType(e.target.value)}
                  >
                    {this.renderRecordTypes()}
                  </Select>
                </FormControl>
                {!loading && items && items.length > 0 && (
                <Table
                  hover
                  tableHead={[
                    'Name',
                    'Description',
                    'Expiry Date',
                    'Created',
                    'Batch Number',
                  ]}
                  tableData={tableData}
                  customCellClasses={[
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customClassesForCells={[0, 1, 2, 3, 4, 5]}
                  customHeadCellClasses={[
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customHeadClassesForCells={[0, 1, 2, 3, 4, 5]}
                />
                )}
                {!loading && items && items.length === 0 && (
                  <div style={{
                    display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center',
                  }}
                  >
                    <h2><small>No Items to display</small></h2>
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

Records.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  recordType: PropTypes.string.isRequired,
  recordTypes: PropTypes.array.isRequired,
  setRecordType: PropTypes.func.isRequired,
  list: PropTypes.func.isRequired,
};

export default withRouter(withStyles(style)(Records));
