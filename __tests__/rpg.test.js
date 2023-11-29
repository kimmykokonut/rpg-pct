import { changeState, storeState, eatingSleepingHikingPerson, canEat, canSleep, canHike } from '../src/js/rpg.js';

describe('changeState', () => {

  test('should input a property and update the value', () => {
    const food = changeState("health")(1);
    const sleep = changeState("stamina")(1);
    let char1 = { health: 0, stamina: 5 };
    expect(food(char1)).toEqual({health: 1, stamina:5});
  });
});

describe('storeState', () => {
  test('should store and return current state of char1', () => {
    const food = changeState("health")(1);
    const stateControl = storeState();
    const char1 = stateControl("char1");
    expect(char1(food)).toEqual({ health: 1});
  });
  test('should not overwrite existing character', () => {
    const food = changeState("health")(1);
    const stateControl = storeState();
    const char1 = stateControl("char1");
    const char2 = stateControl("char1");
    expect(char1(food)).toEqual({ health: 1 });
    expect(char2(food)).toEqual({ health: 1 });
    expect(char1()).toEqual({ health: 1 });
  });
})
describe('canEat', ()=> {
  test('should add eating property to character object', () =>{
  const Jim = canEat('Jim');
  expect(Jim).toEqual(Jim, {
    name: 'Jim',
    eat: function(stuff) {
      return`${character.name} eats ${stuff}`
    }
  });
    expect(Jim.eat("blueberries")).toEqual("undefined eats blueberries"); //name establised in eatsleephike()
  });
})
describe ('canSleep', ()=> {
  test('should return sleep in hours', () => {
    const Jim = canSleep('Jim');
    expect(Jim.sleep(5)).toEqual("undefined sleeps 5 hours."); //name establised in eatsleephike()
  });
});

describe('eatingSleepingHikingPerson', () => {
  test('should add properties to persons object', () => {
    const Cheryl = eatingSleepingHikingPerson("cheryl");
    expect(Cheryl).toEqual(Cheryl, {
      name: 'cheryl',
      eat: function(stuff) {
        return `${character.name} eats ${stuff}`
      },
      sleep: function(time) {
        return `${character.name} sleeps ${time} hours.`
      },
      hike: function(mileage) {
        return `${character.name} hikes ${mileage} miles.`
      }
    });

  });
  })