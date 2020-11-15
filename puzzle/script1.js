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

var mm = ['Привет, я умный шимпанзе!','Добрый день, мы полосатые змейки!','Доброе утро, я гордая гусеница!','Ха-ха-ха, ты попалась. Я - дракон!','Здравствуй, я огромный кит!','Я дракон, ты попалась!','Осторожно, это я - сонный ленивец!','Эй, не провались в болото. Я белая цапля!','Узнала меня? Я зубастая акула!','Не подходи близко, я питон!','Угощайся вкусными листьями, я коала!','Хи-хи-хи, я дракончик!']; 

/*var mm = ['Здравствуйте, я рыбка с голубыми глазами','Привет, я гигантская улитка','Доброе утро, я улыбчивый крокодил','Ха-ха-ха, ты попалась. Я - дракон!','Рады вас видеть, мы скользкие ящерицы','Я дракон, ты попалась!','Спокойной ночи, я задумчивый головастик','Тише! Я черный шуршащий уж','Здравствуйте, я стремительная саламандра!','Приятно познакомиться, меня зовут каракатица','Добрый день! Я прыгучий кузнечик','Привет! Я морская свинка!']; */
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


            this.classList.toggle('turn'); //перевернули карту



            } //конец функции обработки клика





function stopGame() { //функция обработки клика по кнопке завершения игры

    for (i=0;i<l;i++) {
        cardList[i].classList.remove('turn', 'fix', 'red', 'green');
        cardList[i].addEventListener('click',clickHandler);
    };

    document.querySelector('.result').classList.remove('show');
    document.querySelector('.film').classList.remove('show');  
    document.querySelector('.message').classList.remove('show1');  
    document.querySelector('.time').innerHTML='00:00';
    result='LOSS';
    counter=0;
    //setTimeout(distribute(),500);
   
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
    
    
    //var mmjSelect = mmjSelect.concat(mmjSelect); //удваиваем массив с выбранными эмоджи, чтобы каждой было по паре и всего 12
    
    var mmjSelectShuffled = shuffle(mmjSelect); // перемещиваем в случайном порядке
    
    
    var backCards=document.querySelectorAll(".emo"); // выбираем все divы для вставления эмоджи
    var ll = backCards.length;
    
    for (var kk=0; kk<ll;kk++) {
        emo[kk]=backCards[kk];
        emo[kk].innerHTML = mmjSelectShuffled[kk];
    };


}
