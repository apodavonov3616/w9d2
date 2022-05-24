const View = require("./ttt-view")
const Game = require("../ttt_node/game")


document.addEventListener("DOMContentLoaded", () => {

  const figureSelect = document.querySelector(".ttt")

  const game1 = new Game()
  new View(game1, figureSelect)
});
