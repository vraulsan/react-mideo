var React = require('react');
var OMDbHelpers = require('../utils/OMDbHelpers');
var TitleComponent = require('../components/TitleComponent');
var OMDbHelpers = require('../utils/OMDbHelpers');

var TitleContainer = React.createClass({
  getInitialState: function () {
    return {
      isExpanded: false,
      isFavorite: false
    }
  },
  componentWillMount: function () {
    this.info = {
      imdbID: this.props.titleInfo.imdbID,
      Title: this.props.titleInfo.Title,
      Year: this.props.titleInfo.Year,
    },
    this.details = {}
  },
  handleExpandTitle: function (e) {
    if (this.state.isExpanded === false) {
      OMDbHelpers.searchDetails(this.info.imdbID)
        .then(function (results) {
          this.details = results.data;
          this.setState({
            isExpanded: true
          })
        }.bind(this))
    } else {
      this.setState({
        isExpanded: false
      })
    }
  },
  render: function () {
    return (
        <TitleComponent
          info={this.info}
          isExpanded={this.state.isExpanded}
          onExpandTitle={this.handleExpandTitle}
          details={this.details}
           />
    );
  }
});

module.exports = TitleContainer;