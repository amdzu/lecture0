'use strict';



var result='LOSS';
var counter=0;
var timerID;
var timeoutID;

var time = new Date();

var gameField = document.querySelector('.gameField');
var turned;
var audio;

var emo = [];
var foundMistake;
var fromFile;



/*Превые 7 слов - с ошибками!!!!*/
//var mm = ['Солажение','пдаение','обсуджеени','предсавтление','осевщение','Загдляение','Вдоховнение','Сожаление','представление','приготовление','Заглядение','падение','обсуждение','Отвращение','освещение','превращение','Свечение','получение','вручение','Вдохновение']; 


var mm=['Непричлиный','непросунвшийся','неподибимый','негопода','Непринзанный','Невыпричный','пнеростой','неприличный','непроснувшийся','непобедимый','непогода','непризнанный','непривычный','непростой','непослушный','Неприятный','неподвижный','Непридуманный','непрочный','Непригодный'];


var nMistakes=7;



var err=[];

for (var iii=0;iii<nMistakes;iii++) { 
    err[iii]=mm[iii];
    };


var mmj=[];
var mmjSelect =[];

var m,j,k,p;


start();



function start() {



var monster = document.getElementById("monster");

monster.addEventListener("click",clickHandlerMonster);




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

}


function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {


    var res = reader.result;

    fromFile = res.replace(/(\r\n|\n|\r)/gm,":");

    fromFile = fromFile.replace(/\s+/g," ");
    console.log(fromFile);

console.log(fromFile);

var imported=fromFile.split(':');

//textsC1=imported[0].split(',');
mm=imported[1].split(',');
//textsC3=imported[2].split(',');


for (var iii=0;iii<nMistakes;iii++) { 
    err[iii]=mm[iii];
    };

start();


  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}




function clickHandlerMonster() {
    this.classList.remove("show");
    audio.pause();
}






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


                    	//console.log("green[i]",green[i],i);

                        red[i].classList.remove('red');
                        /*cardList[i].addEventListener('click',clickHandler);*/
                    };





            this.classList.toggle('turn'); //перевернули карту

            var text2=this.querySelector(".emo").innerHTML; //проверяем, есть ли ошибка в тексте

            foundMistake=false;

            console.log("text2 ",text2);

            for (var k=0;k<nMistakes;k++) {

          //  if (err[k].includes(text2)) { //Берем не все содержимое карточки, а выбрасываем 4 символа слева, чтобы номер карточки не мешал
            if (err[k]==text2) { 

            	foundMistake=true;

            	console.log("k ",k," text2.slice(4)",text2.slice(4), " err[k] ",err[k], " text2 ", text2);

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

console.log('mm= ',mm);

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