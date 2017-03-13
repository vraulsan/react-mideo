var React = require('react');

function HeaderComponent(props) {
  return (
    <div className="lead text-center">{props.theHeader}</div>
  )
};


module.exports = HeaderComponent;

