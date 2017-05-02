/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/StatusBar/StatusBar.js
 */
import React from 'react';
import ColorPropType from '../propTypes/ColorPropType';
import MockComponent from './MockComponent';


let _backgroundColor = '';
let _barStyle = {};
let _hidden = false;
let _networkActivityIndicatorVisible = false;
let _translucent = false;

class StatusBar extends MockComponent {
}
StatusBar.propTypes = {
  animated: React.PropTypes.bool,
  barStyle: React.PropTypes.oneOf(['default', 'light-content']),
  backgroundColor: ColorPropType,
  hidden: React.PropTypes.bool,
  networkActivityIndicatorVisible: React.PropTypes.bool,
  showHideTransition: React.PropTypes.oneOf(['fade', 'slide']),
  translucent: React.PropTypes.bool
};
const statics = {
  setBackgroundColor(backgroundColor, animated) {
    _backgroundColor = backgroundColor;
  },

  setBarStyle(barStyle, animated) {
    _barStyle = barStyle;
  },

  setHidden(hidden, animated) {
    _hidden = hidden;
  },

  setNetworkActivityIndicatorVisible(visible) {
    _networkActivityIndicatorVisible = visible;
  },

  setTranslucent(translucent) {
    _translucent = translucent;
  },

  __getBackgroundColor() {
    return _backgroundColor;
  },

  __getBarStyle() {
    return _barStyle;
  },

  __getHidden() {
    return _hidden;
  },

  __getNetworkActivityIndicatorVisible() {
    return _networkActivityIndicatorVisible;
  },

  __getTranslucent() {
    return _translucent;
  }
};
StatusBar = Object.assign(StatusBar, statics);

export default StatusBar;
