// Moduel import
import PropTypes from 'prop-types';

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
 * const authedUser=''
 * const authedUserNominations=[]
 * const onUpdateNomination=()=>{}
 *
 * return <Header
 *          authedUser={authedUser}
 *          authedUserNominations={authedUserNominations}
 *          onUpdateNomination={onUpdateNomination}
 *        />
 *
 */
const Header = ({authedUser, authedUserNominations, onUpdateNomination}) => (
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
        <Search
          authedUser={authedUser}
          authedUserNominations={authedUserNominations}
          onUpdateNomination={onUpdateNomination}
        />
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

Header.propTypes = {
  /**
   * Header authedUser
   */
  authedUser: PropTypes.string,
  /**
   * Header authedUserNominations
   */
  authedUserNominations: PropTypes.array,
  /**
   * Header onUpdateNomination
   */
  onUpdateNomination: PropTypes.func,
};

Header.defaultProps = {
  authedUser: '',
  authedUserNominations: [],
  onUpdateNomination: () => {},
};

// Header export
export default Header;
