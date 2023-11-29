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
export const stateControl = storeState();
export const char1 = stateControl("Bubba");
//char1(); //return stats as is
export const food = changeState("health")(1); //add 1 to health function
export const newState = char1(food); //char1 eats, gain 1 health. 

export const canEat = (character) => ({
    eat: (stuff) => {
        return `${character.name} eats ${stuff}`
    }
});
export const canSleep = (character) => ({
    sleep: (time) => {
        return `${character.name} sleeps ${time} hours.`
    }
});

export const canHike = (character) => ({
    hike: (mileage) => {
        return `${character.name} hikes ${mileage} miles.`
    }
});

export const eatingSleepingHikingPerson = (name) => {
  let char = {
    name
  }

  return { ...char, ...canEat(char), ...canSleep(char), ...canHike(char) };
}
//1. Initailize char w stats
//2. give f() eat/sleep/hike
//3. action, update state, return new state
const Matt = eatingSleepingHikingPerson("Matt");
const MattState = stateControl(Matt); //shows state

Matt(food); //matt gets 1 health
MattState;
//export const food = changeState("health")(1); //add 1 to health function
//export const newState = char1(food); //char1 eats, gain 1 health. 