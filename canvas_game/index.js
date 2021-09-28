var canvas = document.getElementById("myCanvas");

canvas.height = (window.innerHeight)-400;
canvas.width = (window.innerWidth)-250;

var ctx = canvas.getContext("2d");

var boxWidth = 75;
var boxHeight = 40;

var x = canvas.width;
var y = canvas.height/2-boxHeight/2;

var dx = 1;
var dy = 1;
var delay=10;

var rightPressed = false;
var leftPressed = false;

var score = 0;
var scoreMiss = 0;
var missed = [];
var notMissed= [];
var lives = 3;

var textWidth=80;
var totalTextwidth=0;
var textSpacing=15;
var allTextWidth=0;

//var fileFail='toy-robot-blorping.mp3';

fileFail='167338__willy-ineedthatapp-com__pup-fat.mp3';


//var fileSuccess='firework-single-rocket-1.mp3';

var fileSuccess='519991__casstway__waterdrop.mp3';

//var fileSuccess =  '514133__juverisetila__medium-explosion.mp3'

var fileNotMissed ='hat.mp3';



var toggle=0;
var lWord;

var instance=0;
var explode_int;

var idRequest;
var gameFinished=0;
var audio2 = new Audio('highbell.mp3');
var count = 0;
var allClicked=0;
var nClicked=[];

function play_F(file){
  var audio = document.createElement('audio');
  audio.src = file;
  document.body.appendChild(audio);
  audio.play();
  
  audio.onended = function () {
    this.parentNode.removeChild(this);
  }
}

document.addEventListener('DOMContentLoaded',ready);

function ready() {

	console.log('LOAD');
	menuSlide();
	menuClick=1;
}




var i=0;

var word = [];
var wordAnswer=[1,0,1,0];
var wordX=[];
var wordClicked=[];


var c = [];


c[0]='hsl(0, 100%, 50%)';
c[1]='hsl(50, 100%, 50%)';
c[2]='hsl(80, 100%, 50%)';
c[3]='hsl(125, 100%, 50%)';
c[4]='hsl(180, 100%, 50%)';
c[5]='hsl(200, 100%, 50%)';
c[6]='hsl(230, 100%, 50%)';
c[7]='hsl(275, 100%, 50%)';
c[8]='hsl(313, 100%, 50%)';
c[9]='hsl(65, 100%, 50%)';





var txtColor='#059DC0';
var txtColorTrue='rgba(76, 175, 80, 0.0)';
var txtColorFalse='#F51720';
var txtScoreColor='#04D4F0';
var txtColorNotMissed='green';





function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/*   PARTICLES -----------------------------------------*/
        let particles = [];
          
        /* Initialize particle object  */
        class Particle {
            constructor(x, y, radius, dx, dy) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.dx = dx;
                this.dy = dy;
                this.alpha = 1;
                this.color=c[getRandomInt(10)];
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;

                //var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

				//var color = c[getRandomInt(3)];
                


                ctx.fillStyle = this.color;

                  
                /* Begins or reset the path for 
                   the arc created */
                ctx.beginPath();
                  
                /* Some curve is created*/
                ctx.arc(this.x, this.y, this.radius, 
                        0, Math.PI * 2, false);

                ctx.fill();
                /* Restore the recent canvas context*/
                ctx.restore();
            }
            update() {
                this.draw();
                this.alpha -= 0.01;
                this.x += this.dx;
                this.y += this.dy;
            }
        }
  
/*   PARTICLES     --------------------------------------*/




document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("click", clickHandler, false);

