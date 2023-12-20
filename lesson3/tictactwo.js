let rlSync = require("readline-sync");
let play = -1;
const TIC = "X";
const TAC = "O";
const TOE = "_";
let player1Wins = 0;
let player2Wins = 0;
let vs;

//Adds prompt flare
function prompt(string) {
  return "(◑‿◐): " + string;
}
function angryPrompt(string) {
  return "(◕‿◕)╭∩╮: " + string;
}
function tiePrompt(string) {
  return "¯|_(ツ)_/¯╮: " + string;
}
function winPrompt(string) {
  return "(ʘ‿ʘ): " + string;
}
function losePrompt(string) {
  return "╲⎝⧹ ( ͡° ͜ʖ ͡°) ⎠╱: " + string;
}

//Creates empty board
function initializeBoard() {
  board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = TOE;
  }

  return board;
}

//Displays current state of board
function displayCompBoard() {
  console.clear();
  console.log(`Wins: ${player1Wins}      Losses:${player2Wins}\n`);
  console.log("     {     }");
  console.log(`  ${board["1"]}  }  ${board["2"]}  {  ${board["3"]}  `);
  console.log("     {     }");
  console.log("~~~~~ ~~~~~ ~~~~~~");
  console.log("     }     {");
  console.log(`  ${board["4"]}  }  ${board["5"]}  }  ${board["6"]}  `);
  console.log("     }     {");
  console.log("~~~~~ ~~~~~ ~~~~~~");
  console.log("     {     }");
  console.log(`  ${board["7"]}  }  ${board["8"]}  {  ${board["9"]}  `);
  console.log("     {     }\n");
}
function displayPvPBoard() {
  console.clear();
  console.log(
    `Player 1 Wins: ${player1Wins}      Player 2 Wins:${player2Wins}\n`
  );
  console.log("     {     }");
  console.log(`  ${board["1"]}  }  ${board["2"]}  {  ${board["3"]}  `);
  console.log("     {     }");
  console.log("~~~~~ ~~~~~ ~~~~~~");
  console.log("     }     {");
  console.log(`  ${board["4"]}  }  ${board["5"]}  }  ${board["6"]}  `);
  console.log("     }     {");
  console.log("~~~~~ ~~~~~ ~~~~~~");
  console.log("     {     }");
  console.log(`  ${board["7"]}  }  ${board["8"]}  {  ${board["9"]}  `);
  console.log("     {     }\n");
}

function displayNumberedBoard() {
  console.clear();
  console.log(`Wins: ${player1Wins}      Losses:${player2Wins}\n`);
  console.log("     {     }");
  console.log(`  1  }  2  {  3  `);
  console.log("     {     }");
  console.log("~~~~~ ~~~~~ ~~~~~~");
  console.log("     }     {");
  console.log(`  4  }  5  }  6  `);
  console.log("     }     {");
  console.log("~~~~~ ~~~~~ ~~~~~~");
  console.log("     {     }");
  console.log(`  7  }  8  {  9  `);
  console.log("     {     }\n");
}

//Returns an array of empty spaces
function emptySpaces() {
  return Object.keys(board).filter((key) => board[key] === TOE);
}

//Makes number choices prettier
function joiner(arr) {
  let string = "";
  if (arr.length > 2) {
    for (let index = 0; index < arr.length - 1; index++) {
      const element = arr[index];
      string += element + ", ";
    }
    string += "or " + arr[arr.length - 1];
  } else if (arr.length === 2) {
    string = arr[0] + " or " + arr[1];
  } else {
    string += arr[0];
  }

  return string;
}

//Prompts player for square choice and places TIC
function player1Turn() {
  let empties = emptySpaces();
  let choice;
  if (vs === "1") {
    choice = rlSync.question(
      prompt(`Please choose a square (${joiner(empties)}): `)
    );
  }
  if (vs === "2") {
    choice = rlSync.question(
      prompt(`Player 1, please choose a square (${joiner(empties)}): `)
    );
  }

  //Tests for choice validity (empty square + num 1-9)
  while (true) {
    if (board[choice] !== TOE || !choice.match(/1|2|3|4|5|6|7|8|9/)) {
      choice = rlSync.question(angryPrompt("Invalid choice, try again: "));
    } else {
      break;
    }
  }
  board[choice] = TIC;
}
function player2Turn() {
  let empties = emptySpaces();
  let choice = rlSync.question(
    prompt(`Player 2, please choose a square (${joiner(empties)}): `)
  );

  //Tests for choice validity (empty square + num 1-9)
  while (true) {
    if (board[choice] !== TOE || !choice.match(/1|2|3|4|5|6|7|8|9/)) {
      choice = rlSync.question(angryPrompt("Invalid choice, try again: "));
    } else {
      break;
    }
  }
  board[choice] = TAC;
}

