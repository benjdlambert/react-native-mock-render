import React from 'react';
import { Component } from 'react';

class MockComponent extends Component {
  setNativeProps(nativeProps) {

  }
  measure(callback) {

  }
  measureLayout(relativeToNativeNode, onSuccess, onFail) {

  }
  focus() {

  }
  blur() {

  }
  render() {
    return React.createElement('react-native-mock', this.props, this.props.children);
    // return <div {...this.props}>{this.props.children ? this.props.children : ''}</div>;
  }
}

MockComponent.propTypes = {
  children: React.PropTypes.node
};

export default MockComponent;
