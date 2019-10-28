const {
  default: { singleDeckGame, Result}
} = require("blackjack-dealer-logic");

// Dom.setUpButtonEvents(singleDeckGame);//listeners
const Dom = require("./utils/Dom");

Dom.setInitialAnte(singleDeckGame); 
Dom.startGameLoop (singleDeckGame);