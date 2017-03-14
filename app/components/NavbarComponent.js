var React = require('react');


function NavbarComponent (props) {
  return (
    <nav className="navbar navbar-warning" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">MIDEO</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav pull-right">
            <li className="active"><a href="#">About</a></li>
            <li>
              <a href="https://twitter.com/CreativeTim" target="_blank" className="btn btn-simple btn-white btn-just-icon">
              <i className="fa fa-google"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/CreativeTim" target="_blank" className="btn btn-simple btn-white btn-just-icon">
              <i className="fa fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/CreativeTimOfficial" target="_blank" className="btn btn-simple btn-white btn-just-icon">
              <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Account<b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li className="divider"></li>
                <li><a href="#">Separated link</a></li>
                <li className="divider"></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

module.exports = NavbarComponent;
