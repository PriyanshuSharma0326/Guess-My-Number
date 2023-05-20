let chances = null;
let previous = null;
let randomNumber = null;
let guessedNumber = null;
let win = 0;

const playerGuess = document.querySelector('#player-guess');

const startButton = document.querySelector('.start-button');
const guessButton = document.querySelector('.guess-button');

const chancesLeft = document.querySelector('.chances-left');
const previousGuess = document.querySelector('.previous-guess');
const announcement = document.querySelector('.game-announcement');

startButton.addEventListener('click', () => {
    init();
});

guessButton.addEventListener('click', () => {
    if(chances && !win) {
        if(playerGuess.value) {
            previous = playerGuess.value;
            guessedNumber = Number(playerGuess.value);
            chances--;
            chancesLeft.innerText = chances;

            if(guessedNumber > randomNumber) {
                announcement.style.color = 'rgba(255, 0, 0, 0.75)';
                announcement.innerText = 'Too High!';
            }
            else if(guessedNumber < randomNumber) {
                announcement.style.color = 'rgba(255, 0, 0, 0.75)';
                announcement.innerText = 'Too Low!';
            }
            else {
                announcement.style.color = 'green';
                announcement.innerText = 'You got it right!';
                win = 1;
            }

            previousGuess.innerText = previous;
        }
        else {
            previous = null;
            announcement.innerText = 'No Input!';
        }
    }
    else if(win) {
        announcement.innerText = 'You have already won!';
    }
    else if(chances === null) {
        announcement.style.color = 'rgba(255, 0, 0, 0.75)';
        announcement.innerText = 'Start the game before you guess!';
    }
    else if(!chances && !win) {
        announcement.innerText = 'You don\'t have any attempts left!';
    }
    
});

function generateRandom() {
    return Math.floor(Math.random()*100);
}

function init() {
    win = 0;
    chances = 15;
    chancesLeft.innerText = chances;

    playerGuess.value = null;
    previousGuess.innerText = null;

    announcement.innerText = 'No guesses yet!';
    announcement.style.color = 'rgba(0, 0, 0, 0.75)';

    randomNumber = generateRandom();
}
