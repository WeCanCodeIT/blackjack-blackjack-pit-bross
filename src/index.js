const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

singleDeckGame.deal();

const userHand = singleDeckGame.getUserHand();
const dealerHand = singleDeckGame.dealer.getHand();

generateCardUser(userHand.getCards()[0]);
generateCardUser(userHand.getCards()[1]);
generateCardDealer(dealerHand.getFirstCard());

// function buildDealerCard(string){
//   const dealerCard = document.createElement("section");
//   dealerCard.classList.add("dealer-card");

//   const dealerContainer = document.createElement("section");
//     dealerContainer.classList.add("dealer-container");

//   const dealerValue = document.createElement("span");
//     dealerValue.classList.add("dealerValue");
//     dealerValue.textContent = string.
  
// }

function generateCardDealer(card) {
  const playingCard = document.createElement("section");
  playingCard.classList.add("playing-card");

  const valueContainer = document.createElement("section");
  valueContainer.classList.add("value-container");

  const value = document.createElement("span");
  value.classList.add("value");
  value.textContent = card.getValue();

  const suit = document.createElement("span");
  suit.classList.add("suit");
  suit.textContent = card.getSuit();

  valueContainer.append(value);
  valueContainer.append(suit);
  playingCard.append(valueContainer);

  const table = document.querySelector(".table-dealer");
  table.append(playingCard);
}

function generateCardUser(card) {
  const playingCard = document.createElement("section");
  playingCard.classList.add("playing-card");

  const valueContainer = document.createElement("section");
  valueContainer.classList.add("value-container");

  const value = document.createElement("span");
  value.classList.add("value");
  value.textContent = card.getValue();

  const suit = document.createElement("span");
  suit.classList.add("suit");
  suit.textContent = card.getSuit();

  valueContainer.append(value);
  valueContainer.append(suit);
  playingCard.append(valueContainer);

  const table = document.querySelector(".table-user");
  table.append(playingCard);
}
