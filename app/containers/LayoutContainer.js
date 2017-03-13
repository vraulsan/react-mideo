var React = require('react');
var HeaderContainer = require('../containers/HeaderContainer');
var SearchFormContainer = require('../containers/SearchFormContainer')


var LayoutContainer = React.createClass({
  render: function () {
    return (
      <div>
        <HeaderContainer />
        <SearchFormContainer />
      </div>
    )
  }
});

module.exports = LayoutContainer;

