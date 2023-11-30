export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};
export const storeState = (initialState = {}) => {
  let currentState = initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};
//}
export const stateControl = storeState();

export const canEat = (character) => ({
  eat: (stuff) => {
    return `${character.name} eats ${stuff}`;
  }
});
export const canSleep = (character) => ({
  sleep: (time) => {
    return `${character.name} sleeps ${time} hours.`;
  }
});

export const canHike = (character) => ({
  hike: (mileage) => {
    return `${character.name} hikes ${mileage} miles.`;
  }
});

export const eatingSleepingHikingPerson = (state) => {
  return { ...state, ...canEat(state), ...canSleep(state), ...canHike(state) };
};

export const experiencedHiker = (name) => {
  let state = {
    name,
    wisdom: 8,
    stamina: 4,
    health: 10,
  };
  return Object.assign(state, eatingSleepingHikingPerson(state));
};
export const weekendWarrior = (name) => {
  let state = {
    name,
    wisdom: 2,
    stamina: 8,
    health: 10,
  };
  return Object.assign(state, eatingSleepingHikingPerson(state));
};


//let kim = weekendWarrior('Kim') //works to create char w set props. now a function
//console.log(kim()); //call to get current stats

//console.log(stateControl.toString());

//health
export const apple = changeState("health")(1);
export const bananaSlug = changeState("health")(-3);
//console.log(kim(bananaSlug));
export const squirrel = changeState("health")(2);
//export const kimSlug = kim(bananaSlug);
//console.log(kimSlug);
// stamina
export const obstacle = changeState("stamina")(-3);
export const rest = changeState("stamina")(4);
export const fullSun = changeState("stamina")(-2);
export const shade = changeState("stamina")(1);
//wisdom
export const poisonIvy = changeState("widsom")(2);
export const map = changeState("wisdom")(4);
export const sunblock = changeState("wisdom")(2);
export const portableCharge = changeState("wisdom")(-3);
//const 
//storeState(apple)
//const kimEat = apple(kim); 
//console.log(kimEat); //displays updated stats
