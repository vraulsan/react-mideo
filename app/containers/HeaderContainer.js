var React = require('react');
var HeaderComponent = require('../components/HeaderComponent');
var SearchFormComponent = require('../components/SearchFormComponent')


var HeaderContainer = React.createClass({
  getInitialState: function () {
    return {
      header: ' '
    }
  },
  render: function () {
    return (
      <HeaderComponent theHeader={this.state.header} />
    )
  }

});

module.exports = HeaderContainer;


