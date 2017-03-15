var React = require('react');
var SearchFormComponent = require('../components/SearchFormComponent');
var ResultsComponent = require('../components/ResultsComponent');
var OMDbHelpers = require('../utils/OMDbHelpers');

var SearchFormContainer = React.createClass({
  getInitialState: function () {
    return {
      titleToSearch: '',
      yearToSearch: '',
      typeToSearch: 'movie',
      results: false
    }
  },
  handleUpdateTitle: function (e) {
    this.setState({
      titleToSearch: e.target.value
    });
  },
  handleUpdateYear: function (e) {
    this.setState({
      yearToSearch: e.target.value
    });
  },
  handleChangeType: function (e) {
    this.setState({
      typeToSearch: e.target.value
    });

  },
  handleSubmitForm: function (e) {
    e.preventDefault();
    if (this.state.titleToSearch === '')  {
      return null
    }
    OMDbHelpers.searchResults(this.state.titleToSearch, this.state.yearToSearch, this.state.typeToSearch)
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
          onTypeInTitle={this.handleUpdateTitle}
          onTypeInYear={this.handleUpdateYear}
          onSubmitForm={this.handleSubmitForm}
          onChangeType={this.handleChangeType} />
        <ResultsComponent
          results={this.state.results} />
      </div>
    )
  }
});

module.exports = SearchFormContainer;

