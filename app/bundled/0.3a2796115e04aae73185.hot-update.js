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
      isExpanded: this.state.titleExpanded });
  }
});

module.exports = TitleContainer;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(21);

function TitleComponent(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.info.imdbID
    ),
    React.createElement(
      'td',
      null,
      props.info.Title
    ),
    React.createElement(
      'td',
      null,
      props.info.Year
    ),
    React.createElement(
      'td',
      null,
      'True / False'
    )
  );
};

module.exports = TitleComponent;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50LmpzPzc5OTgiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT01EYkhlbHBlcnMiLCJUaXRsZUNvbXBvbmVudCIsIlRpdGxlQ29udGFpbmVyIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJ0aXRsZUV4cGFuZGVkIiwiaXNGYXZvcml0ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImluZm8iLCJpbWRiSUQiLCJwcm9wcyIsInRpdGxlSW5mbyIsIlRpdGxlIiwiWWVhciIsImhhbmRsZUV4cGFuZFRpdGxlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInJlbmRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7QUFDQSxJQUFJQyxjQUFjLG1CQUFBRCxDQUFRLEVBQVIsQ0FBbEI7QUFDQSxJQUFJRSxpQkFBaUIsbUJBQUFGLENBQVEsR0FBUixDQUFyQjs7QUFFQSxJQUFJRyxpQkFBaUJKLE1BQU1LLFdBQU4sQ0FBa0I7QUFBQTs7QUFDckNDLG1CQUFpQiwyQkFBWTtBQUMzQixXQUFPO0FBQ0xDLHFCQUFlLEtBRFY7QUFFTEMsa0JBQVk7QUFGUCxLQUFQO0FBSUQsR0FOb0M7QUFPckNDLHNCQUFvQiw4QkFBWTtBQUM5QixTQUFLQyxJQUFMLEdBQVk7QUFDVkMsY0FBUSxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJGLE1BRG5CO0FBRVZHLGFBQU8sS0FBS0YsS0FBTCxDQUFXQyxTQUFYLENBQXFCQyxLQUZsQjtBQUdWQyxZQUFNLEtBQUtILEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkU7QUFIakIsS0FBWjtBQUtELEdBYm9DO0FBY3JDQyxxQkFBbUIsMkJBQVVDLENBQVYsRUFBYTtBQUM5QkMsWUFBUUMsR0FBUixDQUFZLEtBQUtDLEtBQWpCLEVBQXdCLEtBQUtWLElBQTdCO0FBQ0QsR0FoQm9DO0FBaUJyQ1csVUFBUSxrQkFBWTtBQUNsQixXQUNJLG9CQUFDLGNBQUQ7QUFDRSxZQUFNLEtBQUtYLElBRGI7QUFFRSxrQkFBWSxLQUFLVSxLQUFMLENBQVdiLGFBRnpCLEdBREo7QUFLRDtBQXZCb0MsQ0FBbEIsQ0FBckI7O0FBMEJBZSxPQUFPQyxPQUFQLEdBQWlCbkIsY0FBakIsQzs7Ozs7Ozs7OztBQzlCQSxJQUFJSixRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjs7QUFHQSxTQUFTRSxjQUFULENBQXlCUyxLQUF6QixFQUFnQztBQUM5QixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSxZQUFNRixJQUFOLENBQVdDO0FBQWhCLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0MsWUFBTUYsSUFBTixDQUFXSTtBQUFoQixLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtGLFlBQU1GLElBQU4sQ0FBV0s7QUFBaEIsS0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixHQURGO0FBUUQ7O0FBRURPLE9BQU9DLE9BQVAsR0FBaUJwQixjQUFqQixDIiwiZmlsZSI6IjAuM2EyNzk2MTE1ZTA0YWFlNzMxODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xudmFyIFRpdGxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudCcpO1xuXG52YXIgVGl0bGVDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZUV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluZm8gPSB7XG4gICAgICBpbWRiSUQ6IHRoaXMucHJvcHMudGl0bGVJbmZvLmltZGJJRCxcbiAgICAgIFRpdGxlOiB0aGlzLnByb3BzLnRpdGxlSW5mby5UaXRsZSxcbiAgICAgIFllYXI6IHRoaXMucHJvcHMudGl0bGVJbmZvLlllYXIsXG4gICAgfVxuICB9LFxuICBoYW5kbGVFeHBhbmRUaXRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLCB0aGlzLmluZm8pXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaXRsZUNvbXBvbmVudFxuICAgICAgICAgIGluZm89e3RoaXMuaW5mb31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLnRpdGxlRXhwYW5kZWR9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXIuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbmZ1bmN0aW9uIFRpdGxlQ29tcG9uZW50IChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx0cj5cbiAgICAgIDx0ZD57cHJvcHMuaW5mby5pbWRiSUR9PC90ZD5cbiAgICAgIDx0ZD57cHJvcHMuaW5mby5UaXRsZX08L3RkPlxuICAgICAgPHRkPntwcm9wcy5pbmZvLlllYXJ9PC90ZD5cbiAgICAgIDx0ZD5UcnVlIC8gRmFsc2U8L3RkPlxuICAgIDwvdHI+XG4gIClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGl0bGVDb21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9