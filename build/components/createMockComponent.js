var _react=require('react');var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

function createMockComponent(displayName){
return _react2['default'].createClass({
displayName:displayName,
propTypes:{
children:_react2['default'].PropTypes.node},

render:function(){function render(){
return _react2['default'].createElement('react-native-mock',null,this.props.children);
}return render;}()});

}

module.exports=createMockComponent;