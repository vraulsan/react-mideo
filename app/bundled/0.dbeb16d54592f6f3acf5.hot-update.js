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
  componentDidMount: function componentDidMount() {
    console.log('here: ', this);
    this.info = {
      imdbID: this.props.titleInfo.imdbID,
      Title: this.props.titleInfo.Title,
      Year: this.props.titleInfo.Year
    };
  },
  render: function render() {
    return React.createElement(TitleComponent, {
      info: this.info,
      isExpanded: this.state.titleExpanded });
  }
});

module.exports = TitleContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9NRGJIZWxwZXJzIiwiVGl0bGVDb21wb25lbnQiLCJUaXRsZUNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwidGl0bGVFeHBhbmRlZCIsImlzRmF2b3JpdGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJpbmZvIiwiaW1kYklEIiwicHJvcHMiLCJ0aXRsZUluZm8iLCJUaXRsZSIsIlllYXIiLCJyZW5kZXIiLCJzdGF0ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7QUFDQSxJQUFJQyxjQUFjLG1CQUFBRCxDQUFRLEVBQVIsQ0FBbEI7QUFDQSxJQUFJRSxpQkFBaUIsbUJBQUFGLENBQVEsR0FBUixDQUFyQjs7QUFFQSxJQUFJRyxpQkFBaUJKLE1BQU1LLFdBQU4sQ0FBa0I7QUFBQTs7QUFDckNDLG1CQUFpQiwyQkFBWTtBQUMzQixXQUFPO0FBQ0xDLHFCQUFlLEtBRFY7QUFFTEMsa0JBQVk7QUFGUCxLQUFQO0FBSUQsR0FOb0M7QUFPckNDLHFCQUFtQiw2QkFBWTtBQUM3QkMsWUFBUUMsR0FBUixDQUFZLFFBQVosRUFBcUIsSUFBckI7QUFDQSxTQUFLQyxJQUFMLEdBQVk7QUFDVkMsY0FBUSxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJGLE1BRG5CO0FBRVZHLGFBQU8sS0FBS0YsS0FBTCxDQUFXQyxTQUFYLENBQXFCQyxLQUZsQjtBQUdWQyxZQUFNLEtBQUtILEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkU7QUFIakIsS0FBWjtBQUtELEdBZG9DO0FBZXJDQyxVQUFRLGtCQUFZO0FBQ2xCLFdBQ0ksb0JBQUMsY0FBRDtBQUNFLFlBQU0sS0FBS04sSUFEYjtBQUVFLGtCQUFZLEtBQUtPLEtBQUwsQ0FBV1osYUFGekIsR0FESjtBQUtEO0FBckJvQyxDQUFsQixDQUFyQjs7QUF3QkFhLE9BQU9DLE9BQVAsR0FBaUJqQixjQUFqQixDIiwiZmlsZSI6IjAuZGJlYjE2ZDU0NTkyZjZmM2FjZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xudmFyIFRpdGxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudCcpO1xuXG52YXIgVGl0bGVDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZUV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZXJlOiAnLHRoaXMpXG4gICAgdGhpcy5pbmZvID0ge1xuICAgICAgaW1kYklEOiB0aGlzLnByb3BzLnRpdGxlSW5mby5pbWRiSUQsXG4gICAgICBUaXRsZTogdGhpcy5wcm9wcy50aXRsZUluZm8uVGl0bGUsXG4gICAgICBZZWFyOiB0aGlzLnByb3BzLnRpdGxlSW5mby5ZZWFyLFxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaXRsZUNvbXBvbmVudFxuICAgICAgICAgIGluZm89e3RoaXMuaW5mb31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLnRpdGxlRXhwYW5kZWR9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9