/**
 * Get nominations for authed user
 * @param {string} authedUser - authed user from state
 * @param {nomination[]} nominations - nominations from state
 * @return {nomination[]}
 */
export const getAuthedUserNominations = (authedUser, nominations) =>
  getNominations(nominations).filter(({userID}) => authedUser === userID);

/**
 * Determines if particluar movie is in authedUser nominations
 * @param {string} authedUser - authed user from state
 * @param {string} imdbID - imdb ID of a movie
 * @param {nomination[]} nominations - nominations from state
 * @return {boolean}
 */
export const getIfInMyNominations = (authedUser, imdbID, nominations) =>
  getAuthedUserNominations(authedUser, nominations)
      .map((n) => n.imdbID)
      .includes(imdbID);

/**
 * Determines if the authed user made a particular nomination
 * @param {string} authedUser - authed user from state
 * @param {nomination} nomination - A single nomination
 * @return {boolean}
 */
export const getIfNominatedByAuthedUser = (authedUser, nomination) =>
  nomination?.userID ===
  authedUser;

/**
 * Get nominations for authed user
 * @param {nomination[]} nominations - nominations from state
 * @return {nomination[]}
 */
export const getNominations = (nominations) => {
  const {dbNom, storeNom} = nominations;

  return (storeNom.action === 'nominate' ?
    [...dbNom, storeNom?.nomination] :
    dbNom.filter(
        (n) =>
          n.imdbID !== storeNom?.nomination?.imdbID &&
          n.userID !== storeNom?.nomination?.userID,
    )
  ).sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : b.createdAt < a.createdAt ? -1 : 0,
  );
};
