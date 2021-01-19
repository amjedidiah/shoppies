// Module imports
import {Component} from 'react';
import PropTypes from 'prop-types';

// Component import
import BtnGroup from 'components/presentation/BtnGroup';

// API import
import omdbAPI from 'utils/omdbAPI';

/**
 * MovieCard component
 * @component
 * @constructor
 *
 * @example
 * const authedUser=''
 * const ifNominatedByAuthedUser=''
 * const ifInMyNominations=false
 * const imdbID=''
 * const movie={}
 * const nomination={}
 * const onUpdateNomination=()=>{}
 * const xtraClassName={}
 *
 * return <MovieCard
 *          authedUser={authedUser}
 *          ifInMyNominations={ifInMyNominations}
 *          ifNominatedByAuthedUser={ifNominatedByAuthedUser}
 *          imdbID={imdbID}
 *          movie={movie}
 *          nomination={nomination}
 *          onUpdateNomination={onUpdateNomination}
 *          xtraClassName={xtraClassName}
 *        />
 */
class MovieCard extends Component {
  state = {
    movie: {},
  };

  static propTypes = {
    /**
     * MovieCard authedUser
     */
    authedUser: PropTypes.string,
    /**
     * MovieCard ifInMyNominations
     */

    ifInMyNominations: PropTypes.bool,
    /**
     * MovieCard ifNominatedByAuthedUser
     */
    ifNominatedByAuthedUser: PropTypes.bool,
    /**
     * MovieCard imdbID
     */
    imdbID: PropTypes.string,
    /**
     * MovieCard movie
     */
    movie: PropTypes.object,
    /**
     * MovieCard nomination
     */
    nomination: PropTypes.object,
    /**
     * MovieCard onUpdateNomination
     */
    onUpdateNomination: PropTypes.func,
    /**
     * MovieCard xtraClassName
     */
    xtraClassName: PropTypes.object,
  };

  static defaultProps = {
    authedUser: '',
    ifInMyNominations: false,
    ifNominatedByAuthedUser: false,
    imdbID: '',
    movie: {},
    nomination: {},
    onUpdateNomination: () => {},
    xtraClassName: {},
  };

  /**
   * Fetch single movie using imdbID
   * @param {string} i - Movie imdbID
   * @return {Promise<object>}
   */
  fetchMovie = (i) =>
    omdbAPI
        .get('/?apikey=ce4b5ffd', {params: {i}})
        .then(({data}) => this.setState(() => ({movie: data})))
        .catch((err) => console.log(err));

  /**
   * Executes once MovieCard component mounts
   * @return {function}
   */
  componentDidMount = () => {
    const {imdbID, movie} = this.props;

    return imdbID ? this.fetchMovie(imdbID) : this.setState(() => ({movie}));
  };

  /**
   * Renders the MovieCard UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {Genre, imdbID, Poster, Title, Year} = this.state.movie;
    const {
      authedUser,
      ifInMyNominations,
      ifNominatedByAuthedUser,
      nomination,
      onUpdateNomination,
      xtraClassName,
    } = this.props;

    return (
      <div className={`bg-white ${xtraClassName?.card}`}>
        {Poster && Poster !== 'N/A' && (
          <div className="img-holder">
            <img
              src={Poster}
              className={`img-fluid ${xtraClassName?.img}`}
              alt={Title}
              srcSet={`${Poster} 4.18x`}
              width="100"
            />
          </div>
        )}
        <div className={xtraClassName?.info}>
          <p className="lead text-truncate">
            <strong>{Title}</strong>
          </p>
          <p>
            <span className="badge badge-primary--custom text-white">
              {Year} {this.props.imdbID && ` | ${Genre}`}
            </span>
          </p>

          {this.props.imdbID && (
            <p className="text-right">
              by {!ifNominatedByAuthedUser ? nomination?.userID : 'me'}
            </p>
          )}

          <BtnGroup
            authedUser={authedUser}
            imdbID={imdbID}
            ifNominatedByAuthedUser={ifNominatedByAuthedUser}
            ifInMyNominations={ifInMyNominations}
            onUpdateNomination={onUpdateNomination}
          />
        </div>
      </div>
    );
  };
}

// MovieCard export
export default MovieCard;