import { changeState, storeState } from '../src/js/rpg.js';

describe('changeState', () => {

  test('should input a property and update the value', () => {
    const food = changeState("health")(1);
    console.log(food);
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


