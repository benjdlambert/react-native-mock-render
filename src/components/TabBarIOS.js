import PropTypes from 'prop-types';
import React from 'react';
import createMockComponent from './createMockComponent';
import MockComponent from './MockComponent';

class TabBarIOS extends MockComponent {
}

TabBarIOS.propTypes = {
  children: PropTypes.node
};
TabBarIOS.Item = createMockComponent('TabBarIOS.Item');

export default TabBarIOS;
