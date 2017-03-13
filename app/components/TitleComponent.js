var React = require('react');
var styles = require('../css/customStyles');


function TitleComponent (props) {
  if (props.isExpanded) {
    return (
      <tr onClick={props.onExpandTitle}>
        <td><img className='img-rounded img-responve' src={props.details.Poster} style={styles.posterStyle}/></td>
        <td>{props.info.Title}
          <ul>
            <li>{props.details.Released}</li>
            <li>{props.details.Runtime}</li>
            <li>{props.details.Director}</li>
            <li>{props.details.Actors}</li>
          </ul>
        </td>
        <td>{props.info.Year}</td>
        <td>True / False</td>
      </tr>
    )
  } else {
    return (
      <tr onClick={props.onExpandTitle}>
        <td>{props.info.imdbID}</td>
        <td>{props.info.Title}</td>
        <td>{props.info.Year}</td>
        <td>True / False</td>
      </tr>
    )
  };
};

module.exports = TitleComponent;