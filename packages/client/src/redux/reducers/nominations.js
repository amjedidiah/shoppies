/**
 * Reducer function for nominations
 * @param {nominations} state - current nominations state
 * @param {action} action - Redux action
 * @return {nominations} - returned nominations state
 */
const nominations = (state = {dbNom: [], storeNom: {}}, action) => {
  console.log(action, state);
  return (
    {
      RECEIVE_NOMINATIONS: {
        ...state,
        dbNom: action.nominations,
        storeNom: {},
      },
      SAVE_NOMINATION: {
        ...state,
        storeNom: {action: action.action, nomination: action.nomination},
      },
      REMOVE_NOMINATION: {
        ...state,
        storeNom: {action: action.action, nomination: action.nomination},
      },
      RESOLVE_NOMINATIONS: {
        ...state,
        storeNom: {},
      },
    }[action.type] || state
  );
};

// Export nominations reducer
export default nominations;
