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

import FridgeCreate from './Create/create.container';
import FridgeDelete from './Delete/delete.container';

import style from '../../../Assets/Jss/extendedTablesStyle';

class FridgeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCreateModal: false,
      displayDeleteModal: false,
      selectedDeleteItem: '',
    };
  }

  componentDidMount() {
    const { listFridges } = this.props;
    listFridges();
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
      selectedDeleteItem: '',
    });
  }

  render() {
    const {
      classes, items,
    } = this.props;
    const { displayCreateModal, displayDeleteModal, selectedDeleteItem } = this.state;
    const simpleButtons = (id, index) => [
      { color: 'warning', icon: Print },
      { color: 'success', icon: Open },
      { color: 'danger', icon: Delete },
    ].map((prop, key) => (
      <Button
        color={prop.color}
        className={classes.actionButton}
        key={key}
        onClick={() => this.showDeleteModal(id, index)}
      >
        <prop.icon className={classes.icon} />
      </Button>
    ));
    const tableData = items.map((i, index) => {
      const item = [i.name, i.description, simpleButtons(i.id, index)];
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
        <FridgeDelete
          item={selectedDeleteItem}
          visible={displayDeleteModal}
          classes={classes}
          close={() => this.hideDeleteModal()} />
        <FridgeCreate
          visible={displayCreateModal}
          classes={classes}
          close={() => this.hideCreateModal()} />
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
                  tableHead={[
                    'Name',
                    'Description',
                    'Actions',
                  ]}
                  tableData={tableData}
                  customCellClasses={[
                    classes.center,
                    classes.right,
                    classes.right,
                  ]}
                  customClassesForCells={[0, 4, 5]}
                  customHeadCellClasses={[
                    classes.center,
                    classes.right,
                    classes.right,
                  ]}
                  customHeadClassesForCells={[0, 4, 5]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

FridgeItem.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,

  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,

  listFridges: PropTypes.func.isRequired,
};

export default withRouter(withStyles(style)(FridgeItem));
