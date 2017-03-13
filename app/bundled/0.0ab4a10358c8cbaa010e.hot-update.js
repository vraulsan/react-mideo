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
      imdbID: this.props.titleInfo.imdbID,
      Title: this.props.titleInfo.Title,
      Type: this.props.titleInfo.Type,
      Year: this.props.titleInfo.Year,
      Poster: this.props.titleInfo.Poster,
      titleExpanded: false
    };
  },
  componentDidMount: function componentDidMount() {
    console.log('this: ', this);
  },
  render: function render() {
    return React.createElement(TitleComponent, { details: this.state });
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
      props.details.imdbID
    ),
    React.createElement(
      'td',
      null,
      props.details.Title
    ),
    React.createElement(
      'td',
      null,
      props.details.Year
    ),
    React.createElement(
      'td',
      null,
      'Yes/No'
    )
  );
};

module.exports = TitleComponent;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50LmpzPzc5OTgiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT01EYkhlbHBlcnMiLCJUaXRsZUNvbXBvbmVudCIsIlRpdGxlQ29udGFpbmVyIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJpbWRiSUQiLCJwcm9wcyIsInRpdGxlSW5mbyIsIlRpdGxlIiwiVHlwZSIsIlllYXIiLCJQb3N0ZXIiLCJ0aXRsZUV4cGFuZGVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwic3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLGNBQWMsbUJBQUFELENBQVEsRUFBUixDQUFsQjtBQUNBLElBQUlFLGlCQUFpQixtQkFBQUYsQ0FBUSxHQUFSLENBQXJCOztBQUVBLElBQUlHLGlCQUFpQkosTUFBTUssV0FBTixDQUFrQjtBQUFBOztBQUNyQ0MsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU87QUFDTEMsY0FBUSxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJGLE1BRHhCO0FBRUxHLGFBQU8sS0FBS0YsS0FBTCxDQUFXQyxTQUFYLENBQXFCQyxLQUZ2QjtBQUdMQyxZQUFNLEtBQUtILEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkUsSUFIdEI7QUFJTEMsWUFBTSxLQUFLSixLQUFMLENBQVdDLFNBQVgsQ0FBcUJHLElBSnRCO0FBS0xDLGNBQVEsS0FBS0wsS0FBTCxDQUFXQyxTQUFYLENBQXFCSSxNQUx4QjtBQU1MQyxxQkFBZTtBQU5WLEtBQVA7QUFRRCxHQVZvQztBQVdyQ0MscUJBQW1CLDZCQUFZO0FBQzdCQyxZQUFRQyxHQUFSLENBQVksUUFBWixFQUFxQixJQUFyQjtBQUVELEdBZG9DO0FBZXJDQyxVQUFRLGtCQUFZO0FBQ2xCLFdBQ0ksb0JBQUMsY0FBRCxJQUFnQixTQUFTLEtBQUtDLEtBQTlCLEdBREo7QUFHRDtBQW5Cb0MsQ0FBbEIsQ0FBckI7O0FBc0JBQyxPQUFPQyxPQUFQLEdBQWlCakIsY0FBakIsQzs7Ozs7Ozs7OztBQzFCQSxJQUFJSixRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjs7QUFHQSxTQUFTRSxjQUFULENBQXlCSyxLQUF6QixFQUFnQztBQUM5QixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSxZQUFNYyxPQUFOLENBQWNmO0FBQW5CLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0MsWUFBTWMsT0FBTixDQUFjWjtBQUFuQixLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtGLFlBQU1jLE9BQU4sQ0FBY1Y7QUFBbkIsS0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixHQURGO0FBUUQ7O0FBRURRLE9BQU9DLE9BQVAsR0FBaUJsQixjQUFqQixDIiwiZmlsZSI6IjAuMGFiNGExMDM1OGM4Y2JhYTAxMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xudmFyIFRpdGxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudCcpO1xuXG52YXIgVGl0bGVDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbWRiSUQ6IHRoaXMucHJvcHMudGl0bGVJbmZvLmltZGJJRCxcbiAgICAgIFRpdGxlOiB0aGlzLnByb3BzLnRpdGxlSW5mby5UaXRsZSxcbiAgICAgIFR5cGU6IHRoaXMucHJvcHMudGl0bGVJbmZvLlR5cGUsXG4gICAgICBZZWFyOiB0aGlzLnByb3BzLnRpdGxlSW5mby5ZZWFyLFxuICAgICAgUG9zdGVyOiB0aGlzLnByb3BzLnRpdGxlSW5mby5Qb3N0ZXIsXG4gICAgICB0aXRsZUV4cGFuZGVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygndGhpczogJyx0aGlzKTtcblxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGl0bGVDb21wb25lbnQgZGV0YWlscz17dGhpcy5zdGF0ZX0gLz5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaXRsZUNvbnRhaW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cblxuZnVuY3Rpb24gVGl0bGVDb21wb25lbnQgKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHRyPlxuICAgICAgPHRkPntwcm9wcy5kZXRhaWxzLmltZGJJRH08L3RkPlxuICAgICAgPHRkPntwcm9wcy5kZXRhaWxzLlRpdGxlfTwvdGQ+XG4gICAgICA8dGQ+e3Byb3BzLmRldGFpbHMuWWVhcn08L3RkPlxuICAgICAgPHRkPlllcy9ObzwvdGQ+XG4gICAgPC90cj5cbiAgKVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaXRsZUNvbXBvbmVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=