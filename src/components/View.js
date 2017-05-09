/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/View/View.js
 */
import React from 'react';
import MockComponent from './MockComponent';
import ViewPropTypes from '../propTypes/ViewPropTypes';
import ViewAccessibility from './View/ViewAccessibility';

const {AccessibilityComponentTypes} = ViewAccessibility;

const AccessibilityTraits = [
  'none',
  'button',
  'link',
  'header',
  'search',
  'image',
  'selected',
  'plays',
  'key',
  'text',
  'summary',
  'disabled',
  'frequentUpdates',
  'startsMedia',
  'adjustable',
  'allowsDirectInteraction',
  'pageTurn',
];

// TODO(lmr):
const forceTouchAvailable = false;

const statics = {
  AccessibilityTraits,
  AccessibilityComponentTypes,
  /**
   * Is 3D Touch / Force Touch available (i.e. will touch events include `force`)
   * @platform ios
   */
  forceTouchAvailable,
};

class View extends MockComponent {
  render(){
    let mockViewProps = Object.assign({}, this.props, {onClick: this.props.onResponderRelease });
    return React.createElement('react-native-mock', mockViewProps, this.props.children);

  }
}
View.propTypes = ViewPropTypes;
View = Object.assign(View, statics);
export default View;
