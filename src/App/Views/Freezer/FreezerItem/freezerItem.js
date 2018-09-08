import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Assignment from '@material-ui/icons/Assignment';
import { withRouter } from 'react-router';

import Print from '@material-ui/icons/Print';
import Open from '@material-ui/icons/OpenInNew';
import Delete from '@material-ui/icons/Delete';

import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import CardBody from '../../../Components/Card/CardBody';
import CardHeader from '../../../Components/Card/CardHeader';
import CardIcon from '../../../Components/Card/CardIcon';
import Button from '../../../Components/CustomButtons';
import Table from '../../../Components/Table';

import FreezerCreate from './Create/create.container';
import FreezerDelete from './Delete/delete.container';
import FreezerUpdate from './Update/update.container';

import style from '../../../Assets/Jss/extendedTablesStyle';

class FreezerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCreateModal: false,
      displayDeleteModal: false,
      displayUpdateModal: false,
      selectedDeleteItem: {},
      selectedUpdateItem: {},
      selectedUpdateItemIndex: 0,
    };
  }

  componentDidMount() {
    const { listFreezers } = this.props;
    listFreezers();
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

  showDeleteModal(itemId, index) {
    this.setState({
      displayDeleteModal: true,
      selectedDeleteItem: {
        itemId,
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

  showUpdateModal(item, index) {
    this.setState({
      displayUpdateModal: true,
      selectedUpdateItem: item,
      selectedUpdateItemIndex: index,
    });
  }

  hideUpdateModal() {
    this.setState({
      displayUpdateModal: false,
      selectedUpdateItem: {},
      selectedUpdateItemIndex: 0,
    });
  }

  render() {
    const {
      classes, items,
    } = this.props;
    const {
      displayCreateModal, displayDeleteModal, selectedDeleteItem,
      displayUpdateModal, selectedUpdateItem, selectedUpdateItemIndex,
    } = this.state;
    const simpleButtons = (item, index) => [
      { color: 'warning', icon: Print },
      { color: 'success', icon: Open },
      { color: 'danger', icon: Delete },
    ].map((prop, key) => {
      let onClick;
      switch (key) {
        case 1: {
          onClick = () => this.showUpdateModal(item, index);
          break;
        }
        case 2: {
          onClick = () => this.showDeleteModal(item.id, index);
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
      const item = [_item.name, _item.description, simpleButtons(_item, index)];
      return item;
    });
    return (
      <div>
        <Button
          color="info"
          className={classes.marginRight}
          onClick={() => this.showCreateModal()} >
          New
        </Button>
        <FreezerDelete
          item={selectedDeleteItem}
          visible={displayDeleteModal}
          classes={classes}
          close={() => this.hideDeleteModal()} />
        <FreezerCreate
          visible={displayCreateModal}
          classes={classes}
          close={() => this.hideCreateModal()} />
        <FreezerUpdate
          item={selectedUpdateItem}
          index={selectedUpdateItemIndex}
          visible={displayUpdateModal}
          classes={classes}
          close={() => this.hideUpdateModal()} />
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Assignment />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <Table
                  hover
                  tableHead={[
                    'Name',
                    'Description',
                  ]}
                  tableData={tableData}
                  customCellClasses={[
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customClassesForCells={[0, 1, 2]}
                  customHeadCellClasses={[
                    classes.left,
                    classes.left,
                    classes.right,
                  ]}
                  customHeadClassesForCells={[0, 1, 2]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

FreezerItem.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,

  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,

  listFreezers: PropTypes.func.isRequired,
};

export default withRouter(withStyles(style)(FreezerItem));
