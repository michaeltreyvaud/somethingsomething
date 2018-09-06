import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SweetAlert from 'react-bootstrap-sweetalert';

class DeleteItem extends Component {
  delete() {
    const { item, deleteFridge } = this.props;
    const { itemId, index } = item;
    deleteFridge(itemId, index);
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
  close: PropTypes.func.isRequired,
  deleteFridge: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default DeleteItem;
