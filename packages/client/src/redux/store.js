// Module import
import {createStore} from 'redux';

// Combinereducers import
import reducers from 'redux/reducers';

// Middleware import
import middleware from 'redux/middleware';

/**
 * Redux store
 * @type {store}
 */
const store = createStore(reducers, middleware );

// Store export
export default store;
