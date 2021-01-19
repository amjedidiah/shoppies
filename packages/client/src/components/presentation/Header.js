// Moduel import
import PropTypes from 'prop-types';

// Component imports
import Search from 'components/controlled/Search';
import BtnGroup from './BtnGroup';

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
 * const nominations={}
 * const onSetAuthedUser=()=>{}
 * const onUpdateNomination=()=>{}
 *
 * return <Header
 *          authedUser={authedUser}
 *          nominations={nominations}
 *          onSetAuthedUser={onSetAuthedUser}
 *          onUpdateNomination={onUpdateNomination}
 *        />
 *
 */
const Header = ({
  authedUser,
  nominations,
  onSetAuthedUser,
  onUpdateNomination,
}) => (
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
          nominations={nominations}
          onSetAuthedUser={onSetAuthedUser}
          onUpdateNomination={onUpdateNomination}
        />
        <ul className="navbar-nav mr-auto ml-auto">
          <li className="nav-item">
            <a className="nav-link nav-link--custom" href="#nominations">
              Nominations
            </a>
          </li>
        </ul>
        <form className="form-inline mb-3 mb-sm-0 mx-auto mx-sm-0">
          <BtnGroup
            authedUser={authedUser}
            onSetAuthedUser={onSetAuthedUser}
            xtraClassName={{
              anon: {btn: 'btn-white btn-nominate--header', text: 'large'},
              cancel: 'd-none',
              nominate: 'd-none',
              google: {
                btn: 'btn-white btn-nominate--header  mr-2 mr-md-3',
                text: 'large',
              },
            }}
          />
        </form>
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
   * Header movieID
   */
  nominations: PropTypes.object,
  /**
   * Header onSetAuthedUser
   */
  onSetAuthedUser: PropTypes.func,
  /**
   * Header onUpdateNomination
   */
  onUpdateNomination: PropTypes.func,
};

Header.defaultProps = {
  authedUser: '',
  nominations: {},
  onSetAuthedUser: () => {},
  onUpdateNomination: () => {},
};

// Header export
export default Header;
