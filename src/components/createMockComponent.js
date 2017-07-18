import React from 'react';
import PropTypes from 'prop-types';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    propTypes: {
      children: PropTypes.node
    },
    render() {
      return React.createElement('react-native-mock', this.props, this.props.children);
    },
  });
}

export default createMockComponent;
