// Model imports
import {showLoading} from 'react-redux-loading';

// Action creator imnports
import {setAuthedUser} from './authedUser';
import {receiveNominations} from './nominations';

// Util import
import shoppiesAPI from 'utils/shoppiesAPI';

/**
 * Gets initial data
 * @return {Promise}
 */
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(setAuthedUser());

  return shoppiesAPI
      .get('/nominations')
      .then(({data}) => dispatch(receiveNominations(data.data)))
      .catch((err) => console.log(err));
};
