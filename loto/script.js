'use strict';




function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {


  	var res = reader.result;

  	fromFile = res.replace(/(\r\n|\n|\r)/gm,":");

  	fromFile = fromFile.replace(/\s+/g," ");
  	//console.log(fromFile);

console.log(fromFile);

var imported=fromFile.split(':');

mm0=imported[0].split(',');
mm1=imported[1].split(',');
mm2=imported[2].split(',');
mm3=imported[3].split(',');
mm4=imported[4].split(',');
mm5=imported[5].split(',');




var bottomCard0=document.querySelector('#c16 .card .down').innerHTML=mm0[0];
var bottomCard1=document.querySelector('#c17 .card .down').innerHTML=mm0[1];
var bottomCard2=document.querySelector('#c18 .card .down').innerHTML=mm0[2];
var bottomCard3=document.querySelector('#c19 .card .down').innerHTML=mm0[3];
var bottomCard4=document.querySelector('#c20 .card .down').innerHTML=mm0[4];



//console.log(mm1);

start();


  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}


//****** Чтение данных из текстового файла на сервере для начальной установки 


function getFileFromServer() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {


       var	result = xhr.responseText;
       readFileInitial(result);

        }
    }
    xhr.open('GET', 'test.html');
    xhr.send();


}


function readFileInitial(result) {

  	var res = result;

  	fromFile = res.replace(/(\r\n|\n|\r)/gm,":");

  	fromFile = fromFile.replace(/\s+/g," ");
  	//console.log(fromFile);

console.log(fromFile);

var imported=fromFile.split(':');


mm1=imported[1].split(',');
mm2=imported[2].split(',');
mm3=imported[3].split(',');
mm4=imported[4].split(',');
mm5=imported[5].split(',');





//console.log(mm1);

start();



}
//***********************КОНЕЦ начального чтения












//*********************************************************
//функция случайного перемешивания массива

