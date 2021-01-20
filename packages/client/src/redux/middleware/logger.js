/**
 * Logger middleware
 * @param {store} store - Redux store object
 * @return {function}
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action: ', action);
  const returnValue = next(action);
  console.log('The new state: ', store.getState());
  console.groupEnd();

  return returnValue;
};


// Logger export
export default logger;
