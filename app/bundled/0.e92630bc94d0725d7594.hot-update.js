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
      this.details = {
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
      };
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9NRGJIZWxwZXJzIiwiVGl0bGVDb21wb25lbnQiLCJUaXRsZUNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwidGl0bGVFeHBhbmRlZCIsImlzRmF2b3JpdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJpbmZvIiwiaW1kYklEIiwicHJvcHMiLCJ0aXRsZUluZm8iLCJUaXRsZSIsIlllYXIiLCJoYW5kbGVFeHBhbmRUaXRsZSIsImUiLCJzZWFyY2hEZXRhaWxzIiwidGhlbiIsInJlc3VsdHMiLCJkZXRhaWxzIiwiUmVsZWFzZWQiLCJkYXRhIiwiUnVudGltZSIsIkdlbnJlIiwiRGlyZWN0b3IiLCJXcml0ZXIiLCJBY3RvcnMiLCJQbG90IiwiTGFuZ3VhZ2UiLCJDb3VudHJ5IiwiQXdhcmRzIiwiUG9zdGVyIiwiTWV0YXNjb3JlIiwiaW1kYlJhdGluZyIsImltZGJWb3RlcyIsIlR5cGUiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsInJlbmRlciIsInN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLGNBQWMsbUJBQUFELENBQVEsRUFBUixDQUFsQjtBQUNBLElBQUlFLGlCQUFpQixtQkFBQUYsQ0FBUSxHQUFSLENBQXJCO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCOztBQUVBLElBQUlHLGlCQUFpQkosTUFBTUssV0FBTixDQUFrQjtBQUFBOztBQUNyQ0MsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU87QUFDTEMscUJBQWUsS0FEVjtBQUVMQyxrQkFBWTtBQUZQLEtBQVA7QUFJRCxHQU5vQztBQU9yQ0Msc0JBQW9CLDhCQUFZO0FBQzlCLFNBQUtDLElBQUwsR0FBWTtBQUNWQyxjQUFRLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkYsTUFEbkI7QUFFVkcsYUFBTyxLQUFLRixLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEtBRmxCO0FBR1ZDLFlBQU0sS0FBS0gsS0FBTCxDQUFXQyxTQUFYLENBQXFCRTtBQUhqQixLQUFaO0FBS0QsR0Fib0M7QUFjckNDLHFCQUFtQiwyQkFBVUMsQ0FBVixFQUFhO0FBQzlCZixnQkFBWWdCLGFBQVosQ0FBMEIsS0FBS1IsSUFBTCxDQUFVQyxNQUFwQyxFQUNHUSxJQURILENBQ1EsVUFBVUMsT0FBVixFQUFtQjtBQUN2QixXQUFLQyxPQUFMLEdBQWdCO0FBQ2RDLGtCQUFVRixRQUFRRyxJQUFSLENBQWFELFFBRFQ7QUFFZEUsaUJBQVNKLFFBQVFHLElBQVIsQ0FBYUMsT0FGUjtBQUdkQyxlQUFPTCxRQUFRRyxJQUFSLENBQWFFLEtBSE47QUFJZEMsa0JBQVVOLFFBQVFHLElBQVIsQ0FBYUcsUUFKVDtBQUtkQyxnQkFBUVAsUUFBUUcsSUFBUixDQUFhSSxNQUxQO0FBTWRDLGdCQUFRUixRQUFRRyxJQUFSLENBQWFLLE1BTlA7QUFPZEMsY0FBTVQsUUFBUUcsSUFBUixDQUFhTSxJQVBMO0FBUWRDLGtCQUFVVixRQUFRRyxJQUFSLENBQWFPLFFBUlQ7QUFTZEMsaUJBQVNYLFFBQVFHLElBQVIsQ0FBYVEsT0FUUjtBQVVkQyxnQkFBUVosUUFBUUcsSUFBUixDQUFhUyxNQVZQO0FBV2RDLGdCQUFRYixRQUFRRyxJQUFSLENBQWFVLE1BWFA7QUFZZEMsbUJBQVdkLFFBQVFHLElBQVIsQ0FBYVcsU0FaVjtBQWFkQyxvQkFBWWYsUUFBUUcsSUFBUixDQUFhWSxVQWJYO0FBY2RDLG1CQUFXaEIsUUFBUUcsSUFBUixDQUFhYSxTQWRWO0FBZWRDLGNBQU1qQixRQUFRRyxJQUFSLENBQWFjO0FBZkwsT0FBaEI7QUFpQkFDLGNBQVFDLEdBQVIsQ0FBWW5CLFFBQVFHLElBQXBCO0FBQ0QsS0FuQkssQ0FtQkppQixJQW5CSSxDQW1CQyxJQW5CRCxDQURSO0FBcUJELEdBcENvQztBQXFDckNDLFVBQVEsa0JBQVk7QUFDbEIsV0FDSSxvQkFBQyxjQUFEO0FBQ0UsWUFBTSxLQUFLL0IsSUFEYjtBQUVFLGtCQUFZLEtBQUtnQyxLQUFMLENBQVduQyxhQUZ6QjtBQUdFLHFCQUFlLEtBQUtTLGlCQUh0QixHQURKO0FBTUQ7QUE1Q29DLENBQWxCLENBQXJCOztBQStDQTJCLE9BQU9DLE9BQVAsR0FBaUJ4QyxjQUFqQixDIiwiZmlsZSI6IjAuZTkyNjMwYmM5NGQwNzI1ZDc1OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xudmFyIFRpdGxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudCcpO1xudmFyIE9NRGJIZWxwZXJzID0gcmVxdWlyZSgnLi4vdXRpbHMvT01EYkhlbHBlcnMnKTtcblxudmFyIFRpdGxlQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGVFeHBhbmRlZDogZmFsc2UsXG4gICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbmZvID0ge1xuICAgICAgaW1kYklEOiB0aGlzLnByb3BzLnRpdGxlSW5mby5pbWRiSUQsXG4gICAgICBUaXRsZTogdGhpcy5wcm9wcy50aXRsZUluZm8uVGl0bGUsXG4gICAgICBZZWFyOiB0aGlzLnByb3BzLnRpdGxlSW5mby5ZZWFyLFxuICAgIH1cbiAgfSxcbiAgaGFuZGxlRXhwYW5kVGl0bGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgT01EYkhlbHBlcnMuc2VhcmNoRGV0YWlscyh0aGlzLmluZm8uaW1kYklEKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gKHtcbiAgICAgICAgICBSZWxlYXNlZDogcmVzdWx0cy5kYXRhLlJlbGVhc2VkLFxuICAgICAgICAgIFJ1bnRpbWU6IHJlc3VsdHMuZGF0YS5SdW50aW1lLFxuICAgICAgICAgIEdlbnJlOiByZXN1bHRzLmRhdGEuR2VucmUsXG4gICAgICAgICAgRGlyZWN0b3I6IHJlc3VsdHMuZGF0YS5EaXJlY3RvcixcbiAgICAgICAgICBXcml0ZXI6IHJlc3VsdHMuZGF0YS5Xcml0ZXIsXG4gICAgICAgICAgQWN0b3JzOiByZXN1bHRzLmRhdGEuQWN0b3JzLFxuICAgICAgICAgIFBsb3Q6IHJlc3VsdHMuZGF0YS5QbG90LFxuICAgICAgICAgIExhbmd1YWdlOiByZXN1bHRzLmRhdGEuTGFuZ3VhZ2UsXG4gICAgICAgICAgQ291bnRyeTogcmVzdWx0cy5kYXRhLkNvdW50cnksXG4gICAgICAgICAgQXdhcmRzOiByZXN1bHRzLmRhdGEuQXdhcmRzLFxuICAgICAgICAgIFBvc3RlcjogcmVzdWx0cy5kYXRhLlBvc3RlcixcbiAgICAgICAgICBNZXRhc2NvcmU6IHJlc3VsdHMuZGF0YS5NZXRhc2NvcmUsXG4gICAgICAgICAgaW1kYlJhdGluZzogcmVzdWx0cy5kYXRhLmltZGJSYXRpbmcsXG4gICAgICAgICAgaW1kYlZvdGVzOiByZXN1bHRzLmRhdGEuaW1kYlZvdGVzLFxuICAgICAgICAgIFR5cGU6IHJlc3VsdHMuZGF0YS5UeXBlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmRhdGEpXG4gICAgICB9LmJpbmQodGhpcykpXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaXRsZUNvbXBvbmVudFxuICAgICAgICAgIGluZm89e3RoaXMuaW5mb31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLnRpdGxlRXhwYW5kZWR9XG4gICAgICAgICAgb25FeHBhbmRUaXRsZT17dGhpcy5oYW5kbGVFeHBhbmRUaXRsZX0gLz5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaXRsZUNvbnRhaW5lcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=