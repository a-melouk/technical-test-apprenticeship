const board = document.getElementsByClassName("board")[0];
const cells = document.getElementsByClassName("cell");
const turnMessage = document.getElementById("turn-message");
const resetButton = document.getElementById("reset-button");

let gameStatus = "Game On";
let currentPlayer = "X";
let winner = "";

for (let i = 0; i < cells.length; i++) {
  const cell = cells[i];
  cell.addEventListener("click", function () {
    if (cell.innerHTML === "" && gameStatus === "Game On") {
      cell.innerHTML = currentPlayer;
      winner = checkWinner();
      if (winner !== "") {
        gameStatus = "Game Over";
        alert(`Player ${winner} won!`);
        turnMessage.innerHTML = `Game over, Player ${winner} won!`;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        turnMessage.innerHTML = `Player ${currentPlayer}'s turn`;
      }
    }
  });
}

resetButton.addEventListener("click", function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  gameStatus = "Game On";
  currentPlayer = "X";
  turnMessage.innerHTML = `Player ${currentPlayer}'s turn`;
});

function checkWinner() {
  let winner = "";
  for (let i = 0; i < 3; i++) {
    //Check if we have an horizontal line
    if (
      cells[i * 3].innerHTML !== "" &&
      cells[i * 3].innerHTML === cells[i * 3 + 1].innerHTML &&
      cells[i * 3].innerHTML === cells[i * 3 + 2].innerHTML
    ) {
      winner = cells[i * 3].innerHTML;
      break;
    }
    //Check if we have a vertical line
    if (
      cells[i].innerHTML !== "" &&
      cells[i].innerHTML === cells[i + 3].innerHTML &&
      cells[i].innerHTML === cells[i + 6].innerHTML
    ) {
      winner = cells[i].innerHTML;
      break;
    }
  }
  //Check if we have a diagonal line \
  if (
    cells[0].innerHTML !== "" &&
    cells[0].innerHTML === cells[4].innerHTML &&
    cells[0].innerHTML === cells[8].innerHTML
  ) {
    winner = cells[0].innerHTML;
  }
  //Check if we have a diagonal line /
  if (
    cells[2].innerHTML !== "" &&
    cells[2].innerHTML === cells[4].innerHTML &&
    cells[2].innerHTML === cells[6].innerHTML
  ) {
    winner = cells[2].innerHTML;
  }
  return winner;
}
