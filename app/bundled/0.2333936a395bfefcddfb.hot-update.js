webpackHotUpdate(0,{

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var axios = __webpack_require__(130);
var React = __webpack_require__(21);

function getTitles(searchedTitle) {
  return axios.get('http://www.omdbapi.com/?s=' + searchedTitle);
};
function getDetails(imdbID) {
  return axios.get('http://www.omdbapi.com/?i=' + imdbID);
};

var helpers = {
  searchResults: function searchResults(searchedTitle) {
    var results = getTitles(searchedTitle);
    return results;
  },
  searchDetails: function searchDetails(imdbID) {
    var details = getDetails(imdbID);
    return details;
  }
};

module.exports = helpers;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdXRpbHMvT01EYkhlbHBlcnMuanM/Y2E5NiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJSZWFjdCIsImdldFRpdGxlcyIsInNlYXJjaGVkVGl0bGUiLCJnZXQiLCJnZXREZXRhaWxzIiwiaW1kYklEIiwiaGVscGVycyIsInNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwic2VhcmNoRGV0YWlscyIsImRldGFpbHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsR0FBUixDQUFaO0FBQ0EsSUFBSUMsUUFBUSxtQkFBQUQsQ0FBUSxFQUFSLENBQVo7O0FBRUEsU0FBU0UsU0FBVCxDQUFvQkMsYUFBcEIsRUFBbUM7QUFDakMsU0FBT0osTUFBTUssR0FBTixDQUFVLCtCQUErQkQsYUFBekMsQ0FBUDtBQUNEO0FBQ0QsU0FBU0UsVUFBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0IsU0FBT1AsTUFBTUssR0FBTixDQUFVLCtCQUErQkUsTUFBekMsQ0FBUDtBQUNEOztBQUVELElBQUlDLFVBQVU7QUFDWkMsaUJBQWUsdUJBQVVMLGFBQVYsRUFBeUI7QUFDdEMsUUFBSU0sVUFBVVAsVUFBVUMsYUFBVixDQUFkO0FBQ0EsV0FBT00sT0FBUDtBQUNELEdBSlc7QUFLWkMsaUJBQWUsdUJBQVVKLE1BQVYsRUFBa0I7QUFDL0IsUUFBSUssVUFBVU4sV0FBV0MsTUFBWCxDQUFkO0FBQ0EsV0FBT0ssT0FBUDtBQUNEO0FBUlcsQ0FBZDs7QUFZQUMsT0FBT0MsT0FBUCxHQUFpQk4sT0FBakIsQyIsImZpbGUiOiIwLjIzMzM5MzZhMzk1YmZlZmNkZGZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gZ2V0VGl0bGVzIChzZWFyY2hlZFRpdGxlKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP3M9JyArIHNlYXJjaGVkVGl0bGUpXG59O1xuZnVuY3Rpb24gZ2V0RGV0YWlscyAoaW1kYklEKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly93d3cub21kYmFwaS5jb20vP2k9JyArIGltZGJJRClcbn07XG5cbnZhciBoZWxwZXJzID0ge1xuICBzZWFyY2hSZXN1bHRzOiBmdW5jdGlvbiAoc2VhcmNoZWRUaXRsZSkge1xuICAgIHZhciByZXN1bHRzID0gZ2V0VGl0bGVzKHNlYXJjaGVkVGl0bGUpXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG4gIHNlYXJjaERldGFpbHM6IGZ1bmN0aW9uIChpbWRiSUQpIHtcbiAgICB2YXIgZGV0YWlscyA9IGdldERldGFpbHMoaW1kYklEKVxuICAgIHJldHVybiBkZXRhaWxzO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvdXRpbHMvT01EYkhlbHBlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9