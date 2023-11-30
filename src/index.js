import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { experiencedHiker, weekendWarrior, map, stateControl } from './js/rpg.js';
//, eatingSleepingHikingPerson,
function displayResults(char) {
    
}

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

  //  handleBackpack(char);
  // }
  // function handleBackpack(e, char) {
  //   e.preventDefault();
  const backpack = document.querySelector('#items option:checked').textContent;
  const displayResults2 = document.getElementById('displayBackpack');
  console.log(backpack);
  if (backpack === 'Map') {
    const newState = map(char); //not working
    console.log(newState);
    console.log(`NewState value: ${newState.wisdom}`);
    displayResults2.innerText = `
  Backpack contents:
  ${backpack}
  stats:
  Here are your stats: 
  Health: ${newState.health}
  Stamina: ${newState.stamina}
  Wisdom: ${newState.wisdom}`;  //works
  } else {
    console.log("else made it");
  }
  //displayResults.innerText = ''; //not a sep event
  //divSetup.setAttribute("class", "hidden");

  //hide display stats div
  console.log(char);
  //update displayed stats
}



window.addEventListener("load", function () {
  document.querySelector('form#nameInput').addEventListener("submit", handleAvatar);
  document.querySelector('form#backpack').addEventListener("submit", handleAvatar);

});