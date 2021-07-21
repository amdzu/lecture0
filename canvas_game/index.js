var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;

var boxWidth = 75;
var boxHeight = 40;

var x = canvas.width;
var y = canvas.height/2-boxHeight/2;

var dx = 0.5;
var dy = -0.5;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;

var textWidth=80;
var totalTextwidth=0;
var textSpacing=15;

var i=0;

var word = ['стол','стул','слон','сон'];
var wordX=[];
var lWord = word.length;

var txtColor='red';




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("click", clickHandler, false);

function clickHandler(e) {
    var oY = canvas.offsetTop;
    var oX = canvas.offsetLeft;
    var relativeX = e.clientX - oX;
    var relativeY = e.clientY - oY;

    





    if(relativeX > x-25 && relativeX < x+textWidth+25 && relativeY>y-10 && relativeY<y+45) {
        txtColor='blue';
    } else {txtColor='red'};
}


function mouseMoveHandler(e) {
    var oY = canvas.offsetTop;
    var oX = canvas.offsetLeft;
    var relativeX = e.clientX - oX;
    var relativeY = e.clientY - oY;
   if(relativeX > x-25 && relativeX < x+textWidth+25 && relativeY>y-10 && relativeY<y+45) {
     canvas.style.cursor = "pointer";
    } else {canvas.style.cursor="default"};

}



function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}




function drawWord(text,h,v) {
  textWidth = ctx.measureText(text).width;
  totalTextwidth=totalTextwidth+textWidth+textSpacing;
  ctx.font = "26px Arial";
  ctx.fillStyle = txtColor;
  ctx.fillText(text, h, v+13);
}




function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
totalTextwidth=0;

for (var i=0;i<lWord;i++) {

var text=word[i];
wordX[i]=x+totalTextwidth;
console.log(wordX[i]);
drawWord(text,x+totalTextwidth,y);

}




if (x<-totalTextwidth) {x = canvas.width; txtColor='red';}
  x -= dx;
}



var interval = setInterval(draw, 50);