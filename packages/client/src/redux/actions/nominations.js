// Type imports
import {
  RECEIVE_NOMINATIONS,
  REMOVE_NOMINATION,
  RESOLVE_NOMINATIONS,
  SAVE_NOMINATION,
} from 'redux/actions/types';

// Selector imports
import {getAuthedUserNominations} from 'redux/selectors';

// Util imports
import shoppiesAPI from 'utils/shoppiesAPI';

/**
/**
 * Action creator for received nominations
 * @param {nominations} nominations - Nominations received from fetch
 * @return {action} - Action to dispatch
 */
export const receiveNominations = (nominations) => ({
  type: RECEIVE_NOMINATIONS,
  nominations,
});

/**
 * Action creator to update nominations
 * @param {string} action - Action to perform with nomination
 * @param {nomination} nomination - Nomination
 * @return {action} - Action to dispatch
 */
export const updateNominations = (action, nomination) => ({
  type: action === 'nominate' ? SAVE_NOMINATION : REMOVE_NOMINATION,
  action,
  nomination,
});

/**
 * Action creator to update nominations
 * @param {string} action - Action to perform with nomination
 * @param {nomination} nomination - Nomination
 * @return {action} - Action to dispatch
 */
export const handleUpdateNominations = (action, nomination) => (
    dispatch,
    getState,
) => {
  const {authedUser, nominations} = getState();

  const authedUserNominations = getAuthedUserNominations(
      authedUser,
      nominations,
  );

  if (action === 'nominate' && authedUserNominations.length === 5) {
    return alert('The maximum amount of nominations is 5');
  }

  dispatch(updateNominations(action, nomination));

  return shoppiesAPI[action === 'nominate' ? 'post' : 'delete'](
      `/nominations${
      action === 'cancel' ?
        `?imdbID=${nomination.imdbID}&&userID=${nomination.userID}` :
        ''
      }`,
      nomination,
  )
      .then(({data}) => dispatch(receiveNominations(data.data)))
      .catch((err) => console.log(err))
      .finally(() => dispatch({type: RESOLVE_NOMINATIONS}));
};
