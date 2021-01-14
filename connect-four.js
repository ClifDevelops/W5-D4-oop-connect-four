import { Game } from "./game.js";

const game = undefined;

function updateUI() {
    let boardholder = document.getElementById("board-holder");
    if (game === undefined) {
        boardholder.classList.add("is-invisible");
    } else {
        boardholder.classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();
    }
}

window.addEventListener("DOMContentLoaded", event => {

    let player1 = document.getElementById("player-1-name");
    let player2 = document.getElementById("player-2-name");
    let newGameButton = document.getElementById("new-game");
    player1.addEventListener("keyup", event => {
        if (player1.value && player2.value) {
            newGameButton.disabled = false;
        }
    });

    player2.addEventListener("keyup", event => {
        if (player1.value && player2.value) {
            newGameButton.disabled = false;
        }
    });

    newGameButton.addEventListener("click", event => {
        game = new Game(player1.value, player2.value);
        player1.value = "";
        player2.value = "";
        newGameButton.disabled = true;
        updateUI();
    });





});

//first change for experiment.

/**
 *
 * class: BoardState
 *      checkCoordinate() - check if it's black/red/empty
 *
 *      didSomeoneWin() - check if the move made led to a win : congratulate the winner
 *
 *      isItaTieorDraw() - check if the whole board is full: want to play again?
 *
 *
 * class: Player
 *      whichColumnValid() - show the colored token when cursor moves over the column and check if it's not full
 *
 *
 *      whoseTurn() - check whose turn it is and change the token color to that
 *
 *
 *      BONUS: showTurnMessage() - state who's turn it is on the side to keep track
 *
 *
 * class: Game (game.js)
 *
 *
 *
 *
 *
 * class: Start
 *      newGameButton.clicked =>
 *          nameGame() - make a string that says "Bob vs Sally Game"
 */
