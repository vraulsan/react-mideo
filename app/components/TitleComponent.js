var React = require('react');
var styles = require('../css/customStyles');


function TitleComponent (props) {
  if (props.isExpanded) {
    return (
      <tr onClick={props.onExpandTitle}>
        <td><img className='img-rounded img-responve' src={props.details.Poster} style={styles.posterStyle}/></td>
        <td style={styles.paddingTop}>{props.info.Title}
          <hr />
          <ul>
            <li><strong>Director:</strong> {props.details.Director}</li>
            <li><strong>Actor:</strong>  {props.details.Actors}</li>
            <li><strong>Released:</strong>  {props.details.Released}</li>
            <li><strong>Runtime:</strong>  {props.details.Runtime}</li>
            <li><strong>IMDb Rating:</strong>  {props.details.imdbRating}</li>
            <li><strong>Awards:</strong>  {props.details.Awards}</li>
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