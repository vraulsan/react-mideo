webpackHotUpdate(0,{

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(21);
var styles = __webpack_require__(303);

function TitleComponent(props) {
  if (props.isExpanded) {
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        React.createElement('img', { className: 'img-rounded img-responve', src: props.details.Poster, style: styles.posterStyle })
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

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styles = {
  paddingRight: {
    padding: '0px 10px 0px 0px'
  },
  posterStyle: {
    height: '250px'
  }
};

module.exports = styles;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudC5qcz83OTk4Iiwid2VicGFjazovLy8uL2FwcC9jc3MvY3VzdG9tU3R5bGVzLmpzP2IxYzkiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwic3R5bGVzIiwiVGl0bGVDb21wb25lbnQiLCJwcm9wcyIsImlzRXhwYW5kZWQiLCJkZXRhaWxzIiwiUG9zdGVyIiwicG9zdGVyU3R5bGUiLCJpbmZvIiwiVGl0bGUiLCJSZWxlYXNlZCIsIlJ1bnRpbWUiLCJEaXJlY3RvciIsIkFjdG9ycyIsIlllYXIiLCJvbkV4cGFuZFRpdGxlIiwiaW1kYklEIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmciLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7QUFDQSxJQUFJQyxTQUFTLG1CQUFBRCxDQUFRLEdBQVIsQ0FBYjs7QUFHQSxTQUFTRSxjQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixNQUFJQSxNQUFNQyxVQUFWLEVBQXNCO0FBQ3BCLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUkscUNBQUssV0FBVSwwQkFBZixFQUEwQyxLQUFLRCxNQUFNRSxPQUFOLENBQWNDLE1BQTdELEVBQXFFLE9BQU9MLE9BQU9NLFdBQW5GO0FBQUosT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLSixjQUFNSyxJQUFOLENBQVdDLEtBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtOLGtCQUFNRSxPQUFOLENBQWNLO0FBQW5CLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBS1Asa0JBQU1FLE9BQU4sQ0FBY007QUFBbkIsV0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFLUixrQkFBTUUsT0FBTixDQUFjTztBQUFuQixXQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUtULGtCQUFNRSxPQUFOLENBQWNRO0FBQW5CO0FBSkY7QUFERixPQUZGO0FBVUU7QUFBQTtBQUFBO0FBQUtWLGNBQU1LLElBQU4sQ0FBV007QUFBaEIsT0FWRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRixLQURGO0FBZUQsR0FoQkQsTUFnQk87QUFDTCxXQUNFO0FBQUE7QUFBQSxRQUFJLFNBQVNYLE1BQU1ZLGFBQW5CO0FBQ0U7QUFBQTtBQUFBO0FBQUtaLGNBQU1LLElBQU4sQ0FBV1E7QUFBaEIsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLYixjQUFNSyxJQUFOLENBQVdDO0FBQWhCLE9BRkY7QUFHRTtBQUFBO0FBQUE7QUFBS04sY0FBTUssSUFBTixDQUFXTTtBQUFoQixPQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLEtBREY7QUFRRDtBQUNGOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCaEIsY0FBakIsQzs7Ozs7Ozs7OztBQ2pDQSxJQUFJRCxTQUFRO0FBQ1ZrQixnQkFBYztBQUNaQyxhQUFTO0FBREcsR0FESjtBQUlWYixlQUFhO0FBQ1hjLFlBQVE7QUFERztBQUpILENBQVo7O0FBU0FKLE9BQU9DLE9BQVAsR0FBaUJqQixNQUFqQixDIiwiZmlsZSI6IjAuNTFkYTY3NjNiODRlZDRmY2QxNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc3R5bGVzID0gcmVxdWlyZSgnLi4vY3NzL2N1c3RvbVN0eWxlcycpO1xuXG5cbmZ1bmN0aW9uIFRpdGxlQ29tcG9uZW50IChwcm9wcykge1xuICBpZiAocHJvcHMuaXNFeHBhbmRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0naW1nLXJvdW5kZWQgaW1nLXJlc3BvbnZlJyBzcmM9e3Byb3BzLmRldGFpbHMuUG9zdGVyfSBzdHlsZT17c3R5bGVzLnBvc3RlclN0eWxlfS8+PC90ZD5cbiAgICAgICAgPHRkPntwcm9wcy5pbmZvLlRpdGxlfVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT57cHJvcHMuZGV0YWlscy5SZWxlYXNlZH08L2xpPlxuICAgICAgICAgICAgPGxpPntwcm9wcy5kZXRhaWxzLlJ1bnRpbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT57cHJvcHMuZGV0YWlscy5EaXJlY3Rvcn08L2xpPlxuICAgICAgICAgICAgPGxpPntwcm9wcy5kZXRhaWxzLkFjdG9yc308L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD57cHJvcHMuaW5mby5ZZWFyfTwvdGQ+XG4gICAgICAgIDx0ZD5UcnVlIC8gRmFsc2U8L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBvbkNsaWNrPXtwcm9wcy5vbkV4cGFuZFRpdGxlfT5cbiAgICAgICAgPHRkPntwcm9wcy5pbmZvLmltZGJJRH08L3RkPlxuICAgICAgICA8dGQ+e3Byb3BzLmluZm8uVGl0bGV9PC90ZD5cbiAgICAgICAgPHRkPntwcm9wcy5pbmZvLlllYXJ9PC90ZD5cbiAgICAgICAgPHRkPlRydWUgLyBGYWxzZTwvdGQ+XG4gICAgICA8L3RyPlxuICAgIClcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGl0bGVDb21wb25lbnQuanMiLCJ2YXIgc3R5bGVzPSB7XG4gIHBhZGRpbmdSaWdodDoge1xuICAgIHBhZGRpbmc6ICcwcHggMTBweCAwcHggMHB4J1xuICB9LFxuICBwb3N0ZXJTdHlsZToge1xuICAgIGhlaWdodDogJzI1MHB4J1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVzO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY3NzL2N1c3RvbVN0eWxlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=