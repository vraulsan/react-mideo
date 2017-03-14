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
                <strong><h2 style={styles.headColor}>Media Query</h2></strong>
                <h4>What are you thinking about . . .</h4>
                <form
                onSubmit={props.onSubmitForm}>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="control-label">&nbsp; Title &nbsp;</label>
                      <input
                      type="text"
                      className="form-control"
                      placeholder="Movie or show"
                      onChange={props.onTypeIn}/>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="control-label">&nbsp; Year &nbsp;</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Year of release"/>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group label-floating has-success" style={styles.positionField}>
                      <label className="control-label">Success input</label>
                      <input type="text" value="Success" className="form-control" />
                      <span className="form-control-feedback">
                        <i className="material-icons">done</i>
                      </span>
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

