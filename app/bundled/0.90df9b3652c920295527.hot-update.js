webpackHotUpdate(0,{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(21);
var OMDbHelpers = __webpack_require__(81);
var TitleContainer = __webpack_require__(154);

function ResultsComponent(props) {
  if (props.results === false) {
    return React.createElement('div', null);
  } else {
    //var results = OMDbHelpers.iterateResults(props.results.Search)
    var results = props.results.Search.map(function (eachTitle) {
      return (
        /**
        <tr key={eachTitle.imdbID}>
          <td>{eachTitle.imdbID}</td>
          <td>{eachTitle.Title}</td>
          <td>{eachTitle.Year}</td>
          <td>Yes/No</td>
        </tr>**/
        React.createElement(TitleContainer, { key: eachTitle.imdbID, details: eachTitle })
      );
    });
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'row jumbotron' },
        React.createElement(
          'h2',
          null,
          ' Results '
        ),
        React.createElement('hr', null),
        React.createElement(
          'table',
          { className: 'table table-striped' },
          React.createElement(
            'thead',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'th',
                null,
                'IMDb ID'
              ),
              React.createElement(
                'th',
                null,
                'Title'
              ),
              React.createElement(
                'th',
                null,
                'Year'
              ),
              React.createElement(
                'th',
                null,
                'Favorite'
              )
            )
          ),
          React.createElement(
            'tbody',
            null,
            results
          )
        )
      )
    );
  }
};

module.exports = ResultsComponent;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXN1bHRzQ29tcG9uZW50LmpzPzgyZjEiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT01EYkhlbHBlcnMiLCJUaXRsZUNvbnRhaW5lciIsIlJlc3VsdHNDb21wb25lbnQiLCJwcm9wcyIsInJlc3VsdHMiLCJTZWFyY2giLCJtYXAiLCJlYWNoVGl0bGUiLCJpbWRiSUQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCO0FBQ0EsSUFBSUUsaUJBQWlCLG1CQUFBRixDQUFRLEdBQVIsQ0FBckI7O0FBRUEsU0FBU0csZ0JBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ2hDLE1BQUlBLE1BQU1DLE9BQU4sS0FBa0IsS0FBdEIsRUFBNkI7QUFDM0IsV0FBUyxnQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMO0FBQ0EsUUFBSUEsVUFBVUQsTUFBTUMsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxHQUFyQixDQUF5QixVQUFVQyxTQUFWLEVBQXFCO0FBQzFEO0FBQ0U7Ozs7Ozs7QUFPQSw0QkFBQyxjQUFELElBQWdCLEtBQUtBLFVBQVVDLE1BQS9CLEVBQXVDLFNBQVNELFNBQWhEO0FBUkY7QUFVRCxLQVhhLENBQWQ7QUFZQSxXQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLHVDQUZGO0FBR0U7QUFBQTtBQUFBLFlBQU8sV0FBVSxxQkFBakI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFERixXQURGO0FBU0U7QUFBQTtBQUFBO0FBQ0dIO0FBREg7QUFURjtBQUhGO0FBREYsS0FEQTtBQW9CQTtBQUNIOztBQUdESyxPQUFPQyxPQUFQLEdBQWlCUixnQkFBakIsQyIsImZpbGUiOiIwLjkwZGY5YjM2NTJjOTIwMjk1NTI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIE9NRGJIZWxwZXJzID0gcmVxdWlyZSgnLi4vdXRpbHMvT01EYkhlbHBlcnMnKTtcbnZhciBUaXRsZUNvbnRhaW5lciA9IHJlcXVpcmUoJy4uL2NvbnRhaW5lcnMvVGl0bGVDb250YWluZXInKVxuXG5mdW5jdGlvbiBSZXN1bHRzQ29tcG9uZW50IChwcm9wcykge1xuICBpZiAocHJvcHMucmVzdWx0cyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gKCA8ZGl2PjwvZGl2PiApXG4gIH0gZWxzZSB7XG4gICAgLy92YXIgcmVzdWx0cyA9IE9NRGJIZWxwZXJzLml0ZXJhdGVSZXN1bHRzKHByb3BzLnJlc3VsdHMuU2VhcmNoKVxuICAgIHZhciByZXN1bHRzID0gcHJvcHMucmVzdWx0cy5TZWFyY2gubWFwKGZ1bmN0aW9uIChlYWNoVGl0bGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8qKlxuICAgICAgICA8dHIga2V5PXtlYWNoVGl0bGUuaW1kYklEfT5cbiAgICAgICAgICA8dGQ+e2VhY2hUaXRsZS5pbWRiSUR9PC90ZD5cbiAgICAgICAgICA8dGQ+e2VhY2hUaXRsZS5UaXRsZX08L3RkPlxuICAgICAgICAgIDx0ZD57ZWFjaFRpdGxlLlllYXJ9PC90ZD5cbiAgICAgICAgICA8dGQ+WWVzL05vPC90ZD5cbiAgICAgICAgPC90cj4qKi9cbiAgICAgICAgPFRpdGxlQ29udGFpbmVyIGtleT17ZWFjaFRpdGxlLmltZGJJRH0gZGV0YWlscz17ZWFjaFRpdGxlfSAvPlxuICAgICAgKVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1bWJvdHJvblwiPlxuICAgICAgICA8aDI+IFJlc3VsdHMgPC9oMj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+SU1EYiBJRDwvdGg+XG4gICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgICAgICAgIDx0aD5ZZWFyPC90aD5cbiAgICAgICAgICAgICAgPHRoPkZhdm9yaXRlPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cmVzdWx0c31cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICl9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVzdWx0c0NvbXBvbmVudDtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9SZXN1bHRzQ29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==