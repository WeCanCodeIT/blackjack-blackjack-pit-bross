const {
  default: { singleDeckGame, Result}
} = require("blackjack-dealer-logic");

// Dom.setUpButtonEvents(singleDeckGame);//listeners
const Dom = require("./utils/Dom");


Dom.startGameLoop (singleDeckGame, Result);