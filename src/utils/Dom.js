module.exports = {
  generateCard(card) {
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

    return playingCard;
  },

  doubleEvent(singleDeckGame, Result) {
    singleDeckGame.doubleUser();
    document.querySelector(".user-cards").innerHTML = "";
    this.renderCards(
      singleDeckGame.getUserHand().getCards(),
      document.querySelector(".user-cards")
    );
    this.standEvent(singleDeckGame, Result);
  },

  hitEvent(singleDeckGame, Result) {
    singleDeckGame.hitUser();
    document.querySelector(".user-cards").innerHTML = "";
    this.renderCards(
      singleDeckGame.getUserHand().getCards(),
      document.querySelector(".user-cards")
    );

    singleDeckGame.evaluateUser();

    if (singleDeckGame.isUserBust()) {
      this.standEvent(singleDeckGame, Result);
    }
  },

  renderCards(cardsArray, containerElement) {
    cardsArray.forEach(card => {
      containerElement.append(this.generateCard(card));
    });
  },
  setInitialAnte(singleDeckGame) {
    const userChips = document.querySelector(".pot");
    const playerAnte = prompt( `Bet! Whats your offer? Current chip-count: ${singleDeckGame.getUserChips()}`
    );
    userChips.textContent = playerAnte;
    singleDeckGame.receiveAnte(playerAnte);

    const chipContainer = document.querySelector(".chip-count");
    chipContainer.textContent = singleDeckGame.getUserChips();
  },

  standEvent(singleDeckGame, Result) {
    singleDeckGame.standUser();
    singleDeckGame.evaluateUser();

    this.disableActionsButtons();

    singleDeckGame.settleDealerHand();
    document.querySelector(".dealer-cards").innerHTML = "";
    this.renderCards(
      singleDeckGame.getDealerHand().getCards(),
      document.querySelector(".dealer-cards")
    );
    singleDeckGame.evaluateDealer();

    const restartButton = document.querySelector(".dealHand-btn");
    restartButton.addEventListener("click", () => {
      singleDeckGame.resetPlayers();
      const userContainer = document.querySelector(".user-cards");
      userContainer.innerHTML = "";

      const dealerContainer = document.querySelector(".dealer-cards");
      dealerContainer.innerHTML = "";

      const actionsContainer = document.querySelector(".actions");
      const actionsButtons = actionsContainer.querySelectorAll("buttons");
      actionsButtons.forEach(button => button.removeAttribute("disabled"));

      this.startGameLoop(singleDeckGame);
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
  },

  disableActionsButtons() {
    const userActions = document.querySelector(".actions");
    const userActionsButtons = userActions.querySelectorAll("button");
    userActionsButtons.forEach(button =>
      button.setAttribute("disabled", "true")
    );
  },

  startGameLoop (singleDeckGame) {
    singleDeckGame.deal();

    const dealerHand = singleDeckGame.getDealerHand();
    const userHand = singleDeckGame.getUserHand();
    
    Dom.renderCards(dealerHand.getCards(), document.querySelector(".dealer-cards"));
    Dom.renderCards(userHand.getCards(), document.querySelector(".user-cards"));
    
    //button stuff()
    const hitButton = document.querySelector(".hit");
    hitButton.addEventListener("click", () => {
      Dom.hitEvent(singleDeckGame, Result);
    });
    
    const doubleButton = document.querySelector(".double");
    
    doubleButton.addEventListener("click", () => {
      Dom.doubleEvent(singleDeckGame, Result);
    });
    
    const standButton = document.querySelector(".stand");
    standButton.addEventListener("click", () => {
      Dom.standEvent(singleDeckGame, Result);
    });
  }
};
