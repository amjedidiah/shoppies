// Module imports
import PropTypes from 'prop-types';

// Component imports
import MovieCard from 'components/container/MovieCard';

// Asset imports
import 'assets/css/nominations.css';

/**
 * @component
 * @return {object} - The UI DOm object
 *
 * @example
 * const authedUser = ''
 * const authedUserNominations = []
 * const nominations = []
 * const onUpdateNomination = () => {}
 *
 * return <Nominations
 *          authedUser={authedUser}
 *          authedUserNominations={authedUserNominations}
 *          nominations={nominations}
 *          onUpdateNomination={onUpdateNomination}
 *         />
 */
const Nominations = ({
  authedUser,
  authedUserNominations,
  nominations,
  onUpdateNomination,
}) => {
  /**
   * Render nominations
   * @param {array} noms
   * @return {object}
   */
  const renderNoms = (noms) =>
    noms.map((nomination) => (
      <div key={nomination?._id} className="mb-4 nomination">
        <MovieCard
          authedUser={authedUser}
          authedUserNominations={authedUserNominations}
          imdbID={nomination?.imdbID}
          nomination={nomination}
          onUpdateNomination={onUpdateNomination}
          xtraClassName={{
            card: 'shadow',
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
                  {renderNoms(authedUserNominations)}
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
  /**
   * Nominations onUpdateNomination
   */
  onUpdateNomination: PropTypes.func,
};

Nominations.defaultProps = {
  authedUser: '',
  authedUserNominations: [],
  nominations: [],
  onUpdateNomination: () => {},
};

// Nominations export
export default Nominations;
