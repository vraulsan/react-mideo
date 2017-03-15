var React = require('react');
var styles = require('../css/customStyles');

function SearchFormComponent(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header"></div>
        <div className="row">
          <div className="main main-raised">
            <div className="section section-basic">
              <div className="container">
                <strong><h2 style={styles.headColor}>Midea Query</h2></strong>
                <h4>Start organizing your media</h4>
                <form
                onSubmit={props.onSubmitForm}>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="control-label">&nbsp; Title &nbsp;</label>
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Movie or show"
                      onChange={props.onTypeInTitle}/>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="control-label">&nbsp; Year &nbsp;</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year of release"
                        onChange={props.onTypeInYear}/>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group label-floating has-success" style={styles.positionField}>
                      <select onChange={props.onChangeType} className="form-control">
                        <option defaultValue value="movie">Movie</option>
                        <option value="series">Series</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-warning pull-right" style={styles.marginButton}> Search </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


module.exports = SearchFormComponent;

