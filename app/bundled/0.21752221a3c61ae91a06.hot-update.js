webpackHotUpdate(0,{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(21);
var OMDbHelpers = __webpack_require__(81);
var TitleComponent = __webpack_require__(302);
var OMDbHelpers = __webpack_require__(81);

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
    OMDbHelpers.searchDetails(this.info.imdbID).then(function (results) {
      //this.details = ({
      //Released:
      //});
      console.log(results.data);
    }.bind(this));
  },
  render: function render() {
    return React.createElement(TitleComponent, {
      info: this.info,
      isExpanded: this.state.titleExpanded,
      onExpandTitle: this.handleExpandTitle });
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
    { onClick: props.onExpandTitle },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50LmpzPzc5OTgiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT01EYkhlbHBlcnMiLCJUaXRsZUNvbXBvbmVudCIsIlRpdGxlQ29udGFpbmVyIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJ0aXRsZUV4cGFuZGVkIiwiaXNGYXZvcml0ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImluZm8iLCJpbWRiSUQiLCJwcm9wcyIsInRpdGxlSW5mbyIsIlRpdGxlIiwiWWVhciIsImhhbmRsZUV4cGFuZFRpdGxlIiwiZSIsInNlYXJjaERldGFpbHMiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYmluZCIsInJlbmRlciIsInN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9uRXhwYW5kVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7QUFDQSxJQUFJQyxjQUFjLG1CQUFBRCxDQUFRLEVBQVIsQ0FBbEI7QUFDQSxJQUFJRSxpQkFBaUIsbUJBQUFGLENBQVEsR0FBUixDQUFyQjtBQUNBLElBQUlDLGNBQWMsbUJBQUFELENBQVEsRUFBUixDQUFsQjs7QUFFQSxJQUFJRyxpQkFBaUJKLE1BQU1LLFdBQU4sQ0FBa0I7QUFBQTs7QUFDckNDLG1CQUFpQiwyQkFBWTtBQUMzQixXQUFPO0FBQ0xDLHFCQUFlLEtBRFY7QUFFTEMsa0JBQVk7QUFGUCxLQUFQO0FBSUQsR0FOb0M7QUFPckNDLHNCQUFvQiw4QkFBWTtBQUM5QixTQUFLQyxJQUFMLEdBQVk7QUFDVkMsY0FBUSxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJGLE1BRG5CO0FBRVZHLGFBQU8sS0FBS0YsS0FBTCxDQUFXQyxTQUFYLENBQXFCQyxLQUZsQjtBQUdWQyxZQUFNLEtBQUtILEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkU7QUFIakIsS0FBWjtBQUtELEdBYm9DO0FBY3JDQyxxQkFBbUIsMkJBQVVDLENBQVYsRUFBYTtBQUM5QmYsZ0JBQVlnQixhQUFaLENBQTBCLEtBQUtSLElBQUwsQ0FBVUMsTUFBcEMsRUFDR1EsSUFESCxDQUNRLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkI7QUFDRTtBQUNGO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWUYsUUFBUUcsSUFBcEI7QUFDRCxLQUxLLENBS0pDLElBTEksQ0FLQyxJQUxELENBRFI7QUFPRCxHQXRCb0M7QUF1QnJDQyxVQUFRLGtCQUFZO0FBQ2xCLFdBQ0ksb0JBQUMsY0FBRDtBQUNFLFlBQU0sS0FBS2YsSUFEYjtBQUVFLGtCQUFZLEtBQUtnQixLQUFMLENBQVduQixhQUZ6QjtBQUdFLHFCQUFlLEtBQUtTLGlCQUh0QixHQURKO0FBTUQ7QUE5Qm9DLENBQWxCLENBQXJCOztBQWlDQVcsT0FBT0MsT0FBUCxHQUFpQnhCLGNBQWpCLEM7Ozs7Ozs7Ozs7QUN0Q0EsSUFBSUosUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7O0FBR0EsU0FBU0UsY0FBVCxDQUF5QlMsS0FBekIsRUFBZ0M7QUFDOUIsU0FDRTtBQUFBO0FBQUEsTUFBSSxTQUFTQSxNQUFNaUIsYUFBbkI7QUFDRTtBQUFBO0FBQUE7QUFBS2pCLFlBQU1GLElBQU4sQ0FBV0M7QUFBaEIsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLQyxZQUFNRixJQUFOLENBQVdJO0FBQWhCLEtBRkY7QUFHRTtBQUFBO0FBQUE7QUFBS0YsWUFBTUYsSUFBTixDQUFXSztBQUFoQixLQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLEdBREY7QUFRRDs7QUFFRFksT0FBT0MsT0FBUCxHQUFpQnpCLGNBQWpCLEMiLCJmaWxlIjoiMC4yMTc1MjIyMWEzYzYxYWU5MWEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBPTURiSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL09NRGJIZWxwZXJzJyk7XG52YXIgVGl0bGVDb21wb25lbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xuXG52YXIgVGl0bGVDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZUV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluZm8gPSB7XG4gICAgICBpbWRiSUQ6IHRoaXMucHJvcHMudGl0bGVJbmZvLmltZGJJRCxcbiAgICAgIFRpdGxlOiB0aGlzLnByb3BzLnRpdGxlSW5mby5UaXRsZSxcbiAgICAgIFllYXI6IHRoaXMucHJvcHMudGl0bGVJbmZvLlllYXIsXG4gICAgfVxuICB9LFxuICBoYW5kbGVFeHBhbmRUaXRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICBPTURiSGVscGVycy5zZWFyY2hEZXRhaWxzKHRoaXMuaW5mby5pbWRiSUQpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAvL3RoaXMuZGV0YWlscyA9ICh7XG4gICAgICAgICAgLy9SZWxlYXNlZDpcbiAgICAgICAgLy99KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5kYXRhKVxuICAgICAgfS5iaW5kKHRoaXMpKVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGl0bGVDb21wb25lbnRcbiAgICAgICAgICBpbmZvPXt0aGlzLmluZm99XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS50aXRsZUV4cGFuZGVkfVxuICAgICAgICAgIG9uRXhwYW5kVGl0bGU9e3RoaXMuaGFuZGxlRXhwYW5kVGl0bGV9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXIuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbmZ1bmN0aW9uIFRpdGxlQ29tcG9uZW50IChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx0ciBvbkNsaWNrPXtwcm9wcy5vbkV4cGFuZFRpdGxlfT5cbiAgICAgIDx0ZD57cHJvcHMuaW5mby5pbWRiSUR9PC90ZD5cbiAgICAgIDx0ZD57cHJvcHMuaW5mby5UaXRsZX08L3RkPlxuICAgICAgPHRkPntwcm9wcy5pbmZvLlllYXJ9PC90ZD5cbiAgICAgIDx0ZD5UcnVlIC8gRmFsc2U8L3RkPlxuICAgIDwvdHI+XG4gIClcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGl0bGVDb21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9