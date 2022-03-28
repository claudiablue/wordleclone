import { WORDS } from "./words.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGUESS = [];
//what do those brackets mean?
//does javascript know what guess means
let nextLetter = 0;
let rightGuessString = WORDS[Math.random() * WORDS.length];
console.log(rightGuessString)
//picks random word from array WORDS and logs correct guess

function initBoard() {
    let board = document.getElementById("game-board");

    for (let i=0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
    }
}