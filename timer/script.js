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

imported=fromFile.split(':');




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


console.log(imported);

start();


  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}






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





//***РАСПРДЕЛЕНИЕ ТЕКСТА ПО КАРТАМ***********************************************************
function distribute(mm) {


var mmjSelect=[];
var mmj=mm.slice();

    for (var n=0; n<4;n++) {

        m=mmj.length;
        j = Math.random()*m;
        k = Math.floor(j);
        p = mmj[k];
        mmjSelect.push(p);
        mmj.splice(k,1);
    };

    var mmjSelectShuffled = shuffle(mmjSelect); // перемещиваем в случайном порядке



    var downCards=document.querySelectorAll(".down"); // выбираем все divы для вставления эмоджи
    var ll = downCards.length;

  //  console.log('lengthOfMm= ',lengthOfMm,' lengthOfmmj= ',lengthOfmmj,'m= ',m,' ll= ',ll,' lengthOfMmjSelect= ',lengthOfMmjSelect,' lengthOfMmjSelectShuffled= ',lengthOfMmjSelectShuffled);
    
    for (var kk=0; kk<ll;kk++) {
        down[kk]=downCards[kk];
        down[kk].innerHTML = mmjSelectShuffled[kk];
      //  console.log(emo[kk].innerHTML);
    };

    var topEmo = document.querySelector('.emo');
    topEmo.innerHTML=mmjSelectShuffled[0];


}
//******************************************************************************************

function start () {


answer=false;

audio = new Audio('fail.mp3');
audio1 = new Audio('success.mp3');

distribute(mm0);

//Обработка клика по нижней  карте

cards=document.querySelectorAll("div.btm");
cardsNumber=cards.length;

for (var l=0;l<cardsNumber;l++) {

	cards[l].addEventListener('click', checkAnswer);
};


topCards=document.querySelectorAll("div.top");
topCardsNumber=topCards.length;

console.log('topCardsNumber= ',topCardsNumber);

}

//********* enf of function Start************


function startTimer() {  //Функция запуска управления таймером

answer=false;


  for (var l=0;l<cardsNumber;l++) {

  cards[l].addEventListener('click', checkAnswer);
};

                const time = new Date('August 19, 1975 23:15:30');

                var lBtm=bottomCards.length;

                console.log(bottomCards);

                topCard.classList.remove('none');
                        bottomCards[0].classList.add('none');
                        bottomCards[1].classList.add('none');
                        bottomCards[2].classList.add('none');
                        bottomCards[3].classList.add('none');
                

              //      distribute();

                   // time.setMinutes(9);
                    time.setSeconds(8);
                    //var minutes =time.getMinutes();
                    var seconds=time.getSeconds();
                    //if(minutes<10) {minutes='0'+minutes;} else {minutes=String(minutes);};
                    seconds=String(seconds);
                    var timeS=seconds;
                    var timer =document.querySelector('.time');
                    timer.innerHTML=timeS;
    
    
                    timerID=setInterval(function(){ //запуск таймера
                        
                        time.setSeconds(time.getSeconds()-1);
        
                        console.log(time);
                        
                        //var minutes = time.getMinutes();
                        var seconds = time.getSeconds();

                        if (seconds==4) {


                        topCard.classList.add('none');

                        bottomCards[0].classList.remove('none');
                        bottomCards[1].classList.remove('none');
                        bottomCards[2].classList.remove('none');
                        bottomCards[3].classList.remove('none');

                      }


                        if (seconds==0) {


                        //topCard.classList.add('none');

                        bottomCards[0].classList.add('none');
                        bottomCards[1].classList.add('none');
                        bottomCards[2].classList.add('none');
                        bottomCards[3].classList.add('none');

                        if (answer==false) {nRhinos++; rhinos.innerHTML=String(nRhinos);};

                        console.log('answer ',answer);

                      }


                        //if(minutes<10) {minutes='0'+minutes;} else {minutes=String(minutes);};
                        seconds=String(seconds);
                        timeS=seconds;
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

                        counter++;

                        console.log('startTimer counter = ',counter);

                        if (counter<10) {

                          console.log('startTimer counter = ',counter);


                          startTimer();

                        }
                        
                        //остановка таймера через 8 сек
                    }, 8000);
    
}; //конец функции управления таймером



function checkAnswer() {


                    clearInterval(timerID); 
                    clearTimeout(timeoutID);
                    var timer =document.querySelector('.time');
                    timer.innerHTML='0';

                        bottomCards[0].classList.add('none');
                        bottomCards[1].classList.add('none');
                        bottomCards[2].classList.add('none');
                        bottomCards[3].classList.add('none');


                    //startTimer();

      var inputFile=document.querySelector('input').disabled=true;
      //inputFile.classList.add('none');


      for (var l=0;l<cardsNumber;l++) {

        cards[l].removeEventListener('click', checkAnswer);
      };


      answer=false;

      var typ=this.id; //ID элемента, по которому кликнули

      var elem=document.querySelector('.emo');
      var textT=elem.innerHTML;
      var selector='#'+typ+' .card .down';
      var textDown=document.querySelector(selector).innerHTML; //Текст верхней карты

      if (textT==textDown) {answer=true};


      nRhinos=Number(rhinos.innerHTML);
      nPeople=Number(people.innerHTML);

      if (answer==true) {nPeople++; people.innerHTML=String(nPeople);};
      if (answer==false) {nRhinos++; rhinos.innerHTML=String(nRhinos);};


      console.log('textT ',textT, ' textDown', textDown,' answer ',answer);


                        counter++;

                        console.log('checkAnswer counter = ',counter);

                        if (counter<10) {




                          startTimer();

                        }


}





var fromFile,imported, counter,timerID,timeoutID,result,answer=false;
var mm,mm0,mm1,mm2,mm3,mm4,mm5,topWords;
var audio,audio1;
var nTopCard;
var emo = [];
var down=[];
var mmj=[];
var mmjSelect =[];
var m,j,k,p;
var topCards,topCardsNumber,cardsNumber,cards;
var nRhinos=0, nPeople=0;


var rhinos=document.querySelector('.countEnemy');
var people=document.querySelector('.countPlayer');


rhinos.innerHTML=String(nRhinos);
people.innerHTML=String(nPeople);

nTopCard=-1;
counter=0;


mm0=['редчайшие','угрожающий','поинтересовалась','угоститься'];
mm1=['редчайшие','дражайшие','тончайшие','сложнейшие'];
mm2=['угрожающий','сияющий','бегающий','воющий'];
mm3=['поинтересовалась','напугалась','догадалась','облизнулась'];
mm4=['угоститься','лакомиться','питаться','метнуться'];
mm5=['догадавшись','попавшись','помчавшись','вернувшись'];

var topCard =document.querySelector('.top');
var bottomCards=document.querySelectorAll('.btm');

start();


var bottomCard0=document.querySelector('#c16 .card .down').innerHTML=mm0[0];
var bottomCard1=document.querySelector('#c17 .card .down').innerHTML=mm0[1];
var bottomCard2=document.querySelector('#c18 .card .down').innerHTML=mm0[2];
var bottomCard3=document.querySelector('#c19 .card .down').innerHTML=mm0[3];