function clickHandler(e) {
    var oY = canvas.offsetTop;
    var oX = canvas.offsetLeft;
    var relativeX = e.clientX - oX;
    var relativeY = e.clientY - oY;
    particles.splice(0);
    //clearInterval(explode_int);
    window.cancelAnimationFrame(idRequest);


if (toggle!=0 && relativeX > (canvas.width)*0.11) {
    for (var i=0;i<lWord;i++) {
        if(relativeX > x+wordX[i] && relativeX < x+wordX[i+1] && relativeY>y-10 && relativeY<y+45 && i+1<lWord && missed[i]==0) {
          wordClicked[i]++;
          if(wordClicked[i]==1) {nClicked.push(1)}
          if (wordAnswer[i]==1 && wordClicked[i]==1) {
            score++; 

                for (j = 0; j <= 50; j++) {
             //   let ddx = (Math.random() - 0.5) * (Math.random() * 6);
             //   let ddy = (Math.random() - 0.5) * (Math.random() * 6);
                let ddx = (Math.random() - 0.5) * (Math.random() * 6);
                let ddy = (Math.random() - 0.5) * (Math.random() * 6);
                let radius = Math.random() * 3;
                let particle = new Particle(relativeX, relativeY, radius, ddx, ddy);
                  
                /* Adds new items like particle*/
                particles.push(particle);
            }
      

                explode();
            //audio1.play();
            play_F(fileSuccess);
          } else if (wordAnswer[i]!=1 && wordClicked[i]==1) {scoreMiss--; play_F(fileFail);};
         // alert('слово номер '+i+' Выбрано? '+wordClicked[i]+' lWord '+lWord+' relativeX='+relativeX+'x+wordX[i]='+x+wordX[i]);
        }

        if(relativeX > x+wordX[i] && i+1==lWord && relativeX < x+wordX[i]+(wordX[i]-wordX[0])/lWord && relativeY>y-10 && relativeY<y+45 && missed[i]==0) {
          //txtColor='blue';
          wordClicked[i]++;
          if(wordClicked[i]==1) {nClicked.push(1)}
          if (wordAnswer[i]==1 && wordClicked[i]==1) {
                score++; 
                for (j = 0; j <= 50; j++) {
                let ddx = (Math.random() - 0.5) * (Math.random() * 6);
                let ddy = (Math.random() - 0.5) * (Math.random() * 6);
                let radius = Math.random() * 3;
                let particle = new Particle(relativeX, relativeY, radius, ddx, ddy);                
                /* Adds new items like particle*/
                particles.push(particle);
            }
           

           explode();
            //audio1.play();
            play_F(fileSuccess);
           } else if (wordAnswer[i]!=1 && wordClicked[i]==1) {scoreMiss--; play_F(fileFail);};
         // alert('слово номер '+i+' Выбрано? '+wordClicked[i]+' lWord '+lWord+' relativeX='+relativeX+'x+wordX[i]='+x+wordX[i]);
        } 
    }

  }
} 


