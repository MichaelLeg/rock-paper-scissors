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

weapons.forEach((weapon) => {
  weapon.addEventListener("click", (event) => {
    const playerWeapon = weapon.id;
    const computerWeapon = getComputerWeapon();

    if (playerScore === 5) {
      headerStrings[0].textContent = "Congratulations!";
      headerStrings[1].textContent = "You win!";
    } else if (computerScore === 5) {
      headerStrings[0].textContent = "Unfortunately...";
      headerStrings[1].textContent = "You lose!";
    } else {
      if (playerWeapon === "paper" && computerWeapon === "rock") {
        playerWeaponSpan.textContent = "Paper";
        computerWeaponSpan.textContent = "Rock";
        playerScore++;
      } else if (playerWeapon === "paper" && computerWeapon === "scissors") {
        playerWeaponSpan.textContent = "Paper";
        computerWeaponSpan.textContent = "Scissors";
        computerScore++;
      } else if (playerWeapon === "scissors" && computerWeapon === "paper") {
        playerWeaponSpan.textContent = "Scissors";
        computerWeaponSpan.textContent = "Paper";
        playerScore++;
      } else if (playerWeapon === "scissors" && computerWeapon === "rock") {
        playerWeaponSpan.textContent = "Scissors";
        computerWeaponSpan.textContent = "Rock";
        computerScore++;
      } else if (playerWeapon === "rock" && computerWeapon === "scissors") {
        playerWeaponSpan.textContent = "Rock";
        computerWeaponSpan.textContent = "Scissors";
        playerScore++;
      } else if (playerWeapon === "rock" && computerWeapon === "paper") {
        playerWeaponSpan.textContent = "Rock";
        computerWeaponSpan.textContent = "Paper";
        computerScore++;
      } else {
        playerWeaponSpan.textContent =
          playerWeapon.charAt(0).toUpperCase() + playerWeapon.slice(1);
        computerWeaponSpan.textContent =
          computerWeapon.charAt(0).toUpperCase() + computerWeapon.slice(1);
      }
      playerScoreSpan.textContent = playerScore;
      computerScoreSpan.textContent = computerScore;
    }
  });
});
