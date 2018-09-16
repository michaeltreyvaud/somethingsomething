import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from '@material-ui/icons/Assignment';
import { withRouter } from 'react-router';
import moment from 'moment';

import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';

import GridContainer from '../../Components/Grid/GridContainer';
import GridItem from '../../Components/Grid/GridItem';
import Card from '../../Components/Card/Card';
import CardBody from '../../Components/Card/CardBody';
import CardHeader from '../../Components/Card/CardHeader';
import CardIcon from '../../Components/Card/CardIcon';
import Button from '../../Components/CustomButtons';
import Table from '../../Components/Table';
import LoadingTable from '../../Components/Loading/LoadingTable';

import FoodItemCreate from './Create/create.container';
import FoodItemDelete from './Delete/delete.container';

import style from '../../Assets/Jss/extendedTablesStyle';

class FoodItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCreateModal: false,
      displayDeleteModal: false,
      selectedDeleteItem: {},
    };
  }

  componentDidMount() {
    const { listFoodItems } = this.props;
    listFoodItems();
  }

  showCreateModal() {
    this.setState({
      displayCreateModal: true,
    });
  }

  hideCreateModal() {
    this.setState({
      displayCreateModal: false,
    });
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

  render() {
    const {
      classes, items, loading, history,
    } = this.props;
    const {
      displayCreateModal, displayDeleteModal, selectedDeleteItem,
    } = this.state;
    const simpleButtons = (item, index) => [
      { color: 'warning', icon: Print },
      { color: 'success', icon: Open },
      { color: 'danger', icon: Delete },
    ].map((prop, key) => {
      let onClick;
      switch (key) {
        case 1: {
          onClick = () => history.push(`/dashboard/fooditem/${item.createdAt}`);
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
        <Button
          color={prop.color}
          className={classes.actionButton}
          key={key}
          onClick={onClick}
        >
          <prop.icon className={classes.icon} />
        </Button>
      );
    });
    const tableData = items.map((_item, index) => {
      const item = [_item.name, _item.description, moment.unix(_item.expiryDate).format('DD/MM/YYYY'),
        _item.batchNumber, simpleButtons(_item, index)];
      return item;
    });
    return (
      <div>
        <FoodItemCreate
          visible={displayCreateModal}
          classes={classes}
          close={() => this.hideCreateModal()}
        />
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
                  onClick={() => this.showCreateModal()}
                >
                  New
                </Button>
              </CardHeader>
              <CardBody>
                {!loading && (
                <Table
                  hover
                  tableHead={[
                    'Name',
                    'Description',
                    'Expiry Date',
                    'Batch Number',
                  ]}
                  tableData={tableData}
                  customCellClasses={[
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customClassesForCells={[0, 1, 2, 3, 4]}
                  customHeadCellClasses={[
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customHeadClassesForCells={[0, 1, 2, 3, 4]}
                />
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

FoodItem.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,

  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,

  listFoodItems: PropTypes.func.isRequired,
};

export default withRouter(withStyles(style)(FoodItem));