function mouseMoveHandler(e) {
    var oY = canvas.offsetTop;
    var oX = canvas.offsetLeft;
    var relativeX = e.clientX - oX;
    var relativeY = e.clientY - oY;
   if(relativeX > x-15 && relativeX < x+allTextWidth+15 && relativeY>y-10 && relativeY<y+45) {
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


var text,h,v,clicked,answer,miss,notMiss;

function drawWord() {

  ctx.font = "36px Arial";
  textWidth = ctx.measureText(text).width;
  totalTextwidth=totalTextwidth+textWidth+textSpacing;

 // console.log('text=',text,' x=',h,' clicked=',clicked,' answer=',answer, ' miss=',miss);
  

  if(clicked == 0) {
    ctx.fillStyle = txtColor;
  }
  if(clicked >= 1 && answer==1) {
    ctx.fillStyle = txtColorTrue;
  }
  if(clicked >= 1 && answer==0) {
    ctx.fillStyle = txtColorFalse;
  } 
  if(miss>=1) {
    ctx.fillStyle = txtColorFalse;
  }
  if (notMiss>=1) {
  	ctx.fillStyle = txtColorNotMissed;
  }
if (h<canvas.width && h+textWidth >0)  {
  ctx.fillText(text, h, v+13);
}

}


function drawScore() {
  ctx.font = "36px Arial";
  ctx.fillStyle = txtScoreColor;
  ctx.fillText("Меткие клики: "+score, (canvas.width)*0.2, 40);

  var scoreMissWidth = ctx.measureText("Промашки: ").width;
  ctx.fillText("Промашки: "+scoreMiss, (canvas.width)*0.8 - scoreMissWidth, 40);
  ctx.font = "26px Arial";
  ctx.fillStyle = txtColor;
}


function draw() {



ctx.clearRect(0, 0, canvas.width, canvas.height);

allTextWidth = totalTextwidth;

totalTextwidth=0;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo((canvas.width)*0.1, 0);
    ctx.lineTo((canvas.width)*0.1, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fillStyle = 'rgb(220,220,220,0.4)';
    ctx.fill();




for (var i=0;i<lWord;i++) {
  text=word[i];
  wordX[i]=totalTextwidth;
  if (x+totalTextwidth<(canvas.width)*0.1 && wordClicked[i]==0 && wordAnswer[i]==1) {
    missed[i]++;
    if (missed[i]==1) {scoreMiss--; play_F(fileFail); nClicked.push(1);}   //считаем, что пропуск правильного клика = неправильный клик
  }
  if (x+totalTextwidth<(canvas.width)*0.1 && wordClicked[i]==0 && wordAnswer[i]==0) {
  	
  	notMissed[i]++;
    
    if (notMissed[i]==1) {score++; play_F(fileNotMissed); nClicked.push(1);}   //считаем, что пропуск неправильного клика = правильный клик
  }
//text,h,v,clicked,answer,miss

h=x+totalTextwidth;
v=y;
clicked=wordClicked[i];
answer=wordAnswer[i];
miss=missed[i];
notMiss=notMissed[i];

  drawWord();
}

//requestAnimationFrame(drawScore);
drawScore();


if (x<-totalTextwidth+(canvas.width)*0.13) {

 //clearInterval(interval);

//  alert('ИГРА ОКОНЧЕНА');
//location.reload();

	gameFinished++;
   endButton.innerHTML="НОВАЯ ИГРА";
   endButton.removeEventListener('click',pauseCreep);
   endButton.addEventListener('click',newGame);

   if (gameFinished==1) {
   audio2.play();}

  }



  if (lWord==nClicked.length && nClicked.length>1) {

  	
  	allClicked++; 
/*
  	toggle=0;
  	   endButton.innerHTML="НОВАЯ ИГРА";
   endButton.removeEventListener('click',pauseCreep);
   endButton.addEventListener('click',newGame);
*/
  	if (allClicked==1) {
   	
   	setTimeout(audioPlay,800);
   	
  	}
  } 





x -= dx*toggle;

requestAnimationFrame(draw);
}

function audioPlay() {

	  	toggle=0;
  	   endButton.innerHTML="НОВАЯ ИГРА";
   endButton.removeEventListener('click',pauseCreep);
   endButton.addEventListener('click',newGame);
	audio2.play();

	txtColorFalse=txtColorTrue;
	txtColor=txtColorTrue;
	txtColorNotMissed=txtColorTrue;


}

/* FUNCTION EXPLODE PARTICLES --------------------*/
        function explode() {
            /* Clears the given pixels in the rectangle */
            //ctx.clearRect(0, 0, canvas.width, canvas.height);
            //ctx.fillStyle = "white";
            //ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, i) => {
                    if (particle.alpha <= 0) {
                        particles.splice(i, 1);
                    } else particle.update()
                })
                  
                /* Performs a animation after request*/
         //   instance++;
         //   console.log('EХPLODE = ',instance);
         //   if (instance>100) {return;}

           idRequest=requestAnimationFrame(explode);


        }
/* END OF FUNCTION EXPLODE PARTICLES --------------------*/

//var interval = setInterval(draw, delay);

//requestAnimationFrame(draw);

//requestAnimationFrame(setInterval(draw, 10));



// КНОПКА ПАУЗЫ ВНИЗУ
var endButton = document.querySelector('.btn');
endButton.disabled=true;
endButton.addEventListener('click', pauseCreep);

function pauseCreep () {

count++;

document.getElementById("file").disabled=true;
document.getElementById("delay").disabled=true;

if (count==1) {

	menuSlide();
	draw();

}

if (toggle==1) {
  toggle=0;
  endButton.innerHTML="ИГРА";
  }
  else if (toggle==0) {
    endButton.innerHTML="ПАУЗА";
  toggle=1;
 // interval = setInterval(draw, delay);
  }
}

// Выезд верхнего меню
//var menu = document.getElementById('menu');
//menu.addEventListener('click', menuSlide);

var menuClick=0;
function menuSlide() {
  if (menuClick==0) {
    document.getElementById("speed").style.top = "0";
    document.getElementById("file").style.top = "0";
    menuClick++;
  } else {
    document.getElementById("file").style.top = "-60px";
    document.getElementById("speed").style.top = "-60px";
    menuClick--;
  } 
}

var val;
  function getData() {
     // получаем индекс выбранного элемента
    var selind = document.getElementById("delay").options.selectedIndex;
   var txt= document.getElementById("delay").options[selind].text;
   val= document.getElementById("delay").options[selind].value;
   //delay=parseInt(val);
	let lever =1;
   dx=lever*parseInt(val)/10;
  }

function newGame() {
	location.reload();
}



function readFile(input) {
word=[];
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    var res = reader.result;
    fromFile = res.replace(/(\r\n|\n|\r)/gm," ");
    fromFile = fromFile.replace(/\s+/g," ");
word=fromFile.split(' ');
lWord = word.length;

for (var iii=0;iii<lWord;iii++) { 
      wordClicked[iii]=0;
      var lw=word[iii].length;
      if (word[iii].charAt(lw-1)=='*') {
      wordAnswer[iii]=0;
     word[iii]=word[iii].slice(0,lw-1);} else {
      wordAnswer[iii]=1;
      }; 
      missed[iii]=0; 
      notMissed[iii]=0; 
    };

endButton.disabled=false;


getData();


//var interval = setInterval(draw, delay);

//draw();

  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}



