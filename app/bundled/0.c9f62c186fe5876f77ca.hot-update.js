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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50LmpzPzc5OTgiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT01EYkhlbHBlcnMiLCJUaXRsZUNvbXBvbmVudCIsIlRpdGxlQ29udGFpbmVyIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJ0aXRsZUV4cGFuZGVkIiwiaXNGYXZvcml0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaW5mbyIsImltZGJJRCIsInByb3BzIiwidGl0bGVJbmZvIiwiVGl0bGUiLCJZZWFyIiwicmVuZGVyIiwic3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCO0FBQ0EsSUFBSUUsaUJBQWlCLG1CQUFBRixDQUFRLEdBQVIsQ0FBckI7O0FBRUEsSUFBSUcsaUJBQWlCSixNQUFNSyxXQUFOLENBQWtCO0FBQUE7O0FBQ3JDQyxtQkFBaUIsMkJBQVk7QUFDM0IsV0FBTztBQUNMQyxxQkFBZSxLQURWO0FBRUxDLGtCQUFZO0FBRlAsS0FBUDtBQUlELEdBTm9DO0FBT3JDQyxxQkFBbUIsNkJBQVk7QUFDN0IsU0FBS0MsSUFBTCxHQUFZO0FBQ1ZDLGNBQVEsS0FBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCRixNQURuQjtBQUVWRyxhQUFPLEtBQUtGLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsS0FGbEI7QUFHVkMsWUFBTSxLQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJFO0FBSGpCLEtBQVo7QUFLRCxHQWJvQztBQWNyQ0MsVUFBUSxrQkFBWTtBQUNsQixXQUNJLG9CQUFDLGNBQUQ7QUFDRSxZQUFNLEtBQUtOLElBRGI7QUFFRSxrQkFBWSxLQUFLTyxLQUFMLENBQVdWLGFBRnpCLEdBREo7QUFLRDtBQXBCb0MsQ0FBbEIsQ0FBckI7O0FBdUJBVyxPQUFPQyxPQUFQLEdBQWlCZixjQUFqQixDOzs7Ozs7Ozs7O0FDM0JBLElBQUlKLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaOztBQUdBLFNBQVNFLGNBQVQsQ0FBeUJTLEtBQXpCLEVBQWdDO0FBQzlCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLFlBQU1GLElBQU4sQ0FBV0M7QUFBaEIsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLQyxZQUFNRixJQUFOLENBQVdJO0FBQWhCLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFBS0YsWUFBTUYsSUFBTixDQUFXSztBQUFoQixLQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLEdBREY7QUFRRDs7QUFFREcsT0FBT0MsT0FBUCxHQUFpQmhCLGNBQWpCLEMiLCJmaWxlIjoiMC5jOWY2MmMxODZmZTU4NzZmNzdjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBPTURiSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL09NRGJIZWxwZXJzJyk7XG52YXIgVGl0bGVDb21wb25lbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50Jyk7XG5cbnZhciBUaXRsZUNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlRXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbmZvID0ge1xuICAgICAgaW1kYklEOiB0aGlzLnByb3BzLnRpdGxlSW5mby5pbWRiSUQsXG4gICAgICBUaXRsZTogdGhpcy5wcm9wcy50aXRsZUluZm8uVGl0bGUsXG4gICAgICBZZWFyOiB0aGlzLnByb3BzLnRpdGxlSW5mby5ZZWFyLFxuICAgIH07XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaXRsZUNvbXBvbmVudFxuICAgICAgICAgIGluZm89e3RoaXMuaW5mb31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLnRpdGxlRXhwYW5kZWR9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXIuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbmZ1bmN0aW9uIFRpdGxlQ29tcG9uZW50IChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx0cj5cbiAgICAgIDx0ZD57cHJvcHMuaW5mby5pbWRiSUR9PC90ZD5cbiAgICAgIDx0ZD57cHJvcHMuaW5mby5UaXRsZX08L3RkPlxuICAgICAgPHRkPntwcm9wcy5pbmZvLlllYXJ9PC90ZD5cbiAgICAgIDx0ZD5UcnVlIC8gRmFsc2U8L3RkPlxuICAgIDwvdHI+XG4gIClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGl0bGVDb21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9