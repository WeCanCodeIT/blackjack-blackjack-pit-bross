const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

// Dom.setUpButtonEvents(singleDeckGame);//listeners
// Dom.setInitialAnte(singleDeckGame);

singleDeckGame.deal();

const Dom = require("./utils/Dom");
const dealerHand = singleDeckGame.getDealerHand();
const userHand = singleDeckGame.getUserHand();

Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer-cards"));
Dom.renderCards(userHand.getCards(), document.querySelector(".user-cards"));

//button stuff()
const hitButton = document.querySelector(".hit");

hitButton.addEventListener("click", () => {
  singleDeckGame.hitUser();
  document.querySelector(".user-cards").innerHTML = ""; //clears the exising cards
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector(".user-cards"));

  //evaluate if user is bust
  if (singleDeckGame.isUserBust()) {
    //call stand event!
  }

});

const doubleButton = document.querySelector(".double");

doubleButton.addEventListener("click", () => {
  singleDeckGame.doubleUser();
  document.querySelector(".user-cards").innerHTML = "";
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector(".user-cards"));

  Dom.disableActionsButtons();

//call stand event!
  //evaluate user (check for bust) and dealer and result after clicked

});

const standButton = document.querySelector(".stand");
standButton.addEventListener("click", () => {
  singleDeckGame.standUser();
  Dom.disableActionsButtons();

  //settle and evaluate dealer and result after clicked
  singleDeckGame.settleDealerHand();
  document.querySelector(".dealer-cards").innerHTML = "";
  Dom.renderCards(singleDeckGame.getDealerHand().getCards(), document.querySelector(".dealer-cards"));
  singleDeckGame.evaluateDealer();

  //need to append this button somewhere and refactor this into DOM
  const restartButton = document.createElement("button");
  restartButton.classList.add("play-again");
  restartButton.textContent("Play Again");
  restartButton.addEventListener("click", () => {
    //TODO finish current hand and start a new one.
  });





  switch (singleDeckGame.outcome()) {
    case Result.WIN:
      alert("You WON!");
      break;
    case Result.PUSH:
      alert("It was a Tie.");
      break;
    case Result.LOSS:
      alert("You lost, so sorry.");
      break;
    default:
      break;
  }


});


