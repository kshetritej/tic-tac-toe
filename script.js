
/*
  0 1 2
  3 4 5
  6 7 8
*/

/*
*This is module I guess
*/
(function () {
  // *Initialize GameBoard
  let GameBoard = {
    _board: ['X', 'O', 'X', 'O', 'O', 'X', 'O', 'X', undefined],
  }
  // *Display elements, accessed from array
  const Buttons = document.querySelectorAll("button");
  function displayController() {
    for (let i = 0; i <= 8; i++) {
      Buttons[i].textContent = GameBoard._board[i];
    }
    console.log(GameBoard._board);
  }
  displayController();

  // * Function to add Marker
  function addMark() {
    for (let i = 0; i < 9; i++) {
      Buttons[i].addEventListener("click", () => {
        /*
          * Logic to stop players playing in already taken spot
        */
        if (Buttons[i].textContent !== "") {
          alert("Already marked");
          checkForGameOver();

        }
        else {
          GameBoard._board[i] = "X";
          Buttons[i].textContent = "X";
         checkForGameOver();
        }
        console.log(i, GameBoard._board);
      })
    }
  }
  addMark();

  /*
    * Check for Game Over or Play on
  */
  function checkForGameOver() {
    let value0 = GameBoard._board[0];
    let value1 = GameBoard._board[1];
    let value2 = GameBoard._board[2];
    let value3 = GameBoard._board[3];
    let value4 = GameBoard._board[4];
    let value5 = GameBoard._board[5];
    let value6 = GameBoard._board[6];
    let value7 = GameBoard._board[7];
    let value8 = GameBoard._board[8];

    if (value0 === value1 && value1 === value2 ||
      value3 === value4 && value4 === value5 ||
      value6 === value7 && value7 === value8 || // Checked for rows
      value0 === value3 && value3 === value6 ||
      value1 === value4 && value4 === value7 ||
      value2 === value5 && value5 === value8 || // checked for columns
      value0 === value4 && value4 === value8 ||
      value2 === value4 && value4 === value6    // Checked for Diagonals
    ) {
      console.log("Game Over");
    }
    else {
      if (GameBoard._board.includes(undefined)) {
        console.log("Play on");

      }
      else {
        console.log("Draw")
      }
    }
  }

}())

/*
*Create Player using Factory Functions
*/

function createPlayers(name, marker) {
  return {
    playerName: prompt("What is your name?"),
    playerMarker: prompt("choose your marker 'x' or 'o' "),

  }
}













