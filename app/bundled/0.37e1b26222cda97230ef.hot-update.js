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
      return React.createElement(TitleContainer, { key: eachTitle.imdbID, titleInfo: eachTitle });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXN1bHRzQ29tcG9uZW50LmpzPzgyZjEiXSwibmFtZXMiOlsiUmVhY3QiLCJyZXF1aXJlIiwiT01EYkhlbHBlcnMiLCJUaXRsZUNvbnRhaW5lciIsIlJlc3VsdHNDb21wb25lbnQiLCJwcm9wcyIsInJlc3VsdHMiLCJTZWFyY2giLCJtYXAiLCJlYWNoVGl0bGUiLCJpbWRiSUQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUlBLFFBQVEsbUJBQUFDLENBQVEsRUFBUixDQUFaO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCO0FBQ0EsSUFBSUUsaUJBQWlCLG1CQUFBRixDQUFRLEdBQVIsQ0FBckI7O0FBRUEsU0FBU0csZ0JBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQ2hDLE1BQUlBLE1BQU1DLE9BQU4sS0FBa0IsS0FBdEIsRUFBNkI7QUFDM0IsV0FBUyxnQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMO0FBQ0EsUUFBSUEsVUFBVUQsTUFBTUMsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxHQUFyQixDQUF5QixVQUFVQyxTQUFWLEVBQXFCO0FBQzFELGFBQ0Usb0JBQUMsY0FBRCxJQUFnQixLQUFLQSxVQUFVQyxNQUEvQixFQUF1QyxXQUFXRCxTQUFsRCxHQURGO0FBR0QsS0FKYSxDQUFkO0FBS0EsV0FDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSx1Q0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFPLFdBQVUscUJBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBREYsV0FERjtBQVNFO0FBQUE7QUFBQTtBQUNHSDtBQURIO0FBVEY7QUFIRjtBQURGLEtBREE7QUFvQkE7QUFDSDs7QUFHREssT0FBT0MsT0FBUCxHQUFpQlIsZ0JBQWpCLEMiLCJmaWxlIjoiMC4zN2UxYjI2MjIyY2RhOTcyMzBlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBPTURiSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL09NRGJIZWxwZXJzJyk7XG52YXIgVGl0bGVDb250YWluZXIgPSByZXF1aXJlKCcuLi9jb250YWluZXJzL1RpdGxlQ29udGFpbmVyJylcblxuZnVuY3Rpb24gUmVzdWx0c0NvbXBvbmVudCAocHJvcHMpIHtcbiAgaWYgKHByb3BzLnJlc3VsdHMgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuICggPGRpdj48L2Rpdj4gKVxuICB9IGVsc2Uge1xuICAgIC8vdmFyIHJlc3VsdHMgPSBPTURiSGVscGVycy5pdGVyYXRlUmVzdWx0cyhwcm9wcy5yZXN1bHRzLlNlYXJjaClcbiAgICB2YXIgcmVzdWx0cyA9IHByb3BzLnJlc3VsdHMuU2VhcmNoLm1hcChmdW5jdGlvbiAoZWFjaFRpdGxlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGl0bGVDb250YWluZXIga2V5PXtlYWNoVGl0bGUuaW1kYklEfSB0aXRsZUluZm89e2VhY2hUaXRsZX0gLz5cbiAgICAgIClcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdW1ib3Ryb25cIj5cbiAgICAgICAgPGgyPiBSZXN1bHRzIDwvaDI+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPklNRGIgSUQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgICAgICAgICA8dGg+WWVhcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5GYXZvcml0ZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3Jlc3VsdHN9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApfVxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3VsdHNDb21wb25lbnQ7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvUmVzdWx0c0NvbXBvbmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=