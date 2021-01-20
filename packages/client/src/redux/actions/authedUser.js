// Type imports
import {SET_AUTHED_USER} from 'redux/actions/types';

// Util imports
import makeid from 'utils/makeid';

/**
 * Action creator to unset authed user
 * @return {action} - The action to dispatch
 */
export const setAuthedUser = () => (dispatch, getState) => {
  if (!getState().authedUser) {
    const userID = makeid(12);
    localStorage.setItem('authedUser', userID);
    return {type: SET_AUTHED_USER, userID};
  }
};
