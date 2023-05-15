
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
    _board : ['X','O','X','O','O','X','O','X'],
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

  // * Function to add Marker
  function addMark(){
    for(let i=0; i<9; i++){
      Buttons[i].addEventListener("click",()=>{
        /*
          * Logic to stop players playing in already taken spot
        */
        if(Buttons[i].textContent !==""){
          alert("Already marked");
        }
        else{
          GameBoard._board[i] = "X";
          Buttons[i].textContent = "X";
        }
        console.log(i,GameBoard._board);
      })
    }
  }
  addMark();

  /*
    * Check for Game Over or Play on
  */
 function gamePlay(){
  
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













