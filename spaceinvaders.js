//board
let board;
let boardWidth = 500;
let boardHeight = 600;
let context;

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
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }

    requestAnimationFrame(update);
}
function update(){
    //preping for next frame
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    if (e.code == "ArrowLeft") { // checks to see if it should move left
        if (e.code == "ArrowRight"){
            
        }
        else{
            ship.y = Math.min(ship.y - 0.5, 0)
        }
    }

    if (e.code == "ArrowRight") { //checks to see if it should move right
        if (e.code == "ArrowLeft"){
        }
        else{
            ship.y = Math.max(ship.y + 0.5, 436)   
        }
    }
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);     
}


