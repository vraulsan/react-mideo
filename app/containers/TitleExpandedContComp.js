var React = require('react');
var styles = require('../css/customStyles');
var OMDbHelpers = require('../utils/OMDbHelpers');

var TitleExpandContComp = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true
    }
  },
  componentWillMount: function () {
    OMDbHelpers.searchDetails(this.props.info.imdbID)
      .then(function (results) {
        this.details = results.data;
        this.setState({
          isLoading: false
        })
      }.bind(this))
  },
  render: function () {
    return this.state.isLoading === true
      ? <tr onClick={this.props.onExpandTitle}>
          <td>{this.props.info.imdbID}</td>
            <td style={styles.paddingTop}>{this.props.info.Title}
              <hr />
                <div style={styles.alignCenter}>
                  <i className='fa fa-spinner fa-pulse fa-3x fa-fw'></i>
                </div>
              </td>
            <td>{this.props.info.Year}</td>
          <td>True / False</td>
        </tr>
      : <tr onClick={this.props.onExpandTitle}>
          <td><img className='img-rounded img-responve' src={this.details.Poster} style={styles.posterStyle}/></td>
            <td style={styles.paddingTop}>{this.props.info.Title}
              <hr />
                <ul>
                  <li><strong>Director:</strong> {this.details.Director}</li>
                  <li><strong>Actor:</strong>  {this.details.Actors}</li>
                  <li><strong>Released:</strong>  {this.details.Released}</li>
                  <li><strong>Runtime:</strong>  {this.details.Runtime}</li>
                  <li><strong>IMDb Rating:</strong>  {this.details.imdbRating}</li>
                  <li><strong>Awards:</strong>  {this.details.Awards}</li>
                </ul>
              </td>
            <td>{this.props.info.Year}</td>
          <td>True / False</td>
        </tr>
  }
});


module.exports = TitleExpandContComp;