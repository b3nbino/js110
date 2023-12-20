/**
 * TWENTY-ONE
 *
 * Create the card game known as twenty-one.
 * Rules:
 * 1. Use a standard deck of playing cards (suits don't matter but amounts do)
 *    -The value of number cards is the same as their number
 *    -The value of face cards is ten
 *    -The value of an ace is either 11 or 1 (depending on which is more beneficial)
 * 2. Deal two cards to both the player and the dealer (their initial hand)
 *    -The player can only see both of his cards and one of the dealers cards initially
 * 3. The goal is to get a hand value as close to twenty-one as possible without going over
 * 4. The player is then given the choice to either hit or stay
 *    -If the player hits, the dealer will give them another card (thus increasing their hands value)
 *    -The player can hit as many times as they like
 *    -If the player stays, their hand value will stay the same and it will be the dealers turn
 * 5. On the dealers turn they will either hit or stay
 *    -The dealer will always hit until their hand value is greater than sixteen
 * 6. If the dealer has a greater hand value than the player, the player must hit (and vise versa) until either goes over twenty-one
 * 7. The first person to go over twenty-one loses
 *
 */

let rlSync = require("readline-sync");
let deck = {};
let playerHand = [];
let dealerHand = [];
let playerHandTotal = 0;
let dealerHandTotal = 0;
let stay = false;
let showDHand = 0;
let score = [0, 0]; //Wins, losses
let play;
const CARDS = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];
const CARD_AMOUNT = 13;

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

//Creates a randomly populated array filled with cards
function initializeGame() {
  deck = {
    A: 4,
    K: 4,
    Q: 4,
    J: 4,
    10: 4,
    9: 4,
    8: 4,
    7: 4,
    6: 4,
    5: 4,
    4: 4,
    3: 4,
    2: 4,
  };
  stay = false;
  playerHandTotal = 0;
  dealerHandTotal = 0;
  playerHand = [];
  dealerHand = [];
  showDHand = 0;
}

//Deals initial cards to player and dealer
function dealInitialCards() {
  //Gets random index for card from CARDS array
  let randomCard = Math.floor(Math.random() * CARD_AMOUNT);
  //Puts that card into the player/dealers hand
  playerHand.push(CARDS[randomCard]);
  //Decreases the total amount of that type of card remaining
  deck[CARDS[randomCard]] -= 1;
  //Does this four times total, twice for each player
  randomCard = Math.floor(Math.random() * CARD_AMOUNT);
  dealerHand.push(CARDS[randomCard]);
  deck[CARDS[randomCard]] -= 1;
  randomCard = Math.floor(Math.random() * CARD_AMOUNT);
  playerHand.push(CARDS[randomCard]);
  deck[CARDS[randomCard]] -= 1;
  randomCard = Math.floor(Math.random() * CARD_AMOUNT);
  dealerHand.push(CARDS[randomCard]);
  deck[CARDS[randomCard]] -= 1;

  //Changes player/dealerHandTotal to reflect new cards
  handTotal("Player");
  handTotal("Dealer");
}

//Deals a new card to relevant player
function hit(hand) {
  //Get a random card
  let randomCard = Math.floor(Math.random() * CARD_AMOUNT);
  //If there aren't any of that type of card remaining, try again
  while (deck[CARDS[randomCard]] === 0) {
    randomCard = Math.floor(Math.random() * CARD_AMOUNT);
  }

  if (hand === "Player") {
    playerHand.push(CARDS[randomCard]);
  } else {
    dealerHand.push(CARDS[randomCard]);
  }

  deck[CARDS[randomCard]] -= 1;
  handTotal(hand);
}

//Reveals dealers hidden card FIXME
function displayHands() {
  if (showDHand === 1) {
    //If the player has finished their first turn
    console.clear();
    console.log(`Wins: ${score[0]}   Losses: ${score[1]}\n`);
    console.log(prompt(`The dealers hand is ${dealerHand.join(", ")}`));
    console.log(prompt(`Your hand is ${playerHand.join(", ")}\n`));
  } else {
    //Player has not finished first turn
    console.clear();
    console.log(`Wins: ${score[0]}   Losses: ${score[1]}\n`);
    console.log(prompt(`The dealers hand is ${dealerHand[0]}, ?`));
    console.log(prompt(`Your hand is ${playerHand.join(", ")}\n`));
  }
}

//Prompt player for turn action and respond according to their input FIXME
function playerTurn() {
  let move;

  //If its players first turn they choose, if they have a lower score than the dealer they must hit
  if (stay === false) {
    //Displays player options
    console.log("Would you like to: ");
    move = rlSync.question(prompt("1) Hit    2) Stay: "));
    while (move !== "1" && move !== "2") {
      move = rlSync.question(angryPrompt('Please enter either "1" or "2": '));
    }

    if (move === "1") {
      hit("Player");
    } else if (move === "2") {
      //Reveals dealers hand
      showDHand = 1;
      stay = true;
    }
  } else {
    hit("Player");
  }
}

//Follow algorithm to determine action FIXME
function dealerTurn() {
  if (dealerHandTotal < playerHandTotal) {
    hit("Dealer");
  } else if (dealerHandTotal < 17) {
    hit("Dealer");
  } else {
    return;
  }
  return;
}

//Calculates and sets the total hand value for relevant player
function handTotal(hand) {
  let workingHand;
  let total = 0;

  //Chooses applies copy of relevant hand to working hand
  hand === "Player"
    ? (workingHand = playerHand.slice())
    : (workingHand = dealerHand.slice());

  //Moves all aces to back for calculation
  workingHand = workingHand.sort((cardA, cardB) => {
    if (cardA === "A" && cardB !== "A") {
      return 1;
    } else if (cardB === "A" && cardA !== "A") {
      return -1;
    } else if (cardA === "A" && cardB === "A") {
      return 0;
    }
  });

  //Goes through hand, adds the value of each card to the total
  for (let index = 0; index < workingHand.length; index++) {
    const card = workingHand[index];
    if ("KQJ10".includes(card)) {
      total += 10;
    } else if ("23456789".includes(card)) {
      total += Number.parseInt(card);
    } else if (card === "A" && total + 11 <= 21) {
      total += 11;
    } else {
      total += 1;
    }
  }
  if (hand === "Player") {
    playerHandTotal = total;
  } else {
    dealerHandTotal = total;
  }
}

//Gameplay loop FIXME
do {
  initializeGame();
  dealInitialCards();
  displayHands();

  while (playerHandTotal <= 21 && dealerHandTotal <= 21) {
    while (stay === false && playerHandTotal <= 21) {
      playerTurn();
      displayHands();
    }
    while (playerHandTotal <= 21 && dealerHandTotal <= 21) {
      dealerTurn();
      displayHands();
      if (dealerHandTotal > 21) break;
      if (dealerHandTotal >= playerHandTotal) {
        playerTurn();
        displayHands();
      }
      if (playerHandTotal > 21) break;
    }
  }

  if (dealerHandTotal > 21) {
    score[0] += 1;
    console.log(winPrompt("Congrats, you win!"));
  } else {
    score[1] += 1;
    console.log(losePrompt("Awww... Better luck next time!"));
  }

  play = rlSync.question(prompt("Would you like to play again? ( y / n ): "));
  while (play.toLowerCase() !== "y" && play.toLowerCase() !== "n") {
    play = rlSync.question(
      angryPrompt('Invalid input: Please enter either "y" or "n": ')
    );
  }
} while (play.toLowerCase() === "y");
