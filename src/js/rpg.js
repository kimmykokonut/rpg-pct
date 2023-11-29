export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value 
    });
  };
};

export const storeState = () => {
  const charStates = {};
  return (charId) => {
    if (!charStates[charId]) {
      charStates[charId] = {};
    }
    let currentState = charStates[charId];
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = { ...newState };
      return newState;
    };
  };
}
const stateControl = storeState();
const char1 = stateControl("Bubba");