const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");

singleDeckGame.deal();

const Dom = require("./utils/Dom");
const dealerHand = singleDeckGame.getDealerHand();
const userHand = singleDeckGame.getUserHand();

Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer-cards"));
Dom.renderCards(userHand.getCards(), document.querySelector(".user-cards"));

//button stuff
const hitButton = document.querySelector(".hit");

hitButton.addEventListener("click", () => {
  singleDeckGame.hitUser();
  document.querySelector(".user-cards").innerHTML = ""; //clears the exising cards
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector(".user-cards"));
});

const doubleButton = document.querySelector(".double");

doubleButton.addEventListener("click" , () =>{
  singleDeckGame.doubleUser();
  document.querySelector(".user-cards").innerHTML = "";
  Dom.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector(".user-cards"));
  
  const userActions = document.querySelector(".actions");
  const userActionsButtons = userActions.querySelectorAll("button"); 
  userActionsButtons.forEach(button => button.setAttribute("disabled", "true"));
});