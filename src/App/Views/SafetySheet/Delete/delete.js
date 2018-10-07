import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SweetAlert from 'react-bootstrap-sweetalert';

class DeleteItem extends Component {
  componentWillReceiveProps(nextProps) {
    const { loading, close } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      close();
    }
  }

  delete() {
    const { item, deleteSafety, loading } = this.props;
    if (loading) return false;
    const { createdAt, index } = item;
    return deleteSafety(createdAt, index);
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
        title="Delete Item?"
        onConfirm={() => this.delete()}
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

DeleteItem.propTypes = {
  classes: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  deleteHotHolding: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default DeleteItem;
