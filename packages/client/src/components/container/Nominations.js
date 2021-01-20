// Module imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import MovieCard from 'components/container/MovieCard';

// Asset imports
import 'assets/css/nominations.css';
import {getAuthedUserNominations, getNominations} from 'redux/selectors';

/**
 * @component
 * @return {object} - The UI DOm object
 *
 * @example
 * return <Nominations />
 */
const Nominations = ({authedUser, authedUserNominations, nominations}) => {
  /**
   * Render nominations
   * @param {array} noms
   * @param {string} [xtraClassName]
   * @return {object}
   */
  const renderNoms = (noms = [], xtraClassName) =>
    noms.map((nomination) => (
      <div key={nomination?._id} className={`mb-4 nomination ${xtraClassName}`}>
        <MovieCard
          imdbID={nomination?.imdbID}
          nomination={nomination}
          xtraClassName={{
            card: 'shadow',
            img: 'w-100',
            info: 'p-2',
          }}
        />
      </div>
    ));

  return (
    <section id="nominations">
      <h2 className="d-none">Nominations</h2>

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg">
            <div className="my-3 rounded">
              <h4 className="text-gold font-weight-bold">Recent Nominations</h4>

              <div className="d-flex flex-wrap mt-3 row--nomination">
                {renderNoms(nominations)}
              </div>
            </div>
          </div>
          {authedUser && (
            <div className="col-12 col-lg-3 col-xl-5">
              <div className="my-3 rounded">
                <h4 className="text-gold font-weight-bold">Your Nominations</h4>

                <div className="d-flex flex-wrap mt-3 row--nomination">
                  {renderNoms(authedUserNominations, 'nomination--yours')}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Nominations.propTypes = {
  /**
   * Nominations authedUser
   */
  authedUser: PropTypes.string,
  /**
   * Nominations authedUserNominations
   */
  authedUserNominations: PropTypes.array,
  /**
   * Nominations nominations
   */
  nominations: PropTypes.array,
};

Nominations.defaultProps = {
  authedUser: '',
  authedUserNominations: [],
  nominations: [],
};

const mapStateToProps = ({authedUser, nominations}) => ({
  authedUser,
  authedUserNominations: getAuthedUserNominations(authedUser, nominations),
  nominations: getNominations(nominations),
});

// Nominations export
export default connect(mapStateToProps)(Nominations);
