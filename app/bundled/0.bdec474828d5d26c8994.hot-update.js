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
    OMDbHelpers.searchDetauks(this.info.imdbID).then(function (results) {
      //this.details = ({
      //Released:
      //});
      console.log(results);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9UaXRsZUNvbnRhaW5lci5qcz9hZWVhIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIk9NRGJIZWxwZXJzIiwiVGl0bGVDb21wb25lbnQiLCJUaXRsZUNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwidGl0bGVFeHBhbmRlZCIsImlzRmF2b3JpdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJpbmZvIiwiaW1kYklEIiwicHJvcHMiLCJ0aXRsZUluZm8iLCJUaXRsZSIsIlllYXIiLCJoYW5kbGVFeHBhbmRUaXRsZSIsImUiLCJzZWFyY2hEZXRhdWtzIiwidGhlbiIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsInJlbmRlciIsInN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLG1CQUFBQyxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUlDLGNBQWMsbUJBQUFELENBQVEsRUFBUixDQUFsQjtBQUNBLElBQUlFLGlCQUFpQixtQkFBQUYsQ0FBUSxHQUFSLENBQXJCO0FBQ0EsSUFBSUMsY0FBYyxtQkFBQUQsQ0FBUSxFQUFSLENBQWxCOztBQUVBLElBQUlHLGlCQUFpQkosTUFBTUssV0FBTixDQUFrQjtBQUFBOztBQUNyQ0MsbUJBQWlCLDJCQUFZO0FBQzNCLFdBQU87QUFDTEMscUJBQWUsS0FEVjtBQUVMQyxrQkFBWTtBQUZQLEtBQVA7QUFJRCxHQU5vQztBQU9yQ0Msc0JBQW9CLDhCQUFZO0FBQzlCLFNBQUtDLElBQUwsR0FBWTtBQUNWQyxjQUFRLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkYsTUFEbkI7QUFFVkcsYUFBTyxLQUFLRixLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLEtBRmxCO0FBR1ZDLFlBQU0sS0FBS0gsS0FBTCxDQUFXQyxTQUFYLENBQXFCRTtBQUhqQixLQUFaO0FBS0QsR0Fib0M7QUFjckNDLHFCQUFtQiwyQkFBVUMsQ0FBVixFQUFhO0FBQzlCZixnQkFBWWdCLGFBQVosQ0FBMEIsS0FBS1IsSUFBTCxDQUFVQyxNQUFwQyxFQUNHUSxJQURILENBQ1EsVUFBVUMsT0FBVixFQUFtQjtBQUN2QjtBQUNFO0FBQ0Y7QUFDQUMsY0FBUUMsR0FBUixDQUFZRixPQUFaO0FBQ0QsS0FMSyxDQUtKRyxJQUxJLENBS0MsSUFMRCxDQURSO0FBT0QsR0F0Qm9DO0FBdUJyQ0MsVUFBUSxrQkFBWTtBQUNsQixXQUNJLG9CQUFDLGNBQUQ7QUFDRSxZQUFNLEtBQUtkLElBRGI7QUFFRSxrQkFBWSxLQUFLZSxLQUFMLENBQVdsQixhQUZ6QjtBQUdFLHFCQUFlLEtBQUtTLGlCQUh0QixHQURKO0FBTUQ7QUE5Qm9DLENBQWxCLENBQXJCOztBQWlDQVUsT0FBT0MsT0FBUCxHQUFpQnZCLGNBQWpCLEMiLCJmaWxlIjoiMC5iZGVjNDc0ODI4ZDVkMjZjODk5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBPTURiSGVscGVycyA9IHJlcXVpcmUoJy4uL3V0aWxzL09NRGJIZWxwZXJzJyk7XG52YXIgVGl0bGVDb21wb25lbnQgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1RpdGxlQ29tcG9uZW50Jyk7XG52YXIgT01EYkhlbHBlcnMgPSByZXF1aXJlKCcuLi91dGlscy9PTURiSGVscGVycycpO1xuXG52YXIgVGl0bGVDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZUV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGlzRmF2b3JpdGU6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluZm8gPSB7XG4gICAgICBpbWRiSUQ6IHRoaXMucHJvcHMudGl0bGVJbmZvLmltZGJJRCxcbiAgICAgIFRpdGxlOiB0aGlzLnByb3BzLnRpdGxlSW5mby5UaXRsZSxcbiAgICAgIFllYXI6IHRoaXMucHJvcHMudGl0bGVJbmZvLlllYXIsXG4gICAgfVxuICB9LFxuICBoYW5kbGVFeHBhbmRUaXRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICBPTURiSGVscGVycy5zZWFyY2hEZXRhdWtzKHRoaXMuaW5mby5pbWRiSUQpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAvL3RoaXMuZGV0YWlscyA9ICh7XG4gICAgICAgICAgLy9SZWxlYXNlZDpcbiAgICAgICAgLy99KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcbiAgICAgIH0uYmluZCh0aGlzKSlcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRpdGxlQ29tcG9uZW50XG4gICAgICAgICAgaW5mbz17dGhpcy5pbmZvfVxuICAgICAgICAgIGlzRXhwYW5kZWQ9e3RoaXMuc3RhdGUudGl0bGVFeHBhbmRlZH1cbiAgICAgICAgICBvbkV4cGFuZFRpdGxlPXt0aGlzLmhhbmRsZUV4cGFuZFRpdGxlfSAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpdGxlQ29udGFpbmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb250YWluZXJzL1RpdGxlQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==