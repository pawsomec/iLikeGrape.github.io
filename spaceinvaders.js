//board
let board;
let boardWidth = 500;
let boardHeight = 600;
let context;

let gameOver = false

//ship
let shipWidth = 64;
let shipHeight = 64;
let shipX = 218;
let shipY = 504;
let shipImg; 

//ship varuble
let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}
window.onload = function() { //when game starts 
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial dinosaur
    // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    shipImg = new Image();
    shipImg.src = "./spaceinvadersImgs/ship.png";
    shipImg.onload = function() {
        console.log("imgLoaded")
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }


    document.addEventListener("Keydown", moveShip(e));
    update()

}
function update(){
    console.log("update")
    //preping for next frame
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    requestAnimationFrame(update);

       
}

function moveShip(e) {
    console.log("Move ship function called");
    if (gameOver) {
        return;
    };
    if (e.key == "ArrowLeft") { // checks to see if it should move left
        console.log("Moving ship left");
        ship.x -= 5;
    };
}
