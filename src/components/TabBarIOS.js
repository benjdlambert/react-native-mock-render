import React from 'react';
import createMockComponent from './createMockComponent';
import MockComponent from './MockComponent';

class TabBarIOS extends MockComponent {
}

TabBarIOS.propTypes = {
  children: React.PropTypes.node
};
TabBarIOS.Item = createMockComponent('TabBarIOS.Item');

export default TabBarIOS;
