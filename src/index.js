import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {  experiencedHiker, weekendWarrior } from './js/rpg.js';
//changeState, stateControl, eatingSleepingHikingPerson,


function handleAvatar(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name').value;
  const avatarSelect = document.getElementById('hikerType[value=''])selected').textContent;
  avatarSelect = dovc
  console.log(avatarSelect);
  let char;
  if (avatarSelect === 'Weekend Warrior') {
    char = weekendWarrior(nameInput);
    console.log(char);
  } else {
    char = experiencedHiker(nameInput);
    console.log(char);
  }
  const displayResults = document.getElementById('displayStats');
  displayResults.innerText = `${char.name} You have chosen to be a weekend warrior!
  Here are your stats: 
  Health: ${char.health}
  Stamina: ${char.stamina}
  Wisdom: ${char.wisdom}`;
}

window.addEventListener("load", function () {
  document.querySelector('form#nameInput').addEventListener("submit", handleAvatar);
});