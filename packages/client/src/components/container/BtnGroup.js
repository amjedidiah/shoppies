// Module imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FaThumbsUp, FaTrash} from 'react-icons/fa';

// Action creator imports
import {handleUpdateNominations} from 'redux/actions/nominations';
import {getIfInMyNominations} from 'redux/selectors';

/**
 * BtnGroup component
 * @component
 * @param {{
 *          authedUser: string,
 *          handleUpdateNominations: function,
 *          ifNominatedByAuthedUser: boolean,
 *          ifInMyNominations: booelan,
 *          imdbID: string}} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const ifInMyNominations=false
 * const ifNominatedByAuthedUser=false
 * const imdbID=''
 *
 * return <BtnGroup
 *          ifInMyNominations={ifInMyNominations}
 *          ifNominatedByAuthedUser={ifNominatedByAuthedUser}
 *          imdbID={imdbID}
 *        />
 */
const BtnGroup = (props) => (
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
          (props.ifNominatedByAuthedUser &&
            action === 'cancel') ||
          (!props.ifNominatedByAuthedUser &&
            !props.ifInMyNominations &&
            action === 'nominate');

        return (
          <button
            key={action}
            className={`btn btn-outline-${btnColor} ${
              !shouldDisplay && 'd-none'
            } rounded-pill text-uppercase`}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              props.handleUpdateNominations(action, {
                userID: props.authedUser,
                imdbID: props.imdbID,
              });
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
   * BtnGroup handleUpdateNominations
   */
  handleUpdateNominations: PropTypes.func,
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
};

BtnGroup.defaultProps = {
  authedUser: '',
  handleUpdateNominations: () => {},
  ifInMyNominations: false,
  ifNominatedByAuthedUser: false,
  imdbID: '',
};

const mapStateToProps = ({authedUser, nominations}, {imdbID}) => ({
  authedUser,
  ifInMyNominations: getIfInMyNominations(
      authedUser,
      imdbID,
      nominations,
  ),
});

// BtnGroup export
export default connect(mapStateToProps, {handleUpdateNominations})(BtnGroup);
