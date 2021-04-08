import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
// import bootstrap from'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    return (
      <div className="col s6">
      <div>
        {/* Dropdown Structure */}
        <ul id="dropdown1" className="dropdown-content ">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider" />
          <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <a href="#!" className="brand-logo">Brewery Lookup</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">About Us</a></li>
              <li><a href="badges.html">Updates</a></li>
              {/* Dropdown Trigger */}
              {/* <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">More Info<i className="material-icons right">arrow_drop_down</i></a></li> */}
            </ul>
          </div>
        </nav>
      </div>
      </div>
    );
  }
export default Navigation