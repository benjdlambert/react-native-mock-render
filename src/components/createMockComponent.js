import React from 'react';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    propTypes: {
      children: React.PropTypes.node
    },
    render() {
      return React.createElement('react-native-mock', this.props, this.props.children);
    },
  });
}

export default createMockComponent;
