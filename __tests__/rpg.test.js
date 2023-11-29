import { changeState } from '../src/js/rpg.js';

describe('changeState', () => {

  test('should input a property and update the value', () => {
    const food = changeState("health")(1);
    console.log(food);
    const sleep = changeState("stamina")(1);
    let char1 = { health: 0, stamina: 5 };
    expect(food(char1)).toEqual({health: 1, stamina:5});
  });
});