import React from 'react';
import createMockComponent from './createMockComponent';
import MockComponent from './MockComponent';

class Picker extends MockComponent {
}
Picker.propTypes = {
  children: React.PropTypes.node
};
Picker.Item = createMockComponent('Picker.Item');
export default Picker;
