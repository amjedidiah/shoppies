// Module import
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';

// Reducer imports
import authedUser from 'redux/reducers/authedUser';
import nominations from 'redux/reducers/nominations';

// Export combineReducers
export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  nominations,
});
