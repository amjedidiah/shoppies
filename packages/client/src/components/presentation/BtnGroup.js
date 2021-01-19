// Module imports
import PropTypes from 'prop-types';
import {FaThumbsUp, FaTrash} from 'react-icons/fa';

/**
 * BtnGroup component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser=''
 * const ifInMyNominations=false
 * const ifNominatedByAuthedUser = false
 * const imdbID=''
 * const onUpdateNomination=()=>{}
 *
 * return <BtnGroup
 *          authedUser={authedUser}
 *          ifInMyNominations={ifInMyNominations}
 *          ifNominatedByAuthedUser={ifNominatedByAuthedUser}
 *          imdbID={imdbID}
 *          onUpdateNomination={onUpdateNomination}
 *        />
 */
const BtnGroup = ({
  authedUser,
  ifNominatedByAuthedUser,
  ifInMyNominations,
  imdbID,
  onUpdateNomination,
}) => (
  <div>
    <p className="my-2">
      {['cancel', 'nominate'].map((action) => {
        /**
         * @type {string} - Button color
         */
        const btnColor = action === 'cancel' ? 'danger' : 'success';

        /**
         * @type {boolean}
         */
        const shouldDisplay =
          (ifNominatedByAuthedUser && action === 'cancel') ||
          (!ifNominatedByAuthedUser &&
            !ifInMyNominations &&
            action === 'nominate');

        return (
          <button
            key={action}
            className={`btn btn-outline-${btnColor} ${
              (!shouldDisplay ||
                (ifNominatedByAuthedUser && action === 'nominate')) &&
              'd-none'
            } rounded-pill text-uppercase`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUpdateNomination(action, {userID: authedUser, imdbID});
            }}
          >
            <span className="mr-2">
              {action === 'cancel' ? <FaTrash /> : <FaThumbsUp />}
            </span>
            {action}
          </button>
        );
      })}
    </p>
  </div>
);

BtnGroup.propTypes = {
  /**
   * BtnGroup authedUser
   */
  authedUser: PropTypes.string,
  /**
   * BtnGroup ifInMyNominations
   */
  ifInMyNominations: PropTypes.bool,
  /**
   * BtnGroup ifNominatedByAuthedUser
   */
  ifNominatedByAuthedUser: PropTypes.bool,
  /**
   * BtnGroup imdbID
   */
  imdbID: PropTypes.string,
  /**
   * BtnGroup onUpdateNomination
   */
  onUpdateNomination: PropTypes.func,
};

BtnGroup.defaultProps = {
  authedUser: '',
  ifInMyNominations: false,
  ifNominatedByAuthedUser: false,
  imdbID: '',
  onUpdateNomination: () => {},
};

// BtnGroup export
export default BtnGroup;
