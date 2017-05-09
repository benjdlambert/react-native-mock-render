/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import MockComponent from './MockComponent';

class TouchableHighlight extends MockComponent {
  render() {
    return React.createElement('react-native-mock', {onClick: this.props.onPress}, this.props.children);
  }
}
TouchableHighlight.propTypes = {
  ...TouchableWithoutFeedback.propTypes
};
export default TouchableHighlight;
