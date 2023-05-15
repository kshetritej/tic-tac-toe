
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
    _board : ['X','O','X','O','O','X','O','X','O'],
  }
  // *Display elements, accessed from array
  const Buttons = document.querySelectorAll("button");
  function displayController(){
    for(let i=0; i<=8; i++){
      Buttons[i].textContent = GameBoard._board[i];
    }
    console.log(GameBoard._board);
  }

  displayController();
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













