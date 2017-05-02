/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Text/Text.js
 */
import React from 'react';
import styleSheetPropType from '../propTypes/StyleSheetPropType';
import TextStylePropTypes from '../propTypes/TextStylePropTypes';
import MockComponent from './MockComponent';

const stylePropType = styleSheetPropType(TextStylePropTypes);

class Text extends MockComponent {
  render() {
    return <p>{this.props.children}</p>;
  }
}

Text.propTypes = {
  /**
   * Used to truncate the text with an ellipsis after computing the text
   * layout, including line wrapping, such that the total number of lines
   * does not exceed this number.
   */
  numberOfLines: React.PropTypes.number,
  /**
   * Invoked on mount and layout changes with
   *
   *   `{nativeEvent: {layout: {x, y, width, height}}}`
   */
  onLayout: React.PropTypes.func,
  /**
   * This function is called on press.
   */
  onPress: React.PropTypes.func,
  /**
   * When true, no visual change is made when text is pressed down. By
   * default, a gray oval highlights the text on press down.
   * @platform ios
   */
  suppressHighlighting: React.PropTypes.bool,
  children: React.PropTypes.node,
  style: stylePropType,
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID: React.PropTypes.string,
  /**
   * Specifies should fonts scale to respect Text Size accessibility setting on iOS.
   * @platform ios
   */
  allowFontScaling: React.PropTypes.bool
};
export default Text;
