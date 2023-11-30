import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { experiencedHiker, weekendWarrior, map, stateControl } from './js/rpg.js';
//changeState, eatingSleepingHikingPerson,


function handleAvatar(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name').value;
  const avatarSelect = document.querySelector('#hikerType option:checked').textContent;
  const displayResults = document.getElementById('displayStats');
  let char;
  if (avatarSelect === 'Weekend Warrior') {
    char = weekendWarrior(nameInput);
  } else {
    char = experiencedHiker(nameInput);
  }

  displayResults.innerText = `${char.name} You have chosen to be a ${avatarSelect}!
  Here are your stats: 
  Health: ${char.health}
  Stamina: ${char.stamina}
  Wisdom: ${char.wisdom}`;

  const divIntro = document.getElementById('intro');
  divIntro.setAttribute("class", "hidden");
  const divSetup = document.getElementById('setup');
  divSetup.removeAttribute("class");
}
function handleBackpack(e) {
  handleAvatar();
  e.preventDefault();
  const backpack = document.querySelector('#items option:checked').textContent;
  const displayResults = document.getElementById('displayBackpack');
  if (backpack === 'Map') {
    const newState = stateControl(map);
    console.log(`NewState value: ${newState.wisdom}`);
    displayResults.innerText = `
  Backpack contents: 
  ${backpack}`;
  } else {
    console.log("else made it");
  }
  //update displayed stats
}


window.addEventListener("load", function () {
  document.querySelector('form#backpack').addEventListener("submit", handleBackpack);
  document.querySelector('form#nameInput').addEventListener("submit", handleAvatar);
});