import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';
import MockComponent from './MockComponent';

class TouchableNativeFeedback extends MockComponent {
  static SelectableBackground() {
  }

  static SelectableBackgroundBorderless() {
  }

  static Ripple(color, borderless) {
  }
}
TouchableNativeFeedback.propTypes = {
  ...TouchableWithoutFeedback.propTypes,

  background: React.PropTypes.object
};

export default TouchableNativeFeedback;
