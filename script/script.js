// Global variables
let chances = null;
let previous = null;
let randomNumber = null;
let guessedNumber = null;
let win = 0;

// DOM Elements
const playerGuess = document.querySelector('#player-guess');
const startButton = document.querySelector('.start-button');
const guessButton = document.querySelector('.guess-button');
const chancesLeft = document.querySelector('.chances-left');
const previousGuess = document.querySelector('.previous-guess');
const announcement = document.querySelector('.game-announcement');

// Start Button
startButton.addEventListener('click', () => {
    init();
});

// Guess Button
guessButton.addEventListener('click', () => {
    // If Player has chances and player has not won
    if(chances && !win) {
        // If Player guess input box is not null
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
        // If Player guess input box is null
        else {
            previous = null;
            announcement.innerText = 'No Input!';
        }
    }
    // If Player wins
    else if(win) {
        announcement.innerText = 'You have already won!';
    }
    // If player has not started the game (chances is null) and clicks on Guess button
    else if(chances === null) {
        announcement.style.color = 'rgba(255, 0, 0, 0.75)';
        announcement.innerText = 'Start the game before you guess!';
    }
    // If Player has lost all attempts and has not won
    else if(!chances && !win) {
        announcement.innerText = 'You don\'t have any attempts left!';
    }
});

// Function to generate a random number
function generateRandom() {
    return Math.floor(Math.random()*100);
}

// Initialize game
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
