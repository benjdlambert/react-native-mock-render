/**
 * https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/requireNativeComponent.js
 */
import React from 'react';
import PropTypes from 'prop-types';

function requireNativeComponent(viewName, componentInterface, extraConfig) {
  return React.createClass({
    displayName: viewName,
    propTypes: {
      children: PropTypes.node
    },
    render() {
      return React.createElement('react-native-mock', this.props, this.props.children);
    },
  });
}

module.exports = requireNativeComponent;
