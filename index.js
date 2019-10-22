import {singleDeckGame} from 'blackjack-dealer-logic';

singleDeckGame.deal();

console.log(singleDeckGame.getUserHand());

const playingCard = document.createElement("section");
playingCard.classList.add("playing-card");

const valueContainer = document.createElement("section");
valueContainer.classList.add("value-container");

const value = document.createElement("span");
value.classList.add("value");

const suit = document.createElement("span");
suit.classList.add("suit");

valueContainer.append(value);
valueContainer.append(suit);
playingCard.append(valueContainer);

const table = document.querySelector(".table");
table.append(playingCard);

