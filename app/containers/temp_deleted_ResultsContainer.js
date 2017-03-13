var React = require('react');
var ResultsComponent = require('../components/ResultsComponent');

var ResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      results: false,
    }
  },
  searchResults: function () {
    // here I will search for the results
    // using a fetch() or axios
  },
  render: function () {
    return (
      <ResultsComponent results={this.state.results}/>
    )
  }
});

module.exports = ResultsContainer;

