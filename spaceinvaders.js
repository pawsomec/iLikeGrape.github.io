//board
let board;
let boardWidth = 500;
let boardHeight = 600;
let context;

//ship
let shipWidth = 88;
let shipHeight = 94;
let shipX = 50;
let shipY = 50;
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
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }
}
