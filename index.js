const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartButton = document.querySelector("#restartButton");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();
statusText.textContent = `X's turn`;

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartButton.addEventListener("click", restartGame);
    statusText.textContent = `$(currentPlayer)'s turn`;
    let options = ["", "", "", "", "", "", "", "", ""];
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    console.log("cell clicked");
    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();

}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
    console.log(`cell update ${options[index]}`);

}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
    console.log("changedPlayer")

}
function checkWinner(){
    let roundWon = false;
    console.log("checkWinner");

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        if(cellA == "" || cellB == "" || cellC == "" ){
            console.log("BlankSquareDetected");
            continue
        }
        if(cellA == cellB && cellB == cellC ){
            console.log("allEqual")
            if(cellA == "X" || cellA == "O")
            roundWon = true;
            console.log("roundWonSet2True");
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`
        running = false;
        console.log("win");
    }
    else if (!options.includes("")){
        statusText.textContent = `Draw!`
        running = false;
        console.log("tie");
    }
    else{
        console.log("gameNotOver");
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    let options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
    initializeGame()
    console.log(`${options}`)

};