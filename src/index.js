const {
  default: { singleDeckGame, Result }
} = require("blackjack-dealer-logic");

singleDeckGame.deal();

const Dom = require("./utils/Dom");
const dealerHand = singleDeckGame.getDealerHand();
const userHand = singleDeckGame.getUserHand();

Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer"));
Dom.renderCards(userHand.getCards(), document.querySelector(".user"));

//button stuff
const hitButton = document.querySelector(".hit");

hitButton.addEventListener("click", () => {
  singleDeckGame.hitUser();
  document.querySelector(".user").innerHTML = ""; //clears the exising cards
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector(".user"));
});

const dealButton = document.querySelector(".dealButton");
dealButton.addEventListener("click", () => {
  console.log("deal button clicked");
  singleDeckGame.deal();
});



//stand
Dom.addClickEventToButton(".btn--stand", () => {
  Dom.standEvent(singleDeckGame);
});


/*wrapping this method call in an anonymous method delays it's call*/
/*anonymous function becomes a parameter to the event listener*/


