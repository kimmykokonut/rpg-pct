const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};
const storeState = (initialState = {}) => {
  // const charStates = {};
  // return (charId) => {
  //   if (!charStates[charId]) {
  //     charStates[charId] = {};
  //   }
    let currentState = initialState;
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = { ...newState };
      return newState;
    }
  }
//}
const stateControl = storeState();

const canEat = (character) => ({
  eat: (stuff) => {
    return `${character.name} eats ${stuff}`
  }
});
const canSleep = (character) => ({
  sleep: (time) => {
    return `${character.name} sleeps ${time} hours.`
  }
});

const canHike = (character) => ({
  hike: (mileage) => {
    return `${character.name} hikes ${mileage} miles.`
  }
});

const eatingSleepingHikingPerson = (state) => {
  return { ...state, ...canEat(state), ...canSleep(state), ...canHike(state) };
}

const experiencedHiker = (name) => {
  let state = {
    name,
    wisdom: 8,
    stamina: 4,
    health: 10,
  }
  return Object.assign(state, eatingSleepingHikingPerson(state))
}
const weekendWarrior = (name) => {
  let state = {
    name,
    wisdom: 2,
    stamina: 8,
    health: 10,
  };
  return storeState(Object.assign(state, eatingSleepingHikingPerson(state)))
}


let kim = weekendWarrior('Kim') //works to create char w set props. now a function
console.log(kim()); //call to get current stats

//console.log(stateControl.toString());

//health
const apple = changeState("health")(1);
const bananaSlug = changeState("health")(-3);
console.log(kim(bananaSlug));
const squirrel = changeState("health")(2)
const kimSlug = kim(bananaSlug);
console.log(kimSlug);
// stamina
const obstacle = changeState("stamina")(-3);
const rest = changeState("stamina")(4);
const fullSun = changeState("stamina")(-2);
const shade = changeState("stamina")(1);
//wisdom
const poisonIvy = changeState("widsom")(2);
const map = changeState("wisdom")(4);
const sunblock = changeState("wisdom")(2);
const portableCharge =changeState("wisdom")(-3);
//const 
storeState(apple)
//const kimEat = apple(kim); 
//console.log(kimEat); //displays updated stats
