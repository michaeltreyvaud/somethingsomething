import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Update extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { get, match } = this.props;
    const { params } = match;
    const { type, createdAt } = params;
    get(type, createdAt);
  }

  render() {
    return (<h1>Hello</h1>);
  }
}

Update.propTypes = {
  loading: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
};

export default Update;
