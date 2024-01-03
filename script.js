const weapons = document.querySelectorAll(".weapons__img");
const playerWeaponSpan = document.getElementById("playerWeapon");
const computerWeaponSpan = document.getElementById("computerWeapon");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const headerStrings = document.querySelectorAll(".header p");

let playerScore = 0;
let computerScore = 0;

const getComputerWeapon = function () {
  const randomNum = Math.floor(Math.random() * 15) + 1;
  if (randomNum <= 5) {
    return "rock";
  } else if (randomNum <= 10) {
    return "scissors";
  } else if (randomNum <= 15) {
    return "paper";
  } else {
    return "ERROR";
  }
};
