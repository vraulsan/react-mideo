var React = require('react');
var HeaderContainer = require('../containers/HeaderContainer');
var SearchFormContainer = require('../containers/SearchFormContainer')
var NavbarContainer = require('../containers/NavbarContainer');


var LayoutContainer = React.createClass({
  render: function () {
    return (
      <div>
        <NavbarContainer />
        <HeaderContainer />
        <SearchFormContainer />
      </div>
    )
  }
});

module.exports = LayoutContainer;

