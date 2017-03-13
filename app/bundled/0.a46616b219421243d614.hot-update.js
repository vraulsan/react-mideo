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
      isExpanded: false,
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
      this.details = results.data;
      this.setState({
        isExpanded: true
      });
    }.bind(this));
  },
  render: function render() {
    return React.createElement(TitleComponent, {
      info: this.info,
      isExpanded: this.state.isExpanded,
      onExpandTitle: this.handleExpandTitle });
  }
});

module.exports = TitleContainer;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9NRGJIZWxwZXJzIiwiVGl0bGVDb21wb25lbnQiLCJUaXRsZUNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwiaXNFeHBhbmRlZCIsImlzRmF2b3JpdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJpbmZvIiwiaW1kYklEIiwicHJvcHMiLCJ0aXRsZUluZm8iLCJUaXRsZSIsIlllYXIiLCJoYW5kbGVFeHBhbmRUaXRsZSIsImUiLCJzZWFyY2hEZXRhaWxzIiwidGhlbiIsInJlc3VsdHMiLCJkZXRhaWxzIiwiZGF0YSIsInNldFN0YXRlIiwiYmluZCIsInJlbmRlciIsInN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLGNBQWMsbUJBQUFELENBQVEsRUFBUixDQUFsQjtBQUNBLElBQUlFLGlCQUFpQixtQkFBQUYsQ0FBUSxHQUFSLENBQXJCO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCOztBQUVBLElBQUlHLGlCQUFpQkosTUFBTUssV0FBTixDQUFrQjtBQUFBOztBQUNyQ0MsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU87QUFDTEMsa0JBQVksS0FEUDtBQUVMQyxrQkFBWTtBQUZQLEtBQVA7QUFJRCxHQU5vQztBQU9yQ0Msc0JBQW9CLDhCQUFZO0FBQzlCLFNBQUtDLElBQUwsR0FBWTtBQUNWQyxjQUFRLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkYsTUFEbkI7QUFFVkcsYUFBTyxLQUFLRixLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEtBRmxCO0FBR1ZDLFlBQU0sS0FBS0gsS0FBTCxDQUFXQyxTQUFYLENBQXFCRTtBQUhqQixLQUFaO0FBS0QsR0Fib0M7QUFjckNDLHFCQUFtQiwyQkFBVUMsQ0FBVixFQUFhO0FBQzlCZixnQkFBWWdCLGFBQVosQ0FBMEIsS0FBS1IsSUFBTCxDQUFVQyxNQUFwQyxFQUNHUSxJQURILENBQ1EsVUFBVUMsT0FBVixFQUFtQjtBQUN2QixXQUFLQyxPQUFMLEdBQWVELFFBQVFFLElBQXZCO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1poQixvQkFBWTtBQURBLE9BQWQ7QUFHRCxLQUxLLENBS0ppQixJQUxJLENBS0MsSUFMRCxDQURSO0FBT0QsR0F0Qm9DO0FBdUJyQ0MsVUFBUSxrQkFBWTtBQUNsQixXQUNJLG9CQUFDLGNBQUQ7QUFDRSxZQUFNLEtBQUtmLElBRGI7QUFFRSxrQkFBWSxLQUFLZ0IsS0FBTCxDQUFXbkIsVUFGekI7QUFHRSxxQkFBZSxLQUFLUyxpQkFIdEIsR0FESjtBQU1EO0FBOUJvQyxDQUFsQixDQUFyQjs7QUFpQ0FXLE9BQU9DLE9BQVAsR0FBaUJ4QixjQUFqQixDIiwiZmlsZSI6IjAuYTQ2NjE2YjIxOTQyMTI0M2Q2MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xudmFyIFRpdGxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudCcpO1xudmFyIE9NRGJIZWxwZXJzID0gcmVxdWlyZSgnLi4vdXRpbHMvT01EYkhlbHBlcnMnKTtcblxudmFyIFRpdGxlQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbmZvID0ge1xuICAgICAgaW1kYklEOiB0aGlzLnByb3BzLnRpdGxlSW5mby5pbWRiSUQsXG4gICAgICBUaXRsZTogdGhpcy5wcm9wcy50aXRsZUluZm8uVGl0bGUsXG4gICAgICBZZWFyOiB0aGlzLnByb3BzLnRpdGxlSW5mby5ZZWFyLFxuICAgIH1cbiAgfSxcbiAgaGFuZGxlRXhwYW5kVGl0bGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgT01EYkhlbHBlcnMuc2VhcmNoRGV0YWlscyh0aGlzLmluZm8uaW1kYklEKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gcmVzdWx0cy5kYXRhO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0V4cGFuZGVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcykpXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaXRsZUNvbXBvbmVudFxuICAgICAgICAgIGluZm89e3RoaXMuaW5mb31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXhwYW5kZWR9XG4gICAgICAgICAgb25FeHBhbmRUaXRsZT17dGhpcy5oYW5kbGVFeHBhbmRUaXRsZX0gLz5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaXRsZUNvbnRhaW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=