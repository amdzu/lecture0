'use strict';


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

/*var mm = ['Привет, я умный шимпанзе!','Добрый день, мы полосатые змейки!','Доброе утро, я гордая гусеница!','Ха-ха-ха, ты попалась. Я - дракон!','Здравствуй, я огромный кит!','Я дракон, ты попалась!','Осторожно, это я - сонный ленивец!','Эй, не провались в болото. Я белая цапля!','Узнала меня? Я зубастая акула!','Не подходи близко, я питон!','Угощайся вкусными листьями, я коала!','Хи-хи-хи, я дракончик!']; */
/*var mm = ['горошек', 'волосы', 'сорока', 'дорога', 'молоко', 'огород', 'ворона', 'полоска', 'творог','дракон','дракон','дракон'];*/
/*var mm = ['Здравствуйте, я рыбка с голубыми глазами','Привет, я гигантская улитка','Доброе утро, я улыбчивый крокодил','Ха-ха-ха, ты попалась. Я - дракон!','Рады вас видеть, мы скользкие ящерицы','Я дракон, ты попалась!','Спокойной ночи, я задумчивый головастик','Тише! Я черный шуршащий уж','Здравствуйте, я стремительная саламандра!','Приятно познакомиться, меня зовут каракатица','Добрый день! Я прыгучий кузнечик','Привет! Я морская свинка!']; */

/*var mm =['думала', 'думали', 'звала', 'звали', 'была', 'были', 'завтракал', 'завтракали', 'сказал', 'сказали', 'дракон', 'дракон'];*/

/*var mm =['горошек', 'ворота', 'ворона', 'половина', 'болото', 'молоко', 'корова', 'дорога', 'подсказка', 'сказка', 'чудовище','чудовище'];
*/

/*var mm =['оставил', 'держите', 'подала', 'нарезала', 'знаю', 'положила', 'осталось', 'поддержка', 'сдаваться', 'порез', 'чудовище','чудовище'];*/

/*var mm =['остановка', 'чудовище', 'положила', 'ложка', 'нарезала', 'чудовище', 'знакомый', 'поставила','проголодался', 'половина', 'морошка', 'порошок']; */

/*var mm =['написала','шепнула', 'накопила', 'закрыла', 'повела', 'cказала', 'зевнула', 'опустила', 'пробежала', 'ахнула', 'решила', 'чудовище']; */

/*var mm =['Помыл', 'перемыл', 'Положил', 'переложил', 'Подумал', 'передумал', 'Пошла', 'перешла', 'Погрызли', 'перегрызли','чудовище','чудовище'];*/

//var mm = ['ходил','водил','спутник','правильный','доставка','сказал','выход','поводок','спутал','правда','чудовище','чудовище'];


var mm = ['Сожаление','представление','приготовление','Заглядение','падение','обсуждение','Отвращение','освещение','превращение','Свечение','получение','вручение','чудовище','чудовище'];
 


var mmj=[];
var mmjSelect =[];

var m,j,k,p,l;
var cardList,monster,endButton,fromFile;


start();


function start() {

monster = document.getElementById("monster");

monster.addEventListener("click",clickHandlerMonster);





distribute();


//Обработка клика по карте

        cardList = document.querySelectorAll(".cardWrapper");
        l = cardList.length;

        for (var i=0;i<l;i++) {

            //var crd = cardList[i];

            cardList[i].addEventListener('click', clickHandler);
        };


// Обработка клика по кнопке завершения игры

endButton = document.querySelector('.btn');

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
mm=imported[0].split(',');
//textsC3=imported[2].split(',');



start();


  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}












function clickHandler() { //начало функции обработки клика по карте

        console.log('CLICK!!!');
            startTimer();


            this.classList.toggle('turn'); //перевернули карту

            var text2=this.querySelector(".emo").innerHTML;

            if (text2.includes("чудовище")) {



                
                turned = gameField.querySelectorAll(".turn"); //поиск перевернутых карт
                var tl = turned.length;

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



                    document.querySelector('.warn').innerHTML='НОВАЯ ИГРА';
                    document.querySelector('.film').classList.add('show');
                    document.querySelector('.result').classList.add('show');

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

            if (green==10) {
                
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

    for (var i=0;i<l;i++) {
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



    for (var n=0; n<12;n++) {

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

function clickHandlerMonster() {
    this.classList.remove("show");
    audio.pause();
}