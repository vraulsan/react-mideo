var React = require('react');
var OMDbHelpers = require('../utils/OMDbHelpers');
var TitleContainer = require('../containers/TitleContainer');
var styles = require('../css/customStyles');

function ResultsComponent (props) {
  if (props.results === false) {
    return ( <div></div> )
  } else {
    var totalEntries = Number(props.results.totalResults);
    if (totalEntries > 10) {
      if (totalEntries % 10 !== 0) {
        var pages = ((totalEntries - (totalEntries % 10))/10) + 1
      } else { var pages = totalEntries / 10 }
    } else { var pages = 1 }
    var results = props.results.Search.map(function (eachTitle) {
      return ( <TitleContainer key={eachTitle.imdbID} titleInfo={eachTitle} />)
    });
  };
    return (
    <div className="main main-raised">
      <div className="section section-basic">
        <div className="container">
          <strong><h2 style={styles.headColor}> Results </h2></strong>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>IMDb ID</th>
                <th>Title</th>
                <th>Year</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {results}
            </tbody>
          </table>
          Pages: {pages}
        </div>
      </div>
    </div>
  )};


module.exports = ResultsComponent;


