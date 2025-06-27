let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submitBtn = document.querySelector("#subt");
const previousGuess = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".guess-remaining");
const highLow = document.querySelector(".highLow");
const resultParas = document.querySelector(".resultParas");

const prevGuesses = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    prevGuesses.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The correct number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right! 🎉🎉🎉");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("You guessed TOO high.");
  } else {
    displayMessage("You guessed TOO low.");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuess.innerHTML += `${guess}, `;
  guessRemaining.innerHTML = `${11 - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  highLow.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submitBtn.setAttribute("disabled", "");

  const newGameBtn = document.createElement("button");
  newGameBtn.textContent = "Start New Game";
  newGameBtn.setAttribute("id", "newGame");
  newGameBtn.classList.add("newGameBtn");

  resultParas.appendChild(newGameBtn);
  playGame = false;

  newGameBtn.addEventListener("click", newGame);
}

function newGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuesses.length = 0;
  numGuess = 1;
  previousGuess.innerHTML = "";
  guessRemaining.innerHTML = "10";
  highLow.innerHTML = "";
  userInput.removeAttribute("disabled");
  submitBtn.removeAttribute("disabled");
  document.querySelector("#newGame").remove();
  playGame = true;
}
