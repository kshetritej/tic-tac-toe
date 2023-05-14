
/*
  0 1 2
  3 4 5
  6 7 8
*/

/*
*This is module I guess
*/
(function(){
  let gameBoard = new Array(9);
  
  let gameBoardLength = function(){
    let message = "The length of gameBoard is " + gameBoard.length;
    console.log(message);
  }
  function iterateArray(){
    for (let i=0; i<=8; i++){
      gameBoard[i] = prompt("enter 'x' or 'y'");
    }
    return gameBoard;
  }

}())


/*
*Create Player using Factory Functions
*/

function createPlayers(name,marker){
  return{
    playerName : name,
    playerMarker : marker,
  }
}












