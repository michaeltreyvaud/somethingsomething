import React from 'react';
import PropTypes from 'prop-types';

import ReactLoading from 'react-loading';
import CardBody from '../../Card/CardBody';

import style from './style';

const LoadingTable = (props) => {
  const { visible, color } = props;
  if (!visible) return null;
  return (
    <CardBody style={style}>
      <ReactLoading
        type="spin"
        color={color}
        width={80}
        height={80}
      />
    </CardBody>
  );
};

LoadingTable.propTypes = {
  visible: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default LoadingTable;
