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
      { onClick: props.onExpandTitle },
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9UaXRsZUNvbXBvbmVudC5qcz83OTk4Il0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsInN0eWxlcyIsIlRpdGxlQ29tcG9uZW50IiwicHJvcHMiLCJpc0V4cGFuZGVkIiwib25FeHBhbmRUaXRsZSIsImRldGFpbHMiLCJQb3N0ZXIiLCJwb3N0ZXJTdHlsZSIsImluZm8iLCJUaXRsZSIsIlJlbGVhc2VkIiwiUnVudGltZSIsIkRpcmVjdG9yIiwiQWN0b3JzIiwiWWVhciIsImltZGJJRCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxFQUFSLENBQVo7QUFDQSxJQUFJQyxTQUFTLG1CQUFBRCxDQUFRLEdBQVIsQ0FBYjs7QUFHQSxTQUFTRSxjQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM5QixNQUFJQSxNQUFNQyxVQUFWLEVBQXNCO0FBQ3BCLFdBQ0U7QUFBQTtBQUFBLFFBQUksU0FBU0QsTUFBTUUsYUFBbkI7QUFDRTtBQUFBO0FBQUE7QUFBSSxxQ0FBSyxXQUFVLDBCQUFmLEVBQTBDLEtBQUtGLE1BQU1HLE9BQU4sQ0FBY0MsTUFBN0QsRUFBcUUsT0FBT04sT0FBT08sV0FBbkY7QUFBSixPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtMLGNBQU1NLElBQU4sQ0FBV0MsS0FBaEI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS1Asa0JBQU1HLE9BQU4sQ0FBY0s7QUFBbkIsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLUixrQkFBTUcsT0FBTixDQUFjTTtBQUFuQixXQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUtULGtCQUFNRyxPQUFOLENBQWNPO0FBQW5CLFdBSEY7QUFJRTtBQUFBO0FBQUE7QUFBS1Ysa0JBQU1HLE9BQU4sQ0FBY1E7QUFBbkI7QUFKRjtBQURGLE9BRkY7QUFVRTtBQUFBO0FBQUE7QUFBS1gsY0FBTU0sSUFBTixDQUFXTTtBQUFoQixPQVZGO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGLEtBREY7QUFlRCxHQWhCRCxNQWdCTztBQUNMLFdBQ0U7QUFBQTtBQUFBLFFBQUksU0FBU1osTUFBTUUsYUFBbkI7QUFDRTtBQUFBO0FBQUE7QUFBS0YsY0FBTU0sSUFBTixDQUFXTztBQUFoQixPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtiLGNBQU1NLElBQU4sQ0FBV0M7QUFBaEIsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFLUCxjQUFNTSxJQUFOLENBQVdNO0FBQWhCLE9BSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsS0FERjtBQVFEO0FBQ0Y7O0FBRURFLE9BQU9DLE9BQVAsR0FBaUJoQixjQUFqQixDIiwiZmlsZSI6IjAuZDRlNGQ4YjJkNDg1MTgyNzE1YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgc3R5bGVzID0gcmVxdWlyZSgnLi4vY3NzL2N1c3RvbVN0eWxlcycpO1xuXG5cbmZ1bmN0aW9uIFRpdGxlQ29tcG9uZW50IChwcm9wcykge1xuICBpZiAocHJvcHMuaXNFeHBhbmRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dHIgb25DbGljaz17cHJvcHMub25FeHBhbmRUaXRsZX0+XG4gICAgICAgIDx0ZD48aW1nIGNsYXNzTmFtZT0naW1nLXJvdW5kZWQgaW1nLXJlc3BvbnZlJyBzcmM9e3Byb3BzLmRldGFpbHMuUG9zdGVyfSBzdHlsZT17c3R5bGVzLnBvc3RlclN0eWxlfS8+PC90ZD5cbiAgICAgICAgPHRkPntwcm9wcy5pbmZvLlRpdGxlfVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT57cHJvcHMuZGV0YWlscy5SZWxlYXNlZH08L2xpPlxuICAgICAgICAgICAgPGxpPntwcm9wcy5kZXRhaWxzLlJ1bnRpbWV9PC9saT5cbiAgICAgICAgICAgIDxsaT57cHJvcHMuZGV0YWlscy5EaXJlY3Rvcn08L2xpPlxuICAgICAgICAgICAgPGxpPntwcm9wcy5kZXRhaWxzLkFjdG9yc308L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD57cHJvcHMuaW5mby5ZZWFyfTwvdGQ+XG4gICAgICAgIDx0ZD5UcnVlIC8gRmFsc2U8L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBvbkNsaWNrPXtwcm9wcy5vbkV4cGFuZFRpdGxlfT5cbiAgICAgICAgPHRkPntwcm9wcy5pbmZvLmltZGJJRH08L3RkPlxuICAgICAgICA8dGQ+e3Byb3BzLmluZm8uVGl0bGV9PC90ZD5cbiAgICAgICAgPHRkPntwcm9wcy5pbmZvLlllYXJ9PC90ZD5cbiAgICAgICAgPHRkPlRydWUgLyBGYWxzZTwvdGQ+XG4gICAgICA8L3RyPlxuICAgIClcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGl0bGVDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvVGl0bGVDb21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9