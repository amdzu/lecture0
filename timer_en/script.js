'use strict';
function readFile(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  
  reader.onload = function() {
    var res = reader.result;
    fromFile = res.replace(/(\r\n|\n|\r)/gm,":");
    fromFile = fromFile.replace(/\s+/g," ");
    imported=fromFile.split(':');

    mm0=imported[0].split(',');
    mm1=imported[1].split(',');
    mm2=imported[2].split(',');
    mm3=imported[3].split(',');
    mm4=imported[4].split(',');
    mm5=imported[5].split(',');
    mm6=imported[6].split(',');
    mm7=imported[7].split(',');
    mm8=imported[8].split(',');
    mm9=imported[9].split(',');
    mm10=imported[10].split(',');
    mm11=imported[11].split(',');
    mm12=imported[12].split(',');
    mm13=imported[13].split(',');
    mm14=imported[14].split(',');
    mm15=imported[15].split(',');
    console.log(imported);

var inputFile=document.querySelector('input').disabled=true;
document.getElementById("game").disabled = false;


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



//***РАСПРЕДЕЛЕНИЕ ТЕКСТА ПО КАРТАМ***********************************************************
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
   
    for (var kk=0; kk<ll;kk++) {
        down[kk]=downCards[kk];
        down[kk].innerHTML = mmjSelectShuffled[kk];
      //  console.log(emo[kk].innerHTML);
    };
    var topEmo = document.querySelector('.emo');

    var mmjForTop=shuffle(mmjSelectShuffled);

    topEmo.innerHTML=mmjForTop[0];
    //  topEmo.innerHTML=mm[0];
}
//******************************************************************************************




function start () { //********* start of function Start************
answer=false;


audio = new Audio('rhino.mp3');
audio1 = new Audio('success3.mp3');
audio3 = new Audio('tick.mp3');
//distribute(mm0); перенесем в startTimer
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

//********* end of function Start************





function startTimer() {  //Функция запуска управления таймером******************************************


getData();

document.getElementById("game").disabled = true;
document.getElementById("delay").disabled = true;
answer=false;
var timeOutDistribute =  setTimeout(function(){

        if (counter==0) {distribute(mm0);  console.log('distribute counter',counter);};
        if (counter==1) {distribute(mm1);console.log('distribute counter',counter);};
        if (counter==2) {distribute(mm2);console.log('distribute counter',counter);};
        if (counter==3) {distribute(mm3);console.log('distribute counter',counter);};
        if (counter==4) {distribute(mm4);console.log('distribute counter',counter);};
        if (counter==5) {distribute(mm5);console.log('distribute counter',counter);};

        if (counter==6) {distribute(mm6);  console.log('distribute counter',counter);};
        if (counter==7) {distribute(mm7);console.log('distribute counter',counter);};
        if (counter==8) {distribute(mm8);console.log('distribute counter',counter);};
        if (counter==9) {distribute(mm9);console.log('distribute counter',counter);};
        if (counter==10) {distribute(mm10);console.log('distribute counter',counter);};
        if (counter==11) {distribute(mm11);console.log('distribute counter',counter);};

        if (counter==12) {distribute(mm12);  console.log('distribute counter',counter);};
        if (counter==13) {distribute(mm13);console.log('distribute counter',counter);};
        if (counter==14) {distribute(mm14);console.log('distribute counter',counter);};
        if (counter==15) {distribute(mm15);console.log('distribute counter',counter);};

        if (counter==16) {distribute(mm0);  console.log('distribute counter',counter);};
        if (counter==17) {distribute(mm1);console.log('distribute counter',counter);};
        if (counter==18) {distribute(mm2);console.log('distribute counter',counter);};
        if (counter==19) {distribute(mm3);console.log('distribute counter',counter);};
        if (counter==20) {distribute(mm4);console.log('distribute counter',counter);};
        if (counter==21) {distribute(mm5);console.log('distribute counter',counter);};

        if (counter==22) {distribute(mm6);  console.log('distribute counter',counter);};
        if (counter==23) {distribute(mm7);console.log('distribute counter',counter);};
        if (counter==24) {distribute(mm8);console.log('distribute counter',counter);};
        if (counter==25) {distribute(mm9);console.log('distribute counter',counter);};
        if (counter==26) {distribute(mm10);console.log('distribute counter',counter);};
        if (counter==27) {distribute(mm11);console.log('distribute counter',counter);};

        if (counter==28) {distribute(mm12);  console.log('distribute counter',counter);};
        if (counter==29) {distribute(mm13);console.log('distribute counter',counter);};
        if (counter==30) {distribute(mm14);console.log('distribute counter',counter);};
        if (counter==31) {distribute(mm15);console.log('distribute counter',counter);};

},330);

  for (var l=0;l<cardsNumber;l++) {

  cards[l].addEventListener('click', checkAnswer);
};
                const time = new Date('August 19, 1975 23:15:30');
                var lBtm=bottomCards.length;
                console.log(bottomCards);

                        bottomCards[0].classList.add('none');
                        bottomCards[1].classList.add('none');
                        bottomCards[2].classList.add('none');
                        bottomCards[3].classList.add('none');
            
                   var timeoutIDtop=setTimeout(() => {
                       topCard.classList.remove('none');
                       timer.classList.add('none');
                        //остановка таймера через 8 сек
                    }, 400);


                    var delayTop=delay*2;
                    if (delayTop>=10) {
                      delayTop=delayTop-2;
                    } else if (delayTop==8) {
                      delayTop=7;
                    }
                    time.setSeconds(delayTop);
                    var seconds=time.getSeconds();
                    seconds=String(seconds);

   //                 alert("seconds =" + seconds + "delay = " + delay);
                    var timeS=seconds;
                //    var timer =document.querySelector('.time');
                    //timer.innerHTML=timeS;
    
    
                    timerID=setInterval(function(){ //запуск таймера
                        
                        time.setSeconds(time.getSeconds()-1);
                        var minutes = time.getMinutes();
                        var seconds = time.getSeconds();
                        var milliseconds = time.getMilliseconds();

                        if (seconds==delay) {
                            topCard.classList.add('none');
                            bottomCards[0].classList.remove('none');
                            bottomCards[1].classList.remove('none');
                            bottomCards[2].classList.remove('none');
                            bottomCards[3].classList.remove('none');
                                                   timer.classList.remove('none');

                      }
                        if (seconds==0) {
                              bottomCards[0].classList.add('none');
                              bottomCards[1].classList.add('none');
                              bottomCards[2].classList.add('none');
                              bottomCards[3].classList.add('none');
                              
                                                     timer.classList.add('none');
                                 console.log('!!!!  answer ',answer,' seconds=',seconds);

                              if (answer==false) {nRhinos++; rhinos.innerHTML=String(nRhinos); audio.play();};
                              console.log('answer ',answer);

                         //     timer.classList.remove('attention');
                          //    timer.classList.add('time');

                      }
                      if ((seconds < (delay+1) && seconds>=0) && milliseconds<900) {
                        seconds=String(seconds);
                        timeS=seconds;
                        

                   //     timer = document.querySelector('.time');

                        


                        timer.innerHTML=timeS;
                        audio3.play();
                      //  timer.classList.remove('time');
                      //  timer.classList.add('attention');
                      }
                    }, 1000);
    
                    timeoutID=setTimeout(() => {
                        
                        clearInterval(timerID); 
                        counter++;
                        console.log('startTimer counter = ',counter);
                        if (counter<32) {
                          console.log('startTimer counter = ',counter);
                          startTimer();
                        }
                        //остановка таймера через 8 сек
                    }, (delayTop)*1000); //HERE! was delay+3
    
}; //конец функции управления таймером*********************************************************************




function checkAnswer() { //ФУНКЦИЯ ПРОВЕРКИ ОТВЕТА*************************************************************
                          timer.classList.add('none');
                    clearInterval(timerID); 
                    clearTimeout(timeoutID);

                    
                   // var timer =document.querySelector('.time');
                    timer.innerHTML='0';

                        bottomCards[0].classList.add('none');
                        bottomCards[1].classList.add('none');
                        bottomCards[2].classList.add('none');
                        bottomCards[3].classList.add('none');
             


                             // timer.classList.remove('attention');
                            //  timer.classList.add('time');



      var inputFile=document.querySelector('input').disabled=true;

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

      if (answer==true) {nPeople++; people.innerHTML=String(nPeople);audio1.play();};
      if (answer==false) {nRhinos++; rhinos.innerHTML=String(nRhinos); audio.play();};

      console.log('textT ',textT, ' textDown', textDown,' answer ',answer);

                        counter++;
                        console.log('checkAnswer counter = ',counter);
                        if (counter<32) { 
                          startTimer();
                        }

                        if(counter==32) {
                    setTimeout(function(){
                    clearInterval(timerID);
                    clearTimeout(timeoutID);
                   /* document.querySelector('.win1').innerHTML='У';
                    document.querySelector('.win2').innerHTML='Р';
                    document.querySelector('.win3').innerHTML='А';
                    document.querySelector('.win4').innerHTML='!';
                    document.querySelector('.warn').innerHTML='НОВАЯ ИГРА';
                    document.querySelector('.film').classList.add('show');
                    document.querySelector('.message').classList.add('show1');
                    document.querySelector('.result').classList.add('show');*/                           
                },500);
                        };  
}  //КОНЕЦ ФУНКЦИи ПРОВЕРКИ ОТВЕТА*************************************************************




  function getData()
  {
     // получаем индекс выбранного элемента
     var selind = document.getElementById("delay").options.selectedIndex;
   var txt= document.getElementById("delay").options[selind].text;
   var val= document.getElementById("delay").options[selind].value;

   //alert("Теxt= "+ txt +" " + "Value= " + val);


   delay=parseInt(val);


  }







var fromFile,imported, counter,timerID,timeoutID,result,answer=false;
var mm,mm0,mm1,mm2,mm3,mm4,mm5,mm6,mm7,mm8,mm9,mm10,mm11,mm12,mm13,mm14,mm15,topWords;
var audio,audio1,audio3;
var nTopCard;
var emo = [];
var down=[];
var mmj=[];
var mmjSelect =[];
var m,j,k,p;
var topCards,topCardsNumber,cardsNumber,cards;
var nRhinos=0, nPeople=0;
var tDelay="5";
var delay=parseInt(tDelay);

var rhinos=document.querySelector('.countEnemy');
var people=document.querySelector('.countPlayer');
var timer=document.getElementById('clock');

rhinos.innerHTML=String(nRhinos);
people.innerHTML=String(nPeople);

nTopCard=-1;
counter=0;





mm0=['punch', 'pink', 'bunch', 'pinch'];
mm1=['давно','легко','быстро','мило'];
mm2=['трудно','страшно','чисто','сложно'];
mm3=['просто','темно','скоро','важно'];
mm4=['много','долго','сложно','быстро'];
mm5=['часто','важно','плохо','мало'];
mm6=['темно','долго','редко','много'];
mm7=['плохо','жарко','редко','страшно'];
mm8=['долго','плохо','просто','темно'];
mm9=['быстро','часто','темно','мало'];
mm10=['редко','низко','плохо','мало'];
mm11=['сложно','легко','мало','трудно'];
mm12=['скоро','много','легко','часто'];
mm13=['чисто','низко','сложно','скоро'];
mm14=['жарко','давно','быстро','плохо'];
mm15=['важно','легко','мало','часто'];



var topCard =document.querySelector('.top');
var bottomCards=document.querySelectorAll('.btm');

document.getElementById("game").disabled = false;


start();
