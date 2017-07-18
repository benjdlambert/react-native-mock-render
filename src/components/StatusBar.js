/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/StatusBar/StatusBar.js
 */
import React from 'react';
import ReactPropTypes from 'prop-types';
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
  animated: ReactPropTypes.bool,
  barStyle: ReactPropTypes.oneOf(['default', 'light-content']),
  backgroundColor: ColorPropType,
  hidden: ReactPropTypes.bool,
  networkActivityIndicatorVisible: ReactPropTypes.bool,
  showHideTransition: ReactPropTypes.oneOf(['fade', 'slide']),
  translucent: ReactPropTypes.bool
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
