webpackHotUpdate(0,{

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(130);
var React = __webpack_require__(21);

function getTitles(searchedTitle) {
  return axios.get('http://www.omdbapi.com/?s=' + searchedTitle);
};

var helpers = {
  searchResults: function searchResults(searchedTitle) {
    var results = getTitles(searchedTitle);
    return results;
  },
  iterateResults: function iterateResults(titleList) {
    titleList.map(function (eachTitle) {
      return React.createElement(
        'ul',
        { key: eachTitle.imdbID },
        React.createElement(
          'li',
          null,
          eachTitle.imdbID
        ),
        React.createElement(
          'li',
          null,
          eachTitle.Title
        ),
        React.createElement(
          'li',
          null,
          eachTitle.Year
        ),
        React.createElement(
          'li',
          null,
          'Yes/No'
        )
      );
    });
  }
};

module.exports = helpers;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMvT01EYkhlbHBlcnMuanM/Y2E5NiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJSZWFjdCIsImdldFRpdGxlcyIsInNlYXJjaGVkVGl0bGUiLCJnZXQiLCJoZWxwZXJzIiwic2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJpdGVyYXRlUmVzdWx0cyIsInRpdGxlTGlzdCIsIm1hcCIsImVhY2hUaXRsZSIsImltZGJJRCIsIlRpdGxlIiwiWWVhciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxtQkFBQUMsQ0FBUSxHQUFSLENBQVo7QUFDQSxJQUFJQyxRQUFRLG1CQUFBRCxDQUFRLEVBQVIsQ0FBWjs7QUFFQSxTQUFTRSxTQUFULENBQW9CQyxhQUFwQixFQUFtQztBQUNqQyxTQUFPSixNQUFNSyxHQUFOLENBQVUsK0JBQStCRCxhQUF6QyxDQUFQO0FBQ0Q7O0FBSUQsSUFBSUUsVUFBVTtBQUNaQyxpQkFBZSx1QkFBVUgsYUFBVixFQUF5QjtBQUN0QyxRQUFJSSxVQUFVTCxVQUFVQyxhQUFWLENBQWQ7QUFDQSxXQUFPSSxPQUFQO0FBQ0QsR0FKVztBQUtaQyxrQkFBZ0Isd0JBQVVDLFNBQVYsRUFBcUI7QUFDbkNBLGNBQVVDLEdBQVYsQ0FBYyxVQUFVQyxTQUFWLEVBQXFCO0FBQ2pDLGFBQU87QUFBQTtBQUFBLFVBQUksS0FBS0EsVUFBVUMsTUFBbkI7QUFDSztBQUFBO0FBQUE7QUFBS0Qsb0JBQVVDO0FBQWYsU0FETDtBQUVLO0FBQUE7QUFBQTtBQUFLRCxvQkFBVUU7QUFBZixTQUZMO0FBR0s7QUFBQTtBQUFBO0FBQUtGLG9CQUFVRztBQUFmLFNBSEw7QUFJSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkwsT0FBUDtBQU1ELEtBUEQ7QUFRRDtBQWRXLENBQWQ7O0FBa0JBQyxPQUFPQyxPQUFQLEdBQWlCWCxPQUFqQixDIiwiZmlsZSI6IjAuYzVkYzhlMGJkZDg5ZDQ0MDk4YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBnZXRUaXRsZXMgKHNlYXJjaGVkVGl0bGUpIHtcbiAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/cz0nICsgc2VhcmNoZWRUaXRsZSlcbn07XG5cblxuXG52YXIgaGVscGVycyA9IHtcbiAgc2VhcmNoUmVzdWx0czogZnVuY3Rpb24gKHNlYXJjaGVkVGl0bGUpIHtcbiAgICB2YXIgcmVzdWx0cyA9IGdldFRpdGxlcyhzZWFyY2hlZFRpdGxlKVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9LFxuICBpdGVyYXRlUmVzdWx0czogZnVuY3Rpb24gKHRpdGxlTGlzdCkge1xuICAgIHRpdGxlTGlzdC5tYXAoZnVuY3Rpb24gKGVhY2hUaXRsZSkge1xuICAgICAgcmV0dXJuIDx1bCBrZXk9e2VhY2hUaXRsZS5pbWRiSUR9PlxuICAgICAgICAgICAgICAgICAgPGxpPntlYWNoVGl0bGUuaW1kYklEfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+e2VhY2hUaXRsZS5UaXRsZX08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPntlYWNoVGl0bGUuWWVhcn08L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlllcy9ObzwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgfSk7XG4gIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC91dGlscy9PTURiSGVscGVycy5qcyJdLCJzb3VyY2VSb290IjoiIn0=