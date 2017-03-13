webpackHotUpdate(0,{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(21);
var OMDbHelpers = __webpack_require__(81);
var TitleComponent = __webpack_require__(302);

var TitleContainer = React.createClass({
  displayName: 'TitleContainer',

  getInitialState: function getInitialState() {
    return {
      titleExpanded: false,
      isFavorite: false
    };
  },
  componentWillMount: function componentWillMount() {
    this.info = {
      imdbID: this.props.titleInfo.imdbID,
      Title: this.props.titleInfo.Title,
      Year: this.props.titleInfo.Year
    };
  },
  handleExpandTitle: function handleExpandTitle(e) {
    console.log(this.state, this.info);
  },
  render: function render() {
    return React.createElement(TitleComponent, {
      info: this.info,
      isExpanded: this.state.titleExpanded,
      onExpandTitle: this.handleExpandTitle });
  }
});

module.exports = TitleContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9NRGJIZWxwZXJzIiwiVGl0bGVDb21wb25lbnQiLCJUaXRsZUNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwidGl0bGVFeHBhbmRlZCIsImlzRmF2b3JpdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJpbmZvIiwiaW1kYklEIiwicHJvcHMiLCJ0aXRsZUluZm8iLCJUaXRsZSIsIlllYXIiLCJoYW5kbGVFeHBhbmRUaXRsZSIsImUiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJyZW5kZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCO0FBQ0EsSUFBSUUsaUJBQWlCLG1CQUFBRixDQUFRLEdBQVIsQ0FBckI7O0FBRUEsSUFBSUcsaUJBQWlCSixNQUFNSyxXQUFOLENBQWtCO0FBQUE7O0FBQ3JDQyxtQkFBaUIsMkJBQVk7QUFDM0IsV0FBTztBQUNMQyxxQkFBZSxLQURWO0FBRUxDLGtCQUFZO0FBRlAsS0FBUDtBQUlELEdBTm9DO0FBT3JDQyxzQkFBb0IsOEJBQVk7QUFDOUIsU0FBS0MsSUFBTCxHQUFZO0FBQ1ZDLGNBQVEsS0FBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCRixNQURuQjtBQUVWRyxhQUFPLEtBQUtGLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsS0FGbEI7QUFHVkMsWUFBTSxLQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJFO0FBSGpCLEtBQVo7QUFLRCxHQWJvQztBQWNyQ0MscUJBQW1CLDJCQUFVQyxDQUFWLEVBQWE7QUFDOUJDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQixFQUF3QixLQUFLVixJQUE3QjtBQUNELEdBaEJvQztBQWlCckNXLFVBQVEsa0JBQVk7QUFDbEIsV0FDSSxvQkFBQyxjQUFEO0FBQ0UsWUFBTSxLQUFLWCxJQURiO0FBRUUsa0JBQVksS0FBS1UsS0FBTCxDQUFXYixhQUZ6QjtBQUdFLHFCQUFlLEtBQUtTLGlCQUh0QixHQURKO0FBTUQ7QUF4Qm9DLENBQWxCLENBQXJCOztBQTJCQU0sT0FBT0MsT0FBUCxHQUFpQm5CLGNBQWpCLEMiLCJmaWxlIjoiMC5jNTQ2MTUwNzBkYzQ0YWUzYzRiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBPTURiSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL09NRGJIZWxwZXJzJyk7XG52YXIgVGl0bGVDb21wb25lbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50Jyk7XG5cbnZhciBUaXRsZUNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlRXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5mbyA9IHtcbiAgICAgIGltZGJJRDogdGhpcy5wcm9wcy50aXRsZUluZm8uaW1kYklELFxuICAgICAgVGl0bGU6IHRoaXMucHJvcHMudGl0bGVJbmZvLlRpdGxlLFxuICAgICAgWWVhcjogdGhpcy5wcm9wcy50aXRsZUluZm8uWWVhcixcbiAgICB9XG4gIH0sXG4gIGhhbmRsZUV4cGFuZFRpdGxlOiBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUsIHRoaXMuaW5mbylcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRpdGxlQ29tcG9uZW50XG4gICAgICAgICAgaW5mbz17dGhpcy5pbmZvfVxuICAgICAgICAgIGlzRXhwYW5kZWQ9e3RoaXMuc3RhdGUudGl0bGVFeHBhbmRlZH1cbiAgICAgICAgICBvbkV4cGFuZFRpdGxlPXt0aGlzLmhhbmRsZUV4cGFuZFRpdGxlfSAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpdGxlQ29udGFpbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL1RpdGxlQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==