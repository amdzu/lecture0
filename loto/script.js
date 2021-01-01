'use strict';

function shuffle(arr){ //функция случайного перемешивания массива
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

//********************************************************
//ФУНКЦИЯ ОПРЕДЕЛЕНИЯ КООРДИНАТ ОТ ДОКУМЕНТА
	function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

var nTopCard=-1;


function myMoveLeft() {

var answer=false;

var typ=this.id; //ID элемента, по которому кликнули

//var qq=document.getElementById(typ);
//console.log(qq, 'classList ',qq.classList);
//var wwww=qq.classList.value.includes('one');
//console.log(wwww);





nTopCard++;

//var elem = document.getElementById("top1"); 
var elem=topCards[nTopCard];
var selector='#'+elem.id+' .card .emo';

console.log(selector);


var textTop=document.querySelector(selector).innerHTML; //Текст верхней карты
console.log(textTop);



if(document.getElementById(typ).classList.value.includes('one')){

	if (mm1.includes(textTop)) {answer=true; elem.classList.add('one'); }
};
if(document.getElementById(typ).classList.value.includes('two')){

	if (mm2.includes(textTop)) {answer=true; elem.classList.add('two');}
};
if(document.getElementById(typ).classList.value.includes('three')){

	if (mm3.includes(textTop)) {answer=true; elem.classList.add('three');}
};
if(document.getElementById(typ).classList.value.includes('four')){

	if (mm4.includes(textTop)) {answer=true; elem.classList.add('four');}
};
if(document.getElementById(typ).classList.value.includes('five')){

	if (mm5.includes(textTop)) {answer=true; elem.classList.add('five');}
};

console.log('Answer= ',answer);
console.log('mm1 ',mm1,'mm2 ',mm2,'mm3 ',mm3,'mm4 ',mm4,'mm5',mm5);





if(answer==true){
	elem.addEventListener('click',myMoveLeft);
	topCards[nTopCard].style.zIndex = "1500"; 
};
if(answer==false){
nTopCard--;
}




var elemOffset = offset(elem);
//console.log(elemOffset.left, elemOffset.top);

  //var target = document.getElementById("c16"); 



//******************************************************************************
//ОПРЕДЕЛЕНИЕ КООРДИНАТ ОТ РОДИТЕЛЯ
  //координаты верхней карты (от родителя)
  var posTop=elem.offsetTop;
  var posLeft=elem.offsetLeft;

  var posTopDoc=elemOffset.top; //относительно документа
  var posLeftDoc=elemOffset.left;//относительно документа


  var elemWidth=elem.offsetWidth;
  var elemHeight=elem.offsetHeight;

  //console.log('elemWidth= ',elemWidth,' elemHeight= ',elemHeight);

  //координаты нижней карты, по которой кликнули
  var posTopTarget=this.offsetTop;
  var posLeftTarget=this.offsetLeft;

  var targetOffset=offset(this);

  var posTopTargetDoc=targetOffset.top; //таргет относительно документа
  var posLeftTargetDoc=targetOffset.left;

  //console.log('targetOffset ',targetOffset.left, targetOffset.top);


//*************************************************************************
  //var moveTop=posTopTarget-posTop-elemHeight-3;

	//var moveLeft=posLeftTarget-posLeft;

var moveTop=posTopTargetDoc-posTopDoc;
var moveLeft=posLeftTargetDoc-posLeftDoc;

  if (moveLeft>0) {moveLeft=moveLeft-3;}; 
  if (moveLeft<0) {moveLeft=moveLeft+3;};

var step=0;

let start = Date.now(); // remember start time

  var timerA = setInterval(frame, 3);


  function frame() {

	let timePassed = Date.now() - start;	


  if (step >= 300) {
    clearInterval(timerA); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);
}


var middleLeft=0;
var middleTop=0;

function draw(timePassed) {
step++;

console.log('ANSWER=   ',answer);
if(answer==true) {

elem.style.left = posLeft + moveLeft/300*step + 'px';
elem.style.top = posTop + moveTop/300*step + 'px';
console.log('step ',step,' elem.style.top',elem.style.top);
}


if(answer==false) {
	
	if (step<=150) {

		elem.style.left = posLeft + moveLeft/300*step + 'px';
		elem.style.top = posTop + moveTop/300*step + 'px';
		middleLeft=posLeft + moveLeft/300*step;
		middleTop=posTop + moveTop/300*step;
		console.log('step ',step,' elem.style.top',elem.style.top);


	}
	if (step>150) {
		elem.style.left = middleLeft - moveLeft/600*step + 'px';
		elem.style.top = middleTop - moveTop/600*step + 'px';
						console.log('step ',step,' elem.style.top',elem.style.top);

	}
}

	}

}






var result='LOSS';
var counter=0;
var timerID;
var timeoutID;

var time = new Date();

//time.setMinutes(1);
//time.setSeconds(0);


var gameField = document.querySelector('.gameField');
var turned;
var audio;

var emo = [];
var foundMistake;


var mm1=["красный","желтый","зеленый","черный","синий"];
var mm2=["Вася","Петя","Маша","Коля","Исаак"];
var mm3=["огурец","помидор","яблоко","арбуз","слива"];
var mm4=["лев","тигр","мышь","заяц","слон"];
var mm5=["один","два","три","четыре","пять"];

var mm=mm1.concat(mm2,mm3,mm4,mm5);



var nMistakes=7;



var err=[];

for (var iii=0;iii<nMistakes;iii++) { 
    err[iii]=mm[iii];
    };


var mmj=[];
var mmjSelect =[];

var m,j,k,p;

var monster = document.getElementById("monster");

monster.addEventListener("click",clickHandlerMonster);


function clickHandlerMonster() {
    this.classList.remove("show");
    audio.pause();
}


distribute();


//Обработка клика по нижней  карте

var cards=document.querySelectorAll("div.btm");
var cardsNumber=cards.length;

for (var l=0;l<cardsNumber;l++) {

	cards[l].addEventListener('click', myMoveLeft);
};


var topCards=document.querySelectorAll("div.top");
var topCardsNumber=topCards.length;



//var leftCard = document.getElementById("c16");
//leftCard.addEventListener('click', myMoveLeft);
        


// Обработка клика по кнопке завершения игры

var endButton = document.querySelector('.btn');

endButton.addEventListener('click', stopGame);




        function clickHandler() { //начало функции обработки клика по карте

        console.log('CLICK!!!');
            startTimer();


                var green = gameField.querySelectorAll(".green");
                var red = gameField.querySelectorAll(".red"); //поиск перевернутых карт

                console.log("green", green);

                var gl = green.length;
                var rl = red.length;

                console.log("gl", gl);

                    for (var i=0;i<gl;i++) {


                    	console.log("green[i]",green[i],i);

                        green[i].classList.remove('green');
                        /*cardList[i].addEventListener('click',clickHandler);*/
                    };
                    for (var i=0;i<rl;i++) {


                    	console.log("green[i]",green[i],i);

                        red[i].classList.remove('red');
                        /*cardList[i].addEventListener('click',clickHandler);*/
                    };





            this.classList.toggle('turn'); //перевернули карту

            var text2=this.querySelector(".emo").innerHTML; //проверяем, есть ли ошибка в тексте

            foundMistake=false;

            //console.log("text2 ",text2);

            for (var k=0;k<nMistakes;k++) {

            if (err[k].includes(text2)) { //Берем не все содержимое карточки, а выбрасываем 4 символа слева, чтобы номер карточки не мешал

            	foundMistake=true;

            	//console.log("k ",k," text2.slice(4)",text2.slice(4));

            }

            };





            if (foundMistake) {


                turned = gameField.querySelectorAll(".red"); //поиск перевернутых карт

                console.log("turned", turned);

                var tl = turned.length;

                console.log("tl", tl);

                    for (i=0;i<tl;i++) {
                        turned[i].classList.remove('turn', 'fix', 'red', 'green');
                        /*cardList[i].addEventListener('click',clickHandler);*/
                    };
                


               // for (var i=0;i<tl;i++) {

                  

                    this.classList.add('red');// }


                result='WIN';
                setTimeout(function(){
                    clearInterval(timerID);
                    clearTimeout(timeoutID);

                    document.querySelector('.win1').innerHTML='С';
                    document.querySelector('.win2').innerHTML='Т';
                    document.querySelector('.win3').innerHTML='О';
                    document.querySelector('.win4').innerHTML='П';



                 /*   document.querySelector('.warn').innerHTML='НОВАЯ ИГРА';
                    document.querySelector('.film').classList.add('show');
                    document.querySelector('.result').classList.add('show');*/

                    //   ПОЯВЛЕНИЕ ЧУДОВИЩА
//monster = document.getElementById("monster");

            monster.classList.add('show');
            audio = new Audio('growl.mp3');
            audio.play();
//   ПОЯВЛЕНИЕ ЧУДОВИЩА

                             
                },500);

            } else {


                this.classList.add('green');


                            var green =gameField.querySelectorAll('.green').length;

            if (green==11) {
                
                result='WIN';
                setTimeout(function(){
                    clearInterval(timerID);
                    clearTimeout(timeoutID);

                    document.querySelector('.win1').innerHTML='У';
                    document.querySelector('.win2').innerHTML='Р';
                    document.querySelector('.win3').innerHTML='А';
                    document.querySelector('.win4').innerHTML='!';



                    document.querySelector('.warn').innerHTML='НОВАЯ ИГРА';
                    document.querySelector('.film').classList.add('show');
                    document.querySelector('.message').classList.add('show1');
                    document.querySelector('.result').classList.add('show');
                             
                },500);
               };
            }



            } //конец функции обработки клика


            function startTimer() {  //Функция запуска управления таймером
                counter = counter+1; //номер клика
                console.log('counter ',counter);
    
                if (counter==1) {

              //      distribute();

                    time.setMinutes(9);
                    time.setSeconds(0);
                    var minutes =time.getMinutes();
                    var seconds=time.getSeconds();
                    if(minutes<10) {minutes='0'+minutes;} else {minutes=String(minutes);};
                    if(seconds<10) {seconds='0'+seconds;} else {seconds=String(seconds);};
                    var timeS=minutes+':'+seconds;
                    var timer =document.querySelector('.time');
                    timer.innerHTML=timeS;
    
    
                    timerID=setInterval(function(){ //запуск таймера
                        
                        time.setSeconds(time.getSeconds()-1);
        
                        //console.log(time);
                        
                        var minutes = time.getMinutes();
                        var seconds = time.getSeconds();
                        if(minutes<10) {minutes='0'+minutes;} else {minutes=String(minutes);};
                        if(seconds<10) {seconds='0'+seconds;} else {seconds=String(seconds);};
                        timeS=minutes+':'+seconds;
                        timer = document.querySelector('.time');
                        timer.innerHTML=timeS;                       
                    }, 1000);
    
                    timeoutID=setTimeout(() => {
                        
                        clearInterval(timerID); 
                        if(result=='LOSS') {
                            document.querySelector('.win1').innerHTML='L';
                            document.querySelector('.win2').innerHTML='o';
                            document.querySelector('.win3').innerHTML='s';
                            document.querySelector('.win4').innerHTML='e';




                            document.querySelector('.warn').innerHTML='TRY AGAIN';
                            document.querySelector('.film').classList.add('show');
                            document.querySelector('.result').classList.add('show');
                        
                        };     
                        
                        //остановка таймера через 60 сек
                    }, 12000000);


                               
    
                };  


    
            }; //конец функции управления таймером


function stopGame() { //функция обработки клика по кнопке завершения игры

    for (i=0;i<l;i++) {
        cardList[i].classList.remove('turn', 'fix', 'red', 'green');
        cardList[i].addEventListener('click',clickHandler);
    };

    document.querySelector('.result').classList.remove('show');
    document.querySelector('.film').classList.remove('show');  
    document.querySelector('.message').classList.remove('show1');  
    document.querySelector('.time').innerHTML='00:00';
    monster.classList.remove("show");
    result='LOSS';
    counter=0;

   
}


function distribute() {
var mmjSelect=[];
var mmj=mm.slice();



    for (var n=0; n<20;n++) {

        m=mmj.length;
        j = Math.random()*m;
        k = Math.floor(j);
    
        p = mmj[k];
    
        mmjSelect.push(p);
        mmj.splice(k,1);
    };
    
    
 
    
    var mmjSelectShuffled = shuffle(mmjSelect); // перемещиваем в случайном порядке
    
    
    var backCards=document.querySelectorAll(".emo"); // выбираем все divы для вставления эмоджи
    var ll = backCards.length;
    
    for (var kk=0; kk<ll;kk++) {
        emo[kk]=backCards[kk];
        emo[kk].innerHTML = mmjSelectShuffled[kk];
    };


}
