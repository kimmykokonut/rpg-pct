import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {  experiencedHiker, weekendWarrior } from './js/rpg.js';
//changeState, stateControl, eatingSleepingHikingPerson,


function handleAvatar(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name').value;
  const avatarSelect = document.querySelector('#hikerType option:checked').textContent;
  const displayResults = document.getElementById('displayStats');
  let char;
  if (avatarSelect === 'Weekend Warrior') {
    char = weekendWarrior(nameInput);
    displayResults.innerText = `${char.name} You have chosen to be a ${avatarSelect}!
    Here are your stats: 
    Health: ${char.health}
    Stamina: ${char.stamina}
    Wisdom: ${char.wisdom}`;
  } else {
    char = experiencedHiker(nameInput);
    displayResults.innerText = `${char.name} You have chosen to be a ${avatarSelect}!
    Here are your stats: 
    Health: ${char.health}
    Stamina: ${char.stamina}
    Wisdom: ${char.wisdom}`;
  }

//   displayResults.innerText = `${char.name} You have chosen to be a ${avatarSelect}!
//   Here are your stats: 
//   Health: ${char.health}
//   Stamina: ${char.stamina}
//   Wisdom: ${char.wisdom}`;
}

window.addEventListener("load", function () {
  document.querySelector('form#nameInput').addEventListener("submit", handleAvatar);
});