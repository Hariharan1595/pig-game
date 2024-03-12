const btnRoll = document.querySelector(".roll");
const diceImg = document.querySelector(".dice-img");
const currentPoints0 = document.getElementById("current-0");
const currentPoints1 = document.getElementById("current-1");
const player = document.querySelector(".player");
const btnHold = document.querySelector(".hold");
const score0 = document.getElementById("score-0");
const score1 = document.getElementById("score-1");
const newGame = document.querySelector(".new-game");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");

let score = 0;
let playing = true;
let currentScore = 0;
let playerActive = 0;
let playerScore = [0, 0];
const switchPlayer = function () {
  document.getElementById(`current-${playerActive}`).textContent = 0;
  currentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  player0.classList.toggle("player-active");
  player1.classList.toggle("player-active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    diceImg.classList.remove("hidden");
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `image/dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current-${playerActive}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    playerScore[playerActive] += currentScore;
    document.getElementById(`score-${playerActive}`).textContent =
      playerScore[playerActive];

    if (playerScore[playerActive] >= 50) {
      document.querySelector(`.player-${playerActive}`).classList.add("winner");
      document
        .querySelector(`.player-${playerActive}`)
        .classList.remove("player-active");
      diceImg.classList.add("hidden");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener("click", function () {
  playing = true;
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  player0.classList.add("player-active");
  player1.classList.remove("player-active");
  score0.textContent = 0;
  score1.textContent = 0;
  currentPoints0.textContent = 0;
  currentPoints1.textContent = 0;
  score = 0;
  currentScore = 0;
  playerActive = 0;
  playerScore = [0, 0];
  diceImg.classList.add("hidden");
});
