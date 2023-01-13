// class Card {
//     constructor(name, value) {
//         this.name = name
//         this.value = value
//     }

//     getValue = function() {
//         return this.value;
//     }

//     getNameValue = function() {
//         return `${this.name}: ${this.value}`;
//     }
// }
//==============================================================================
class Deck {
  deck = [];
  constructor() {
    const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    const names = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < names.length; j++) {
        const card = { Suit: suits[i], Name: names[j], Value: values[j] };
        this.deck.push(card);
      }
    }
    console.log(this.deck);
  }
  // testing
  shuffleDeck() {
    for (let x = this.deck.length - 1; x > 0; x--) {
      let y = Math.floor(Math.random() * x);
      let deckCard = { ...this.deck[x] };
      this.deck[x] = { ...this.deck[y] };
      this.deck[y] = { ...deckCard };
    }
  }
}

const deck2 = new Deck();
deck2.shuffleDeck();
console.log(deck2);

let handPlayer1 = deck2.deck.splice(0, 5);
let handPlayer2 = deck2.deck.splice(5, 5);
let valueOfPlayer1Hand = handPlayer1.reduce((accumalator, card) => {
  return accumalator + parseInt(card.Value);
}, 0);
let valueOfPlayer2Hand = handPlayer2.reduce((accumalator, card) => {
  return accumalator + parseInt(card.Value);
}, 0);

console.log(handPlayer1, handPlayer2);
console.log(deck2);
// discarding 2 cards by each player in discard deck
let discardCardsPile = handPlayer1.splice(3).concat(handPlayer2.splice(3));
console.log(handPlayer1, handPlayer2);
// Both players will take 2 more cards from deck
handPlayer1 = handPlayer1.concat(deck2.deck.splice(0, 2));
handPlayer2 = handPlayer2.concat(deck2.deck.splice(2, 2));
console.log(handPlayer1, handPlayer2);
// New value of player's card
valueOfPlayer1Hand = handPlayer1.reduce((accumalator, card) => {
  return accumalator + parseInt(card.Value);
}, 0);
valueOfPlayer2Hand = handPlayer2.reduce((accumalator, card) => {
  return accumalator + parseInt(card.Value);
}, 0);
//Both players discard all cards to discard pile
let discardCardsAgain = handPlayer1.splice(0).concat(handPlayer2.splice(0));
let discardCardsPileAgain = discardCardsAgain.concat(discardCardsPile);
console.log(deck2);
// Return all cards to deck and empty discard pile
let deck3 = deck2.deck.concat(discardCardsPileAgain.splice(0));
console.log(deck3);

// class Player {
//     player1 = "Slim"
//     player2 = "Luke"
//     // hand = []
//     hand = deck2.deck.slice(0, 5);

//     // constructor() {
//     //     // this.Player = name
//     //     this.hand = []
//     //     let playerCards = deck2.deck.slice(0, 5);
//     //     this.hand.push(playerCards);
//     //     // console.log(playerCards);
//     //     // for(let i= 0; i < 5; i++) {

//     //     //     this.hand.push(deck2.deck[i])
//     //     // }
//     // }
// }
// console.log(Player.hand)
// const player1 = new Player("Slim");
// const player2 = new Player("Luke");
// console.log(player1, player2)
// working
// function shuffleDeck() {
//     for (let x = deck2.deck.length - 1; x > 0; x--) {
//         let y= Math.floor(Math.random() * x)
//         console.log(deck2.deck[y]);
//     }
// }
// shuffleDeck()
//-------------------------------------------------------------------------------
