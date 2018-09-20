import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SweetAlert from 'react-bootstrap-sweetalert';

class Remove extends Component {
  componentWillReceiveProps(nextProps) {
    const { loading, close } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      close();
    }
  }

  removeUser() {
    const {
      loading, deleteTeamUser, item,
    } = this.props;
    if (loading) return false;
    const { groupName, userName, index } = item;
    return deleteTeamUser(groupName, userName, index);
  }

  render() {
    const {
      classes, visible, close,
    } = this.props;
    const { success, button, danger } = classes;
    return (
      <SweetAlert
        show={visible}
        warning
        title="Delete User?"
        onConfirm={() => this.removeUser()}
        onCancel={() => close()}
        confirmBtnCssClass={
          `${button} ${success}`
        }
        cancelBtnCssClass={
          `${button} ${danger}`
        }
        confirmBtnText="Delete"
        cancelBtnText="Cancel"
        showCancel
      />
    );
  }
}

Remove.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  deleteTeamUser: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default Remove;
