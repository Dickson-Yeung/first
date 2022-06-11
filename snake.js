
//board
var blocksize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake head
var snakeX = blocksize * 5;
var snakeY = blocksize * 5;

var velocityX = 0;
var velocityY = 0;

var snakebBody = [];

//food
var foodX;
var foodY;

var gameOver = false

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blocksize;
    board.width = cols * blocksize;
    context = board.getContext("2d");

    placefood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10); //100 milliseconds
}

function update(){
    if(gameOver){
        return;
    }

    context.fillStyle="white";
    context.fillRect(0, 0, board.width,board.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blocksize, blocksize);

    if(snakeX == foodX && snakeY == foodY){
        snakebBody.push([foodX, foodY])
        placefood();
    }

    for(let i = snakebBody.length-1; i > 0; i--){
        snakebBody[i] = snakebBody[i-1];
    }
    if(snakebBody.length){
        snakebBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blocksize;
    snakeY += velocityY * blocksize;
    context.fillRect(snakeX, snakeY, blocksize, blocksize);
    for(let i = 0; i < snakebBody.length; i++){
        context.fillRect(snakebBody[i][0], snakebBody[i][1], blocksize, blocksize);
    }
    
    //game over conditions
    if(snakeX < 0 || snakeX > cols * blocksize || snakeY < 0 || snakeY > cols * blocksize){
        gameOver = true;
        alert("Game Over");
    }
    
    for(let i = 0; i < snakebBody.length; i++){
        if(snakeX == snakebBody[i][0] && snakeY == snakebBody[i][1]){
            gameOver = true
            alert("Game Over");
        }
    }
}

function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown" && velocityY !=-1){
        velocityX = 0;
        velocityY = 1;
    }
    else if(e.code == "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    else if(e.code == "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
}


function placefood(){
    foodX = Math.floor(Math.random() * cols) * blocksize;
    foodY = Math.floor(Math.random() * rows) * blocksize;
}
