const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('#game-status');
const restartButton = document.querySelector('#restart-button');

const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ["","","","","","","","",""];
let running = false;
let currentPlayer = "X";

initializeGame();

function initializeGame(){
    running = true;
    cells.forEach(cell => {
        cell.addEventListener("click", () => cellClicked(cell));
    });
    restartButton.addEventListener("click", restartGame);
    gameStatus.textContent = `${currentPlayer}'s turn`;
}

function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    gameStatus.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

function cellClicked(cell){
    const cellIndex = cell.getAttribute("cellIndex");
    if (options[cellIndex] !== "" || !running) {
        return;
    }
    updateCell(cell, cellIndex);
    checkWinner();
}

function updateCell(cell, cellIndex){
    options[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changeTurn(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    gameStatus.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;
    
    for(let i = 0; i < winConditions.length; i++){
        const [a, b, c] = winConditions[i];
        const cellA = options[a];
        const cellB = options[b];
        const cellC = options[c];

        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }

        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameStatus.textContent = `${currentPlayer} wins!`;
        running = false;
    } else if (!options.includes("")) {
        gameStatus.textContent = "It's a draw!";
        running = false;
    } else {
        changeTurn();
    }
}
