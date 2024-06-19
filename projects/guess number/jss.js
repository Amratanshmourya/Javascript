let num = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const dismsg = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevguess = [];
let numguess = 1
let playgame = true;

if (playgame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const userguess = parseInt(userinput.value);
        validateGuess(userguess);
    })
}
function validateGuess(guess) {
    if (isNaN(guess) || guess > 100 || guess < 1 || guess == " ") {
        displayMessage(" Please enter valid number and retry!!");

    }
    else{
        prevguess.push(guess);
        if (numguess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${num}`);
            endgame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (num === guess) {
        displayMessage("Your guess is right");
        endgame();
    }
    else if (num > guess) {
        displayMessage("you guess is tooo loww");
    }
    else if (num < guess) {
        displayMessage("you guess is tooo high");
    }
}
function displayGuess(guess) {
    userinput.value = " ";
    guessslot.innerHTML += `${guess} , `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`



}
function displayMessage(message) {

    dismsg.innerHTML = `<h2> ${message} </h2>`
}
function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        num = parseInt(Math.random() * 100 + 1);
        prevguess = []
        numguess = 1
        guessslot.innerHTML =
        remaining.innerHTML = `${11 - numguess}`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p)
        playgame = true;
    })
}