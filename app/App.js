var React = require('react');
var ReactDOM = require('react-dom');

// Main component rendering everything else
var LayoutContainer = require('./containers/LayoutContainer');

const app = document.getElementById('content');
ReactDOM.render(<LayoutContainer />, app);
