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
    }, this.details = {};
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
      onExpandTitle: this.handleExpandTitle,
      details: this.details
    });
  }
});

module.exports = TitleContainer;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(21);

function TitleComponent(props) {
  if (props.isExpanded) {
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        React.createElement('img', { className: 'img-rounded img-responve', src: props.details.Poster })
      ),
      React.createElement(
        'td',
        null,
        props.info.Title,
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            props.details.Released
          ),
          React.createElement(
            'li',
            null,
            props.details.Runtime
          ),
          React.createElement(
            'li',
            null,
            props.details.Director
          ),
          React.createElement(
            'li',
            null,
            props.details.Actors
          )
        )
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
  } else {
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
};

module.exports = TitleComponent;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50LmpzPzc5OTgiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT01EYkhlbHBlcnMiLCJUaXRsZUNvbXBvbmVudCIsIlRpdGxlQ29udGFpbmVyIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJpc0V4cGFuZGVkIiwiaXNGYXZvcml0ZSIsImNvbXBvbmVudFdpbGxNb3VudCIsImluZm8iLCJpbWRiSUQiLCJwcm9wcyIsInRpdGxlSW5mbyIsIlRpdGxlIiwiWWVhciIsImRldGFpbHMiLCJoYW5kbGVFeHBhbmRUaXRsZSIsImUiLCJzZWFyY2hEZXRhaWxzIiwidGhlbiIsInJlc3VsdHMiLCJkYXRhIiwic2V0U3RhdGUiLCJiaW5kIiwicmVuZGVyIiwic3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiUG9zdGVyIiwiUmVsZWFzZWQiLCJSdW50aW1lIiwiRGlyZWN0b3IiLCJBY3RvcnMiLCJvbkV4cGFuZFRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCO0FBQ0EsSUFBSUUsaUJBQWlCLG1CQUFBRixDQUFRLEdBQVIsQ0FBckI7QUFDQSxJQUFJQyxjQUFjLG1CQUFBRCxDQUFRLEVBQVIsQ0FBbEI7O0FBRUEsSUFBSUcsaUJBQWlCSixNQUFNSyxXQUFOLENBQWtCO0FBQUE7O0FBQ3JDQyxtQkFBaUIsMkJBQVk7QUFDM0IsV0FBTztBQUNMQyxrQkFBWSxLQURQO0FBRUxDLGtCQUFZO0FBRlAsS0FBUDtBQUlELEdBTm9DO0FBT3JDQyxzQkFBb0IsOEJBQVk7QUFDOUIsU0FBS0MsSUFBTCxHQUFZO0FBQ1ZDLGNBQVEsS0FBS0MsS0FBTCxDQUFXQyxTQUFYLENBQXFCRixNQURuQjtBQUVWRyxhQUFPLEtBQUtGLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkMsS0FGbEI7QUFHVkMsWUFBTSxLQUFLSCxLQUFMLENBQVdDLFNBQVgsQ0FBcUJFO0FBSGpCLEtBQVosRUFLQSxLQUFLQyxPQUFMLEdBQWUsRUFMZjtBQU1ELEdBZG9DO0FBZXJDQyxxQkFBbUIsMkJBQVVDLENBQVYsRUFBYTtBQUM5QmhCLGdCQUFZaUIsYUFBWixDQUEwQixLQUFLVCxJQUFMLENBQVVDLE1BQXBDLEVBQ0dTLElBREgsQ0FDUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCLFdBQUtMLE9BQUwsR0FBZUssUUFBUUMsSUFBdkI7QUFDQSxXQUFLQyxRQUFMLENBQWM7QUFDWmhCLG9CQUFZO0FBREEsT0FBZDtBQUdELEtBTEssQ0FLSmlCLElBTEksQ0FLQyxJQUxELENBRFI7QUFPRCxHQXZCb0M7QUF3QnJDQyxVQUFRLGtCQUFZO0FBQ2xCLFdBQ0ksb0JBQUMsY0FBRDtBQUNFLFlBQU0sS0FBS2YsSUFEYjtBQUVFLGtCQUFZLEtBQUtnQixLQUFMLENBQVduQixVQUZ6QjtBQUdFLHFCQUFlLEtBQUtVLGlCQUh0QjtBQUlFLGVBQVMsS0FBS0Q7QUFKaEIsTUFESjtBQVFEO0FBakNvQyxDQUFsQixDQUFyQjs7QUFvQ0FXLE9BQU9DLE9BQVAsR0FBaUJ4QixjQUFqQixDOzs7Ozs7Ozs7O0FDekNBLElBQUlKLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaOztBQUdBLFNBQVNFLGNBQVQsQ0FBeUJTLEtBQXpCLEVBQWdDO0FBQzlCLE1BQUlBLE1BQU1MLFVBQVYsRUFBc0I7QUFDcEIsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSSxxQ0FBSyxXQUFVLDBCQUFmLEVBQTBDLEtBQUtLLE1BQU1JLE9BQU4sQ0FBY2EsTUFBN0Q7QUFBSixPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtqQixjQUFNRixJQUFOLENBQVdJLEtBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtGLGtCQUFNSSxPQUFOLENBQWNjO0FBQW5CLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBS2xCLGtCQUFNSSxPQUFOLENBQWNlO0FBQW5CLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBS25CLGtCQUFNSSxPQUFOLENBQWNnQjtBQUFuQixXQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUtwQixrQkFBTUksT0FBTixDQUFjaUI7QUFBbkI7QUFKRjtBQURGLE9BRkY7QUFVRTtBQUFBO0FBQUE7QUFBS3JCLGNBQU1GLElBQU4sQ0FBV0s7QUFBaEIsT0FWRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRixLQURGO0FBZUQsR0FoQkQsTUFnQk87QUFDTCxXQUNFO0FBQUE7QUFBQSxRQUFJLFNBQVNILE1BQU1zQixhQUFuQjtBQUNFO0FBQUE7QUFBQTtBQUFLdEIsY0FBTUYsSUFBTixDQUFXQztBQUFoQixPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtDLGNBQU1GLElBQU4sQ0FBV0k7QUFBaEIsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFLRixjQUFNRixJQUFOLENBQVdLO0FBQWhCLE9BSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsS0FERjtBQVFEO0FBQ0Y7O0FBRURZLE9BQU9DLE9BQVAsR0FBaUJ6QixjQUFqQixDIiwiZmlsZSI6IjAuY2I4NDhlZDIxOWExMmEyOThiMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xudmFyIFRpdGxlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudCcpO1xudmFyIE9NRGJIZWxwZXJzID0gcmVxdWlyZSgnLi4vdXRpbHMvT01EYkhlbHBlcnMnKTtcblxudmFyIFRpdGxlQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgICBpc0Zhdm9yaXRlOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbmZvID0ge1xuICAgICAgaW1kYklEOiB0aGlzLnByb3BzLnRpdGxlSW5mby5pbWRiSUQsXG4gICAgICBUaXRsZTogdGhpcy5wcm9wcy50aXRsZUluZm8uVGl0bGUsXG4gICAgICBZZWFyOiB0aGlzLnByb3BzLnRpdGxlSW5mby5ZZWFyLFxuICAgIH0sXG4gICAgdGhpcy5kZXRhaWxzID0ge31cbiAgfSxcbiAgaGFuZGxlRXhwYW5kVGl0bGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgT01EYkhlbHBlcnMuc2VhcmNoRGV0YWlscyh0aGlzLmluZm8uaW1kYklEKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gcmVzdWx0cy5kYXRhO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0V4cGFuZGVkOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcykpXG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxUaXRsZUNvbXBvbmVudFxuICAgICAgICAgIGluZm89e3RoaXMuaW5mb31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXhwYW5kZWR9XG4gICAgICAgICAgb25FeHBhbmRUaXRsZT17dGhpcy5oYW5kbGVFeHBhbmRUaXRsZX1cbiAgICAgICAgICBkZXRhaWxzPXt0aGlzLmRldGFpbHN9XG4gICAgICAgICAgIC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb250YWluZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXIuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5cbmZ1bmN0aW9uIFRpdGxlQ29tcG9uZW50IChwcm9wcykge1xuICBpZiAocHJvcHMuaXNFeHBhbmRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0naW1nLXJvdW5kZWQgaW1nLXJlc3BvbnZlJyBzcmM9e3Byb3BzLmRldGFpbHMuUG9zdGVyfSAvPjwvdGQ+XG4gICAgICAgIDx0ZD57cHJvcHMuaW5mby5UaXRsZX1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+e3Byb3BzLmRldGFpbHMuUmVsZWFzZWR9PC9saT5cbiAgICAgICAgICAgIDxsaT57cHJvcHMuZGV0YWlscy5SdW50aW1lfTwvbGk+XG4gICAgICAgICAgICA8bGk+e3Byb3BzLmRldGFpbHMuRGlyZWN0b3J9PC9saT5cbiAgICAgICAgICAgIDxsaT57cHJvcHMuZGV0YWlscy5BY3RvcnN9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+e3Byb3BzLmluZm8uWWVhcn08L3RkPlxuICAgICAgICA8dGQ+VHJ1ZSAvIEZhbHNlPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8dHIgb25DbGljaz17cHJvcHMub25FeHBhbmRUaXRsZX0+XG4gICAgICAgIDx0ZD57cHJvcHMuaW5mby5pbWRiSUR9PC90ZD5cbiAgICAgICAgPHRkPntwcm9wcy5pbmZvLlRpdGxlfTwvdGQ+XG4gICAgICAgIDx0ZD57cHJvcHMuaW5mby5ZZWFyfTwvdGQ+XG4gICAgICAgIDx0ZD5UcnVlIC8gRmFsc2U8L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpdGxlQ29tcG9uZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==