function shuffle(arr){ 
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
//*********************************************************


// myMoveLeft***************************************************************************
function myMoveLeft() {

var inputFile=document.querySelector('input').disabled=true;
//inputFile.classList.add('none');



var answer=false;

var typ=this.id; //ID элемента, по которому кликнули



nTopCard++;

var elem=topCards[nTopCard];
var selector='#'+elem.id+' .card .emo';

console.log('selector= ',selector,' nTopCard= ',nTopCard);


var textTop=document.querySelector(selector).innerHTML; //Текст верхней карты
console.log('textTop ',textTop);



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
//console.log('mm1 ',mm1,'mm2 ',mm2,'mm3 ',mm3,'mm4 ',mm4,'mm5',mm5);





if(answer==true){
	elem.addEventListener('click',myMoveLeft);

	topCards[nTopCard].style.zIndex = "1500"; 
console.log('nTopCard= ',nTopCard,' Zindex 1500')

};
if(answer==false){
nTopCard--;
}




var elemOffset = offset(elem);


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


//*************************************************************************


var moveTop=posTopTargetDoc-posTopDoc;
var moveLeft=posLeftTargetDoc-posLeftDoc;

  if (moveLeft>0) {moveLeft=moveLeft-3;}; 
  if (moveLeft<0) {moveLeft=moveLeft+3;};

var step=0;

let start = Date.now(); // remember start time

  var timerA = setInterval(frame, 1);

var nIter=250; //КОЛИЧЕСТВО ШАГОВ В АНИМАЦИИ


  function frame() {

	let timePassed = Date.now() - start;	


  if (step >= nIter) {
    clearInterval(timerA); // finish the animation after 2 seconds
    return;
  }

  // draw the animation at the moment timePassed
  draw(timePassed);
}




var middleLeft=0;
var middleTop=0;
//ФУНКЦИЯ ИЗМЕНЯЕТ КООРДИНАТЫ ВЕРХНЕЙ КАРТЫ**************************************************************************************************
function draw(timePassed) {


step++;
//console.log(timePassed);
//console.log('ANSWER=   ',answer);
if(answer==true) {

if(step==nIter-3) {
    audio1.play();
}

elem.style.left = posLeft + moveLeft/nIter*step + 'px';
elem.style.top = posTop + moveTop/nIter*step + 'px';
//console.log('step ',step,' elem.style.top',elem.style.top, ' elem.style.left',elem.style.left);
}


if(answer==false) {
	
	if (step<=nIter/2) {

		elem.style.left = posLeft + moveLeft/nIter*step + 'px';
		elem.style.top = posTop + moveTop/nIter*step + 'px';
	//	middleLeft=posLeft + moveLeft/500*step;
	//	middleTop=posTop + moveTop/500*step;
	//	if(step==250) {middleLeft=elem.style.left; middleTop=elem.style.top; console.log(middleLeft,middleTop);};
	//	console.log('step ',step,' elem.style.top',elem.style.top, ' elem.style.left',elem.style.left);
			//			console.log(posLeft,posTop,moveLeft,moveTop,	'step ',step,' elem.style.top',elem.style.top, ' elem.style.left',elem.style.left);


	}
	if (step>nIter/2) {

        if(step==nIter/2+1) {audio.play();};
            
       
		
		elem.style.left = posLeft + moveLeft/2- moveLeft/nIter*(step-nIter/2) + 'px';
		elem.style.top = posTop + moveTop/2- moveTop/nIter*(step-nIter/2) + 'px';
				//		console.log(posLeft,posTop,moveLeft,moveTop,	'step ',step,' elem.style.top',elem.style.top, ' elem.style.left',elem.style.left);

	}
}

	}

//****************************************************************************************

}

// FUNCTION myMoveLeft *******************************************************




//***РАСПРДЕЛЕНИЕ ТЕКСТА ПО КАРТАМ***********************************************************
function distribute() {
var mmjSelect=[];
var mmj=mm.slice();

    for (var n=0; n<50;n++) {

        m=mmj.length;
        j = Math.random()*m;
        k = Math.floor(j);
        p = mmj[k];
        mmjSelect.push(p);
        mmj.splice(k,1);
    };

    var mmjSelectShuffled = shuffle(mmjSelect); // перемещиваем в случайном порядке

    //var lengthOfMmjSelect=mmjSelect.length;

//var lengthOfMm=mm.length;
//var lengthOfmmj=mmj.length;

    //var lengthOfMmjSelectShuffled=mmjSelectShuffled.length;

    var backCards=document.querySelectorAll(".emo"); // выбираем все divы для вставления эмоджи
    var ll = backCards.length;

  //  console.log('lengthOfMm= ',lengthOfMm,' lengthOfmmj= ',lengthOfmmj,'m= ',m,' ll= ',ll,' lengthOfMmjSelect= ',lengthOfMmjSelect,' lengthOfMmjSelectShuffled= ',lengthOfMmjSelectShuffled);
    
    for (var kk=0; kk<ll;kk++) {
        emo[kk]=backCards[kk];
        emo[kk].innerHTML = mmjSelectShuffled[kk];
      //  console.log(emo[kk].innerHTML);
    };


}
//******************************************************************************************

function start () {


mm=mm1.concat(mm2,mm3,mm4,mm5);

audio = new Audio('fail.mp3');
audio1 = new Audio('success.mp3');

distribute();

//Обработка клика по нижней  карте

cards=document.querySelectorAll("div.btm");
cardsNumber=cards.length;

for (var l=0;l<cardsNumber;l++) {

	cards[l].addEventListener('click', myMoveLeft);
};


topCards=document.querySelectorAll("div.top");
topCardsNumber=topCards.length;

console.log('topCardsNumber= ',topCardsNumber);

}

//********* enf of function Start************



var fromFile;
var mm,mm0,mm1,mm2,mm3,mm4,mm5;
var audio,audio1;
var nTopCard;
var emo = [];
var mmj=[];
var mmjSelect =[];
var m,j,k,p;
var topCards,topCardsNumber,cardsNumber,cards;
nTopCard=-1;

/*mm0=['Цвета','Имена','Овощи',"Звери","Числа",'Цвета','Имена','Овощи',"Звери","Числа"];
mm1=["красный","желтый","зеленый","черный","синий","красный","желтый","зеленый","черный","синий"];
mm2=["Вася","Петя","Маша","Коля","Исаак","Вася","Петя","Маша","Коля","Исаак"];
mm3=["огурец","помидор","яблоко","арбуз","слива","огурец","помидор","яблоко","арбуз","слива"];
mm4=["лев","тигр","мышь","заяц","слон","лев","тигр","мышь","заяц","слон"];
mm5=["один","два","три","четыре","пять","один","два","три","четыре","пять"];
*/

mm0=['непохожий','Растение','лизал','Махнул','передумал'];
mm1=['неприличный','непроснувшийся','непобедимый','непогода','непризнанный','непривычный','непростой','непослушный','Неприятный','неподвижный'];
mm2=['Сожаление','представление','приготовление','Заглядение','падение','обсуждение','Отвращение','освещение','превращение','Свечение'];
mm3=['Сказала','сказал','Вязала','вязали','показал','показали','Порезала','порезали','Отгрызала','лизали'];
mm4=['Протянул','кивнула','Лизнул','куснула','Прыгнул','шагнула','Шмыгнул','скакнул','Вернул','обманула'];
mm5=['перебежал','перевёз','переложил','передумал','переползла','перенесли','переиграл','переели','перегрелся','перестала'];



var bottomCard0=document.querySelector('#c16 .card .down').innerHTML=mm0[0];
var bottomCard1=document.querySelector('#c17 .card .down').innerHTML=mm0[1];
var bottomCard2=document.querySelector('#c18 .card .down').innerHTML=mm0[2];
var bottomCard3=document.querySelector('#c19 .card .down').innerHTML=mm0[3];
var bottomCard4=document.querySelector('#c20 .card .down').innerHTML=mm0[4];





//readFileInitial();

start();
