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
      /**this.details = ({
        Released: results.data.Released,
        Runtime: results.data.Runtime,
        Genre: results.data.Genre,
        Director: results.data.Director,
        Writer: results.data.Writer,
        Actors: results.data.Actors,
        Plot: results.data.Plot,
        Language: results.data.Language,
        Country: results.data.Country,
        Awards: results.data.Awards,
        Poster: results.data.Poster,
        Metascore: results.data.Metascore,
        imdbRating: results.data.imdbRating,
        imdbVotes: results.data.imdbVotes,
        Type: results.data.Type
      });**/
      this.details = results.data;
      console.log(this.details);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9NRGJIZWxwZXJzIiwiVGl0bGVDb21wb25lbnQiLCJUaXRsZUNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwidGl0bGVFeHBhbmRlZCIsImlzRmF2b3JpdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJpbmZvIiwiaW1kYklEIiwicHJvcHMiLCJ0aXRsZUluZm8iLCJUaXRsZSIsIlllYXIiLCJoYW5kbGVFeHBhbmRUaXRsZSIsImUiLCJzZWFyY2hEZXRhaWxzIiwidGhlbiIsInJlc3VsdHMiLCJkZXRhaWxzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwicmVuZGVyIiwic3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCO0FBQ0EsSUFBSUUsaUJBQWlCLG1CQUFBRixDQUFRLEdBQVIsQ0FBckI7QUFDQSxJQUFJQyxjQUFjLG1CQUFBRCxDQUFRLEVBQVIsQ0FBbEI7O0FBRUEsSUFBSUcsaUJBQWlCSixNQUFNSyxXQUFOLENBQWtCO0FBQUE7O0FBQ3JDQyxtQkFBaUIsMkJBQVk7QUFDM0IsV0FBTztBQUNMQyxxQkFBZSxLQURWO0FBRUxDLGtCQUFZO0FBRlAsS0FBUDtBQUlELEdBTm9DO0FBT3JDQyxzQkFBb0IsOEJBQVk7QUFDOUIsU0FBS0MsSUFBTCxHQUFZO0FBQ1ZDLGNBQVEsS0FBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCRixNQURuQjtBQUVWRyxhQUFPLEtBQUtGLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsS0FGbEI7QUFHVkMsWUFBTSxLQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJFO0FBSGpCLEtBQVo7QUFLRCxHQWJvQztBQWNyQ0MscUJBQW1CLDJCQUFVQyxDQUFWLEVBQWE7QUFDOUJmLGdCQUFZZ0IsYUFBWixDQUEwQixLQUFLUixJQUFMLENBQVVDLE1BQXBDLEVBQ0dRLElBREgsQ0FDUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxXQUFLQyxPQUFMLEdBQWVELFFBQVFFLElBQXZCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLSCxPQUFqQjtBQUNELEtBcEJLLENBb0JKSSxJQXBCSSxDQW9CQyxJQXBCRCxDQURSO0FBc0JELEdBckNvQztBQXNDckNDLFVBQVEsa0JBQVk7QUFDbEIsV0FDSSxvQkFBQyxjQUFEO0FBQ0UsWUFBTSxLQUFLaEIsSUFEYjtBQUVFLGtCQUFZLEtBQUtpQixLQUFMLENBQVdwQixhQUZ6QjtBQUdFLHFCQUFlLEtBQUtTLGlCQUh0QixHQURKO0FBTUQ7QUE3Q29DLENBQWxCLENBQXJCOztBQWdEQVksT0FBT0MsT0FBUCxHQUFpQnpCLGNBQWpCLEMiLCJmaWxlIjoiMC4xYjZlOTI4ODc2ZTFkZDg0ZTZjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBPTURiSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL09NRGJIZWxwZXJzJyk7XG52YXIgVGl0bGVDb21wb25lbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xuXG52YXIgVGl0bGVDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZUV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluZm8gPSB7XG4gICAgICBpbWRiSUQ6IHRoaXMucHJvcHMudGl0bGVJbmZvLmltZGJJRCxcbiAgICAgIFRpdGxlOiB0aGlzLnByb3BzLnRpdGxlSW5mby5UaXRsZSxcbiAgICAgIFllYXI6IHRoaXMucHJvcHMudGl0bGVJbmZvLlllYXIsXG4gICAgfVxuICB9LFxuICBoYW5kbGVFeHBhbmRUaXRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICBPTURiSGVscGVycy5zZWFyY2hEZXRhaWxzKHRoaXMuaW5mby5pbWRiSUQpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAvKip0aGlzLmRldGFpbHMgPSAoe1xuICAgICAgICAgIFJlbGVhc2VkOiByZXN1bHRzLmRhdGEuUmVsZWFzZWQsXG4gICAgICAgICAgUnVudGltZTogcmVzdWx0cy5kYXRhLlJ1bnRpbWUsXG4gICAgICAgICAgR2VucmU6IHJlc3VsdHMuZGF0YS5HZW5yZSxcbiAgICAgICAgICBEaXJlY3RvcjogcmVzdWx0cy5kYXRhLkRpcmVjdG9yLFxuICAgICAgICAgIFdyaXRlcjogcmVzdWx0cy5kYXRhLldyaXRlcixcbiAgICAgICAgICBBY3RvcnM6IHJlc3VsdHMuZGF0YS5BY3RvcnMsXG4gICAgICAgICAgUGxvdDogcmVzdWx0cy5kYXRhLlBsb3QsXG4gICAgICAgICAgTGFuZ3VhZ2U6IHJlc3VsdHMuZGF0YS5MYW5ndWFnZSxcbiAgICAgICAgICBDb3VudHJ5OiByZXN1bHRzLmRhdGEuQ291bnRyeSxcbiAgICAgICAgICBBd2FyZHM6IHJlc3VsdHMuZGF0YS5Bd2FyZHMsXG4gICAgICAgICAgUG9zdGVyOiByZXN1bHRzLmRhdGEuUG9zdGVyLFxuICAgICAgICAgIE1ldGFzY29yZTogcmVzdWx0cy5kYXRhLk1ldGFzY29yZSxcbiAgICAgICAgICBpbWRiUmF0aW5nOiByZXN1bHRzLmRhdGEuaW1kYlJhdGluZyxcbiAgICAgICAgICBpbWRiVm90ZXM6IHJlc3VsdHMuZGF0YS5pbWRiVm90ZXMsXG4gICAgICAgICAgVHlwZTogcmVzdWx0cy5kYXRhLlR5cGVcbiAgICAgICAgfSk7KiovXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IHJlc3VsdHMuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZXRhaWxzKVxuICAgICAgfS5iaW5kKHRoaXMpKVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGl0bGVDb21wb25lbnRcbiAgICAgICAgICBpbmZvPXt0aGlzLmluZm99XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS50aXRsZUV4cGFuZGVkfVxuICAgICAgICAgIG9uRXhwYW5kVGl0bGU9e3RoaXMuaGFuZGxlRXhwYW5kVGl0bGV9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9