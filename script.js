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

var result='LOSS';
var counter=0;
var timerID;
var timeoutID;

var time = new Date();

//time.setMinutes(1);
//time.setSeconds(0);


var gameField = document.querySelector('.gameField');
var turned;

var emo = [];

var mm = ['🐶','🐱','🐭','🐹','🐰','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐙','🐵','🦄','🐞','🦀','🐟','🐊','🐓','🦃']; 
var mmj=[];
var mmjSelect =[];

var m,j,k,p;

distribute();







//Обработка клика по карте

        var cardList = document.querySelectorAll(".cardWrapper");
        var l = cardList.length;

        for (var i=0;i<l;i++) {

            //var crd = cardList[i];

            cardList[i].addEventListener('click', clickHandler);
        };


// Обработка клика по кнопке завершения игры

var endButton = document.querySelector('.btn');

endButton.addEventListener('click', stopGame);




        function clickHandler() { //начало функции обработки клика по карте

        console.log('CLICK!!!');
            startTimer();

            turned = gameField.querySelectorAll(".turn"); //поиск перевернутых карт

                var tl = turned.length;
               // console.log(tl);

                if (tl == 0) {              //до клика ни одна карта не перевернута
                   // console.log(tl, this);
                    this.classList.toggle('turn');
                };

                if (tl==1 && this.classList.contains('turn')) { //второй клик по единственной перевернутой карте
                  this.classList.toggle('turn');
                  this.classList.remove('green');
               } else {
                   
                if (tl==1 && !this.classList.contains('turn')) { // одна карта перевернута, клик по другой карте
                  this.classList.toggle('turn');
                  this.classList.remove('green');

                  var text1=turned[0].querySelector(".emo").innerHTML;

                    var text2=this.querySelector(".emo").innerHTML;



                    if (text1 !== text2) {  //если текст карт отличается, они краснеют


                        this.classList.remove('green');
                        turned[0].classList.remove('green'); 

                        this.classList.add('red');
                        turned[0].classList.add('red');  
                    } 
                    
                    else { 
                        if(text1 == text2) {  //если тексты карт НЕ отличаются, они зеленеют

                        this.classList.add('green');
                        turned[0].classList.add('green');
                        this.removeEventListener('click', clickHandler);
                        turned[0].removeEventListener('click', clickHandler);
                    
                    }
                    }
                }
            };//конец else

            if (tl==2 && !this.classList.contains('turn') && !this.classList.contains('fix')) { //до клика переверенуты две карты с красным фоном

                if (turned[0].classList.contains('red')) {

                    this.classList.toggle('turn');
                    this.classList.remove('green');
                    this.classList.remove('red');

                    turned[0].classList.toggle('turn');
                    turned[1].classList.toggle('turn');
                    turned[0].classList.toggle('red');
                    turned[1].classList.toggle('red');

                }

                if (turned[0].classList.contains('green')) {

                   this.classList.toggle('turn');
                   turned[0].classList.toggle('turn');
                   turned[1].classList.toggle('turn');

                   turned[0].classList.add('fix');
                   turned[1].classList.add('fix');

                  }

            }


            var green =gameField.querySelectorAll('.green').length;

            if (green==12) {
                
                result='WIN';
                setTimeout(function(){
                    clearInterval(timerID);
                    clearTimeout(timeoutID);

                    document.querySelector('.win1').innerHTML='W';
                    document.querySelector('.win2').innerHTML='i';
                    document.querySelector('.win3').innerHTML='n';
                    document.querySelector('.win4').innerHTML='';



                    document.querySelector('.warn').innerHTML='PLAY AGAIN';
                    document.querySelector('.film').classList.add('show');
                    document.querySelector('.result').classList.add('show');
                             
                },500);
               };




            } //конец функции обработки клика


            function startTimer() {  //Функция запуска управления таймером
                counter = counter+1; //номер клика
                console.log('counter ',counter);
    
                if (counter==1) {

                    distribute();

                    time.setMinutes(1);
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
                    }, 60000);

                 //   setTimeout(() => {if(result=='LOSS') {
                        
                  //      document.querySelector('.win').innerHTML='LOSE';
                  //      document.querySelector('.warn').innerHTML='TRY AGAIN';
                  //      document.querySelector('.film').classList.add('show');
                  //      document.querySelector('.result').classList.add('show');
                    
                  //  };     

                  //  }, 60300);
                               
    
                };  


    
            }; //конец функции управления таймером


function stopGame() { //функция обработки клика по кнопке завершения игры

    for (i=0;i<l;i++) {
        cardList[i].classList.remove('turn', 'fix', 'red', 'green');
        cardList[i].addEventListener('click',clickHandler);
    };

    document.querySelector('.result').classList.remove('show');
    document.querySelector('.film').classList.remove('show');  
    document.querySelector('.time').innerHTML='00:00';
    result='LOSS';
    counter=0;
    //setTimeout(distribute(),500);
   
}


function distribute() {
var mmjSelect=[];
var mmj=mm.slice();



    for (var n=0; n<6;n++) {

        m=mmj.length;
        j = Math.random()*m;
        k = Math.floor(j);
    
        p = mmj[k];
    
        mmjSelect.push(p);
        mmj.splice(k,1);
    };
    
    
    var mmjSelect = mmjSelect.concat(mmjSelect); //удваиваем массив с выбранными эмоджи, чтобы каждой было по паре и всего 12
    
    var mmjSelectShuffled = shuffle(mmjSelect); // перемещиваем в случайном порядке
    
    
    var backCards=document.querySelectorAll(".emo"); // выбираем все divы для вставления эмоджи
    var ll = backCards.length;
    
    for (var kk=0; kk<ll;kk++) {
        emo[kk]=backCards[kk];
        emo[kk].innerHTML = mmjSelectShuffled[kk];
    };


}
