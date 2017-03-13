var React = require('react');
var OMDbHelpers = require('../utils/OMDbHelpers');

function ResultsComponent (props) {
  if (props.results === false) {
    return ( <div></div> )
  } else {
    //var results = OMDbHelpers.iterateResults(props.results.Search)
    var results = props.results.Search.map(function (eachTitle) {
      return (
        <tr key={eachTitle.imdbID}>
          <td>{eachTitle.imdbID}</td>
          <td>{eachTitle.Title}</td>
          <td>{eachTitle.Year}</td>
          <td>Yes/No</td>
        </tr>
      )
    });
    return (

    <div>
      <div className="row jumbotron">
        <h2> Results </h2>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>IMDb ID</th>
              <th>Title</th>
              <th>Year</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {results}
          </tbody>
        </table>
      </div>
    </div>
  )}
};


module.exports = ResultsComponent;
