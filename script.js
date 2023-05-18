// Game module
const gameModule = (() => {
  // Game board
  let board = ["", "", "", "", "", "", "", "", ""];

  // Players
  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player 2", "O");
  let currentPlayer = player1;

  // Game status
  let gameOver = false;

  // DOM elements
  const buttons = document.querySelectorAll("button");
  const resultBoard = document.querySelector(".result-container");
  const restartBtn = document.querySelector(".btn");

  // Event listeners for button clicks
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (!gameOver && board[index] === "") {
        makeMove(index);
      }
    });
  });

  // Make a move
  function makeMove(index) {
    board[index] = currentPlayer.marker;
    buttons[index].textContent = currentPlayer.marker;

    if (checkForWin()) {
      gameOver = true;
      resultBoard.textContent = `${currentPlayer.marker} wins!`;
      restartBtn.style.display = "block";
    } else if (checkForDraw()) {
      gameOver = true;
      resultBoard.textContent = "Draw";
      restartBtn.style.display = "block";
    } else {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  }

  // Check for a win
  function checkForWin() {
    const winningCombinations = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a] !== "" &&
        board[a] === board[b] &&
        board[b] === board[c]
      ) {
        return true;
      }
    }

    return false;
  }

  // Check for a draw
  function checkForDraw() {
    return board.every(cell => cell !== "");
  }

  // Restart the game
  function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = player1;
    gameOver = false;
    buttons.forEach(button => (button.textContent = ""));
    resultBoard.textContent = "";
    restartBtn.style.display = "none";
  }

  // Player factory function
  function createPlayer(name, marker) {
    return { name, marker };
  }

  // Public API
  return {
    restartGame
  };
})();

// Restart button event listener
const restartBtn = document.querySelector(".btn");
restartBtn.addEventListener("click", gameModule.restartGame);
