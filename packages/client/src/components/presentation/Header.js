// Component imports
import Search from 'components/controlled/Search';

// Asset imports
import logo from 'assets/img/logo.png';
import 'assets/css/header.css';

/**
 * Header component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 *
 * return <Header />
 */
const Header = () => (
  <header>
    <nav
      className="navbar navbar-expand navbar-light bg-transparent fixed-top"
      id="header"
    >
      <div className="container d-flex align-items-center">
        <a className="navbar-brand d-block just-height" href="/#">
          <img
            src={logo}
            alt="Shoppies logo"
            className="img-fluid"
            width="100"
            loading="lazy"
          />
        </a>
        <Search />
        <ul className="navbar-nav mr-auto ml-auto">
          <li className="nav-item">
            <a className="nav-link nav-link--custom" href="#nominations">
              Nominations
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

// Header export
export default Header;
