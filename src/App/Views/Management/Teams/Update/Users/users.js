import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Assignment from '@material-ui/icons/Assignment';

import Delete from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

import Button from '../../../../../Components/CustomButtons';
import GridItem from '../../../../../Components/Grid/GridItem';
import Card from '../../../../../Components/Card/Card';
import CardHeader from '../../../../../Components/Card/CardHeader';
import CardBody from '../../../../../Components/Card/CardBody';
import CardIcon from '../../../../../Components/Card/CardIcon';
import LoadingTable from '../../../../../Components/Loading/LoadingTable';
import Table from '../../../../../Components/Table';

import UserRemove from './Remove/remove.container';

class Users extends Component {
  constructor(props) {
    super(props);
    const { listTeamUsers, groupName } = props;
    listTeamUsers(groupName);
    this.state = {
      displayDeleteModal: false,
      selectedDeleteItem: {},
    };
  }

  showDeleteModal(userName, index) {
    const { groupName } = this.props;
    this.setState({
      displayDeleteModal: true,
      selectedDeleteItem: {
        groupName,
        userName,
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
      classes, items, loading,
    } = this.props;
    const { selectedDeleteItem, displayDeleteModal } = this.state;
    const simpleButtons = (item, index) => [
      { color: 'danger', icon: Delete, tooltip: 'Remove User' },
    ].map((prop, key) => {
      let onClick;
      switch (key) {
        case 0: {
          onClick = () => this.showDeleteModal(item.userName, index);
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
      const item = [_item.firstName, _item.lastName, _item.email,
        _item.phoneNumber, _item.team, _item.position,
        simpleButtons(_item, index)];
      return item;
    });
    return (
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <UserRemove
            item={selectedDeleteItem}
            visible={displayDeleteModal}
            classes={classes}
            close={() => this.hideDeleteModal()}
          />
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
          </CardHeader>
          <CardBody>
            {!loading && (
            <Table
              hover
              tableHead={[
                'First Name',
                'Last Name',
                'Email',
                'Phone',
                'Team',
                'Position',
              ]}
              tableData={tableData}
              customCellClasses={[
                classes.left,
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
                classes.left,
                classes.right,
              ]}
              customHeadClassesForCells={[0, 1, 2, 3, 4, 5]}
            />
            )}
            <LoadingTable visible={loading} color="red" />
          </CardBody>
        </Card>
      </GridItem>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
  groupName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  deleting: PropTypes.bool.isRequired,
  listTeamUsers: PropTypes.func.isRequired,
  deleteTeamUser: PropTypes.func.isRequired,
};

export default Users;
