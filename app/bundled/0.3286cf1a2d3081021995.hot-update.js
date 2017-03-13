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
      console.log('details :', this.details);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9NRGJIZWxwZXJzIiwiVGl0bGVDb21wb25lbnQiLCJUaXRsZUNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwidGl0bGVFeHBhbmRlZCIsImlzRmF2b3JpdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJpbmZvIiwiaW1kYklEIiwicHJvcHMiLCJ0aXRsZUluZm8iLCJUaXRsZSIsIlllYXIiLCJoYW5kbGVFeHBhbmRUaXRsZSIsImUiLCJzZWFyY2hEZXRhaWxzIiwidGhlbiIsInJlc3VsdHMiLCJkZXRhaWxzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJiaW5kIiwicmVuZGVyIiwic3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCO0FBQ0EsSUFBSUUsaUJBQWlCLG1CQUFBRixDQUFRLEdBQVIsQ0FBckI7QUFDQSxJQUFJQyxjQUFjLG1CQUFBRCxDQUFRLEVBQVIsQ0FBbEI7O0FBRUEsSUFBSUcsaUJBQWlCSixNQUFNSyxXQUFOLENBQWtCO0FBQUE7O0FBQ3JDQyxtQkFBaUIsMkJBQVk7QUFDM0IsV0FBTztBQUNMQyxxQkFBZSxLQURWO0FBRUxDLGtCQUFZO0FBRlAsS0FBUDtBQUlELEdBTm9DO0FBT3JDQyxzQkFBb0IsOEJBQVk7QUFDOUIsU0FBS0MsSUFBTCxHQUFZO0FBQ1ZDLGNBQVEsS0FBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCRixNQURuQjtBQUVWRyxhQUFPLEtBQUtGLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsS0FGbEI7QUFHVkMsWUFBTSxLQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJFO0FBSGpCLEtBQVo7QUFLRCxHQWJvQztBQWNyQ0MscUJBQW1CLDJCQUFVQyxDQUFWLEVBQWE7QUFDOUJmLGdCQUFZZ0IsYUFBWixDQUEwQixLQUFLUixJQUFMLENBQVVDLE1BQXBDLEVBQ0dRLElBREgsQ0FDUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxXQUFLQyxPQUFMLEdBQWVELFFBQVFFLElBQXZCO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLEtBQUtILE9BQTlCO0FBQ0QsS0FwQkssQ0FvQkpJLElBcEJJLENBb0JDLElBcEJELENBRFI7QUFzQkQsR0FyQ29DO0FBc0NyQ0MsVUFBUSxrQkFBWTtBQUNsQixXQUNJLG9CQUFDLGNBQUQ7QUFDRSxZQUFNLEtBQUtoQixJQURiO0FBRUUsa0JBQVksS0FBS2lCLEtBQUwsQ0FBV3BCLGFBRnpCO0FBR0UscUJBQWUsS0FBS1MsaUJBSHRCLEdBREo7QUFNRDtBQTdDb0MsQ0FBbEIsQ0FBckI7O0FBZ0RBWSxPQUFPQyxPQUFQLEdBQWlCekIsY0FBakIsQyIsImZpbGUiOiIwLjMyODZjZjFhMmQzMDgxMDIxOTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE9NRGJIZWxwZXJzID0gcmVxdWlyZSgnLi4vdXRpbHMvT01EYkhlbHBlcnMnKTtcbnZhciBUaXRsZUNvbXBvbmVudCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvVGl0bGVDb21wb25lbnQnKTtcbnZhciBPTURiSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL09NRGJIZWxwZXJzJyk7XG5cbnZhciBUaXRsZUNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlRXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgaXNGYXZvcml0ZTogZmFsc2VcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5mbyA9IHtcbiAgICAgIGltZGJJRDogdGhpcy5wcm9wcy50aXRsZUluZm8uaW1kYklELFxuICAgICAgVGl0bGU6IHRoaXMucHJvcHMudGl0bGVJbmZvLlRpdGxlLFxuICAgICAgWWVhcjogdGhpcy5wcm9wcy50aXRsZUluZm8uWWVhcixcbiAgICB9XG4gIH0sXG4gIGhhbmRsZUV4cGFuZFRpdGxlOiBmdW5jdGlvbiAoZSkge1xuICAgIE9NRGJIZWxwZXJzLnNlYXJjaERldGFpbHModGhpcy5pbmZvLmltZGJJRClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgIC8qKnRoaXMuZGV0YWlscyA9ICh7XG4gICAgICAgICAgUmVsZWFzZWQ6IHJlc3VsdHMuZGF0YS5SZWxlYXNlZCxcbiAgICAgICAgICBSdW50aW1lOiByZXN1bHRzLmRhdGEuUnVudGltZSxcbiAgICAgICAgICBHZW5yZTogcmVzdWx0cy5kYXRhLkdlbnJlLFxuICAgICAgICAgIERpcmVjdG9yOiByZXN1bHRzLmRhdGEuRGlyZWN0b3IsXG4gICAgICAgICAgV3JpdGVyOiByZXN1bHRzLmRhdGEuV3JpdGVyLFxuICAgICAgICAgIEFjdG9yczogcmVzdWx0cy5kYXRhLkFjdG9ycyxcbiAgICAgICAgICBQbG90OiByZXN1bHRzLmRhdGEuUGxvdCxcbiAgICAgICAgICBMYW5ndWFnZTogcmVzdWx0cy5kYXRhLkxhbmd1YWdlLFxuICAgICAgICAgIENvdW50cnk6IHJlc3VsdHMuZGF0YS5Db3VudHJ5LFxuICAgICAgICAgIEF3YXJkczogcmVzdWx0cy5kYXRhLkF3YXJkcyxcbiAgICAgICAgICBQb3N0ZXI6IHJlc3VsdHMuZGF0YS5Qb3N0ZXIsXG4gICAgICAgICAgTWV0YXNjb3JlOiByZXN1bHRzLmRhdGEuTWV0YXNjb3JlLFxuICAgICAgICAgIGltZGJSYXRpbmc6IHJlc3VsdHMuZGF0YS5pbWRiUmF0aW5nLFxuICAgICAgICAgIGltZGJWb3RlczogcmVzdWx0cy5kYXRhLmltZGJWb3RlcyxcbiAgICAgICAgICBUeXBlOiByZXN1bHRzLmRhdGEuVHlwZVxuICAgICAgICB9KTsqKi9cbiAgICAgICAgdGhpcy5kZXRhaWxzID0gcmVzdWx0cy5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZygnZGV0YWlscyA6JywgdGhpcy5kZXRhaWxzKVxuICAgICAgfS5iaW5kKHRoaXMpKVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VGl0bGVDb21wb25lbnRcbiAgICAgICAgICBpbmZvPXt0aGlzLmluZm99XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS50aXRsZUV4cGFuZGVkfVxuICAgICAgICAgIG9uRXhwYW5kVGl0bGU9e3RoaXMuaGFuZGxlRXhwYW5kVGl0bGV9IC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9