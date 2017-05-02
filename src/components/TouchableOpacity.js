/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import MockComponent from './MockComponent';

class TouchableOpacity extends MockComponent {
}
TouchableOpacity.propTypes = {
  ...TouchableWithoutFeedback.propTypes,

  /**
   * Determines what the opacity of the wrapped view should be when touch is
   * active. Defaults to 0.2.
   */
  activeOpacity: React.PropTypes.number,
};
export default TouchableOpacity;
