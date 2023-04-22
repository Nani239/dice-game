const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.querySelector(".current--0");
const current1El = document.querySelector(".current--1");
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

diceEl.classList.add("hidden");
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener("click", function () {
  //generating random number from 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //Rolling the dice
  if (dice !== 1) {
    //Add dice to current score
    currentScore = currentScore + dice;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //swith player
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    
  }
});
