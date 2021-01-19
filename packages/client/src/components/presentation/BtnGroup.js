// Module imports
import PropTypes from 'prop-types';

/**
 * BtnGroup component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser=''
 * const movieID=''
 * const nominationID=''
 * const nominations={}
 * const onSetAuthedUser=()=>{}
 * const onUpdateNomination=()=>{}
 * const xtraClassName={}
 *
 * return <BtnGroup
 *          authedUser={authedUser}
 *          movieID={movieID}
 *          nominationID={nominationID}
 *          nominations={nominations}
 *          onSetAuthedUser={onSetAuthedUser}
 *          onUpdateNomination={onUpdateNomination}
 *          xtraClassName={xtraClassName}
 *        />
 */
const BtnGroup = ({
  authedUser,
  movieID,
  nominationID,
  nominations,
  onSetAuthedUser,
  onUpdateNomination,
  xtraClassName,
}) => (
  <div>
    {authedUser ? (
      <>
        <p className="my-2">
          {!(nominations[authedUser] || []).includes(movieID) ? (
            <button
              className={`btn btn-outline-success rounded-pill
              ${xtraClassName?.nominate}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onUpdateNomination('add', {authedUser, movieID});
              }}
            >
              <span className="mr-2">
                <i className="fas fa-thumbs-up"></i>
              </span>
              Nominate
            </button>
          ) : (
            <button
              className={`btn btn-outline-danger rounded-pill
              ${xtraClassName?.cancel}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onUpdateNomination('remove', nominationID)
                ;
              }}
            >
              <span className="mr-2">
                <i className="fas fa-trash"></i>
              </span>
              Cancel
            </button>
          )}
        </p>
      </>
    ) : (
      <>
        <p className="my-2">
          <button
            className={`btn rounded-pill ${xtraClassName?.google?.btn}`}
            type="button"
            onClick={() => onSetAuthedUser('google')}
          >
            <span
              className={`mr-2 text-primary--custom--2
              ${xtraClassName?.google?.text}`}
            >
              <i className="fas fa-thumbs-up"></i>
            </span>
            Google
          </button>
          <button
            className={`btn rounded-pill ${xtraClassName?.anon?.btn}`}
            type="button"
            onClick={() => onSetAuthedUser('anon')}
          >
            <span
              className={`mr-2 text-primary--custom--2
              ${xtraClassName?.anon?.text}`}
            >
              <i className="fas fa-thumbs-up"></i>
            </span>
            Anonymously
          </button>
        </p>
      </>
    )}
  </div>
);

BtnGroup.propTypes = {
  /**
   * BtnGroup authedUser
   */
  authedUser: PropTypes.string,
  /**
   * BtnGroup movieID
   */
  movieID: PropTypes.string,
  /**
   * BtnGroup nominationID
   */
  nominationID: PropTypes.string,
  /**
   * BtnGroup nominations
   */
  nominations: PropTypes.object,
  /**
   * BtnGroup onSetAuthedUser
   */
  onSetAuthedUser: PropTypes.func,
  /**
   * BtnGroup onUpdateNomination
   */
  onUpdateNomination: PropTypes.func,
  /**
   * BtnGroup xtraClassName
   */
  xtraClassName: PropTypes.object,
};

BtnGroup.defaultProps = {
  authedUser: '',
  movieID: '',
  nominationID: '',
  nominations: {},
  onSetAuthedUser: () => {},
  onUpdateNomination: () => {},
  xtraClassName: {},
};

// BtnGroup export
export default BtnGroup;
