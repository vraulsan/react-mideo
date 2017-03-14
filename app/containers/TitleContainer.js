var React = require('react');
var OMDbHelpers = require('../utils/OMDbHelpers');
var TitleComponent = require('../components/TitleComponent');
var OMDbHelpers = require('../utils/OMDbHelpers');
var TitleExpandedContComp = require('../containers/TitleExpandedContComp');

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
    this.state.isExpanded === false
      ? this.setState({
          isExpanded: true
        })
      : this.setState({
          isExpanded: false
        })
  },
  render: function () {
    return this.state.isExpanded === false
      ? <TitleComponent
          info={this.info}
          onExpandTitle={this.handleExpandTitle} />
      : <TitleExpandedContComp
          info={this.info}
          onExpandTitle={this.handleExpandTitle}/>
  }
});

module.exports = TitleContainer;