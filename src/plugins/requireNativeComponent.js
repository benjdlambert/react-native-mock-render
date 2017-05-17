/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */
import React from 'react';

function requireNativeComponent(viewName, componentInterface, extraConfig) {
  return React.createClass({
    displayName: viewName,
    propTypes: {
      children: React.PropTypes.node
    },
    render() {
      return React.createElement('react-native-mock', this.props, this.props.children);
    },
  });
}

module.exports = requireNativeComponent;
