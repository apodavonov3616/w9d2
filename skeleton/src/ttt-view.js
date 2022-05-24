const Game = require("../ttt_node/game")

class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard()
  }

  setupBoard() {
    const unordered = document.createElement("ul");
    for (let i=0; i<3; i++) {
      for (let j=0; j<3; j++) {
        unordered.append(document.createElement("li"));
      }
    }
    this.el.append(unordered)
  }
  
  bindEvents() {
    
  }

  handleClick(e) {
    // const addItem = (e) => {
    //   e.preventDefault();
    //   e.stopPropagation();
  }

  makeMove(square) {}

}


module.exports = View;
