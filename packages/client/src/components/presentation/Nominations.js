// Module imports
import PropTypes from 'prop-types';

// Component imports
import MovieCard from 'components/container/MovieCard';

// Asset imports
import 'assets/css/nominations.css';

/**
 * @component
 * @return {object} - The UI DOm object
 */
const Nominations = ({
  authedUser,
  nominations,
  onSetAuthedUser,
  onUpdateNomination,
}) => (
  <section id="nominations">
    <h2 className="d-none">Nominations</h2>

    <div className="container">
      <div className="row">
        <div className="col-12 col-lg">
          <div className="my-3 rounded">
            <h4 className="text-gold font-weight-bold">Recent Nominations</h4>

            <div className="d-flex flex-wrap mt-3 row--nomination">
              {[...Object.values(nominations)].map((nomination) => (
                <div key={nomination?.id} className="mb-4 nomination">
                  <MovieCard
                    authedUser={authedUser}
                    category={nomination?.category}
                    imdbID={nomination?.imdbID}
                    nomination={nomination}
                    nominations={nominations}
                    onSetAuthedUser={onSetAuthedUser}
                    onUpdateNomination={onUpdateNomination}
                    xtraClassName={{
                      card: 'shadow',
                      info: 'p-2',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {authedUser && (
          <div className="col-12 col-lg-3 col-xl-5">
            <div className="my-3 rounded">
              <h4 className="text-gold font-weight-bold">Your Nominations</h4>

              <div className="d-flex flex-wrap mt-3 row--nomination">
                {(nominations[authedUser] || []).map((nomination) => (
                  <div
                    key={nomination?.id}
                    className="mb-4 nomination nomination--yours"
                  >
                    <MovieCard
                      authedUser={authedUser}
                      category={nomination?.category}
                      imdbID={nomination?.imdbID}
                      nomination={nomination}
                      nominations={nominations}
                      onSetAuthedUser={onSetAuthedUser}
                      onUpdateNomination={onUpdateNomination}
                      xtraClassName={{
                        card: 'shadow',
                        info: 'p-2',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

Nominations.propTypes = {
  /**
   * Nominations authedUser
   */
  authedUser: PropTypes.string,
  /**
   * Nominations nominations
   */
  nominations: PropTypes.object,
  /**
   * Nominations onSetAuthedUser
   */
  onSetAuthedUser: PropTypes.func,
  /**
   * Nominations onUpdateNomination
   */
  onUpdateNomination: PropTypes.func,
};

Nominations.defaultProps = {
  authedUser: '',
  nominations: {},
  onSetAuthedUser: () => {},
  onUpdateNomination: () => {},
};

// Nominations export
export default Nominations;
