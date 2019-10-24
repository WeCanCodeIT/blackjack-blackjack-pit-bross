const {
  default: { singleDeckGame }
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

const doubleButton = document.querySelector(".double");

doubleButton.addEventListener("click" , () =>{
  singleDeckGame.doubleUser();
  document.querySelector(".user").innerHTML = "";
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector(".user"));
  const userActions = querySelector(".actions");
  const userActionsButtons = userActions.querySelectorAll("*"); 
  userActionsButtons.forEach(button => button.setAttribute("disabled", "true"));
});