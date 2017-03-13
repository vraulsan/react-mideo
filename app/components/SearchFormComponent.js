var React = require('react');

function SearchFormComponent(props) {
  return (
    <div className="row text-center jumbotron">
      <form
        className="form-inline"
        onSubmit={props.onSubmitForm}>
        <div className="form-group">
          <label>&nbsp; Title &nbsp;</label>
          <input
            type="text"
            className="form-control"
            placeholder="Movie or show"
            onChange={props.onTypeIn}
          />
        </div>
        <div className="form-group">
          <label>&nbsp; Year &nbsp;</label>
          <input
            type="text"
            className="form-control"
            placeholder="Year of release"
          />
        </div>
        <button type="submit" className="btn btn-primary"> Search </button>
      </form>
    </div>
  )
};


module.exports = SearchFormComponent;

