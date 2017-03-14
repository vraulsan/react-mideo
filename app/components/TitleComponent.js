var React = require('react');
var styles = require('../css/customStyles');


function TitleComponent (props) {
  return (
    <tr onClick={props.onExpandTitle}>
      <td>{props.info.imdbID}</td>
      <td>{props.info.Title}</td>
      <td>{props.info.Year}</td>
      <td>True / False</td>
    </tr>
  )
};

module.exports = TitleComponent;