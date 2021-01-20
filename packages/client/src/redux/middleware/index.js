// Module imports
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Middleware import
import logger from 'redux/middleware/logger';

// Export root middleware
export default applyMiddleware(thunk, logger );