//Places a TAC on a random square
function compTurn() {
  let emptySquares = emptySpaces();
  let choice = emptySquares[Math.floor(Math.random() * emptySquares.length)];
  board[choice] = TAC;
}

function winner() {
  let winningLines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], // rows
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9], // columns
    [1, 5, 9],
    [3, 5, 7], // diagonals
  ];

  //Check for player win first because player goes before computer
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === TIC && board[sq2] === TIC && board[sq3] === TIC) {
      return "Player";
    }
  }
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === TAC && board[sq2] === TAC && board[sq3] === TAC) {
      return "Computer";
    }
  }

  return null;
}

//Gameplay loop
do {
  let gameOver = false;
  initializeBoard();
  displayNumberedBoard();

  //Choose gamemode
  if (play === -1) {
    if ((play = true))
      vs = rlSync.question(
        prompt(
          "Would you like to play against me or a friend?\n1) You   2) A friend: "
        )
      );
    //Tests input
    while (vs !== "1" && vs !== "2") {
      rlSync.question(
        angryPrompt(
          "That isn't a valid choice please enter either '1' or '2': "
        )
      );
    }
  }

  //Player vs Computer
  if (vs === "1") {
    do {
      displayCompBoard();
      player1Turn();
      compTurn();

      //Checks for winner or tie
      if (winner()) {
        if (winner() === "Player") {
          //Player win
          console.log(winPrompt("Congratulations! YOU WIN!"));
          player1Wins += 1;
          gameOver = true;
        } else {
          //Comp win
          console.log(losePrompt("Looks like I WIN! Better luck next time!"));
          player2Wins += 1;
          gameOver = true;
        }
      } else if (emptySpaces().length === 0) {
        //Tie
        console.log(tiePrompt("Uh-Oh! We have a Tie!"));
        gameOver = true;
      }
    } while (gameOver === false);

    //Play again?
    let again = rlSync.question(
      prompt("Would you like to play again? (y / n): ")
    );
    //Checks for valid response
    while (again.search(/y|n/i) === -1) {
      again = rlSync.question(
        angryPrompt('Invalid choice. Enter either "y" or "n": ')
      );
    }
    if (again === "n") {
      play = 0;
    } else {
      play = 1;
    }
  } else {
    //Player vs Player
    do {
      displayPvPBoard();
      if (gameOver === false) player1Turn();
      if (winner()) {
        if (winner() === "Player") {
          //Player1 win
          console.log(winPrompt("Congratulations Player 1! YOU WIN!"));
          player1Wins += 1;
          gameOver = true;
          break;
        }
      } else if (emptySpaces().length === 0) {
        //Tie can only happen on P1
        console.log(tiePrompt("Uh-Oh! We have a Tie!"));
        gameOver = true;
        break;
      }
      displayPvPBoard();
      if (gameOver === false) player2Turn();
      if (winner()) {
        //Player 2 win
        if (winner() === "Computer") {
          //Player2 win
          console.log(losePrompt("Looks like PLAYER 2 WINS!"));
          player2Wins += 1;
          gameOver = true;
          break;
        }
      }
    } while (gameOver === false);

    //Play again?
    let again = rlSync.question(
      prompt("Would you like to play again? (y / n): ")
    );
    //Checks for valid response
    while (again.search(/y|n/i) === -1) {
      again = rlSync.question(
        angryPrompt('Invalid choice. Enter either "y" or "n": ')
      );
    }
    if (again === "n") {
      play = 0;
    } else {
      play = 1;
    }
  }
} while (!!play === true);

console.log(prompt("Goobye!"));
