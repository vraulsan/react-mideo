var React = require('react');
var SearchFormComponent = require('../components/SearchFormComponent');
var ResultsComponent = require('../components/ResultsComponent');
var OMDbHelpers = require('../utils/OMDbHelpers');

var SearchFormContainer = React.createClass({
  getInitialState: function () {
    return {
      titleToSearch: '',
      results: false
    }
  },
  handleUpdateTitle: function (e) {
    this.setState({
      titleToSearch: e.target.value
    });
  },
  handleSubmitForm: function (e) {
    e.preventDefault();
    OMDbHelpers.searchResults(this.state.titleToSearch)
      .then(function (results) {
        this.setState({
          results: results.data
        });
      }.bind(this))
  },
  render: function () {
    return (
      <div>
        <SearchFormComponent
          onTypeIn={this.handleUpdateTitle}
          onSubmitForm={this.handleSubmitForm} />
        <ResultsComponent
          results={this.state.results} />
      </div>
    )
  }
});

module.exports = SearchFormContainer;

