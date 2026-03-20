'use strict';


function changeImage() {
    var img = document.getElementById("rhino");
    var txt=document.getElementById("trhino");
    var img1 = document.getElementById("people");
    var txt1=document.getElementById("tpeople");








    if (img.src.includes("rhino.jpg")) {
        img.src = "people.jpg"; // замените "new-rhino.jpg" на путь к новой картинке
        txt.innerHTML="ЛЮДИ";


audio1 = new Audio('rhino.mp3');
audio = new Audio('success2.mp3');






    } else {
        img.src = "rhino.jpg"; // возвращаем исходную картинку, если нужно
        txt.innerHTML="НОСОРОГИ";
        audio = new Audio('rhino.mp3');
        audio1 = new Audio('success2.mp3');

    }

    if (img1.src.includes("people.jpg")) {
        img1.src = "rhino.jpg"; // замените "new-rhino.jpg" на путь к новой картинке
        txt1.innerHTML="НОСОРОГИ";
        audio1 = new Audio('rhino.mp3');
        audio = new Audio('success2.mp3');


    } else {
        img1.src = "people.jpg"; // возвращаем исходную картинку, если нужно
        txt1.innerHTML="ЛЮДИ";
        audio = new Audio('rhino.mp3');
        audio1 = new Audio('success2.mp3');

    }
}


    var img = document.getElementById("rhino");

    // Добавляем event listener для клика на изображение
    img.addEventListener("click", changeImage);
    var img1 = document.getElementById("people");

    // Добавляем event listener для клика на изображение
    img1.addEventListener("click", changeImage);












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

function normalizeWord(word) {
  if (word === undefined || word === null) {
    return '';
  }
  return String(word).replace(/^\uFEFF/, '').trim();
}

function parseRowWords(mm) {
  var forcedTop = '';
  var forcedTopCount = 0;
  var words = [];
  for (var i = 0; i < mm.length; i++) {
    var token = normalizeWord(mm[i]);
    if (token === '') continue;

    if (token.charAt(token.length - 1) === '*') {
      forcedTopCount++;
      token = normalizeWord(token.slice(0, -1));
      if (token !== '' && forcedTop === '') {
        forcedTop = token;
      }
    }

    if (token !== '') {
      words.push(token);
    }
  }
  if (forcedTopCount > 1) {
    console.warn('Multiple "*" markers in one row. Using the first marked word:', forcedTop, 'Row:', words.join(','));
  }
  return { words: words, forcedTop: forcedTop };
}



//***РАСПРЕДЕЛЕНИЕ ТЕКСТА ПО КАРТАМ***********************************************************
function distribute(mm) {
var parsed = parseRowWords(mm);
var mmj = parsed.words.slice();
if (mmj.length === 0) return;

var mmjSelect=[];
    var picks = Math.min(4, mmj.length);
    for (var n=0; n<picks; n++) {
        m=mmj.length;
        j = Math.random()*m;
        k = Math.floor(j);
        p = mmj[k];
        mmjSelect.push(p);
        mmj.splice(k,1);
    };

    if (parsed.forcedTop !== '' && mmjSelect.indexOf(parsed.forcedTop) === -1) {
      if (mmjSelect.length < 4) {
        mmjSelect.push(parsed.forcedTop);
      } else {
        mmjSelect[Math.floor(Math.random() * mmjSelect.length)] = parsed.forcedTop;
      }
    }

    var mmjSelectShuffled = shuffle(mmjSelect.slice()); // перемещиваем в случайном порядке
    var downCards=document.querySelectorAll(".down"); // выбираем все divы для вставления эмоджи
    var ll = downCards.length;
   
    for (var kk=0; kk<ll;kk++) {
        down[kk]=downCards[kk];
        down[kk].innerHTML = mmjSelectShuffled[kk] !== undefined ? mmjSelectShuffled[kk] : '';
      //  console.log(emo[kk].innerHTML);
    };
    var topEmo = document.querySelector('.emo');

    if (parsed.forcedTop !== '') {
      topEmo.innerHTML = parsed.forcedTop;
    } else {
      var mmjForTop=shuffle(mmjSelectShuffled.slice());
      topEmo.innerHTML=mmjForTop[0];
    }
    //  topEmo.innerHTML=mm[0];
}
//******************************************************************************************




function start () { //********* start of function Start************
answer=false;


//audio = new Audio('rhino.mp3');
//audio1 = new Audio('success.mp3');
//audio3 = new Audio('tick.mp3');






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






// ====== PLAY / PAUSE with robust resume ======
function toggleGame() {
  const btnLabel = document.querySelector('#game .warn');
  // First start
  if ((timerID == null || timerID === undefined) && counter === 0 && !isPaused && remainingEnd===0) {
    startTimer();
    if (btnLabel) btnLabel.textContent = 'PAUSE';
    return;
  }
  // Pause
  if (!isPaused) {
    if (timerID) clearInterval(timerID);
    if (timeoutID) clearTimeout(timeoutID);
    if (timeoutIDtop) clearTimeout(timeoutIDtop);
    timerID = null;
    isPaused = true;
    if (btnLabel) btnLabel.textContent = 'PLAY';
    // allow changing time while paused
    var d = document.getElementById('delay'); if (d) d.disabled = false;
    // disable clicks on cards
    for (var l=0; l<cardsNumber; l++) { cards[l].removeEventListener('click', checkAnswer); }
    return;
  }
  // Resume
  isPaused = false;
  if (btnLabel) btnLabel.textContent = 'PAUSE';
  var d = document.getElementById('delay'); if (d) d.disabled = true;
  for (var l=0; l<cardsNumber; l++) { cards[l].addEventListener('click', checkAnswer); }
  if (remainingEnd > 0) {
    timerID = setInterval(tick, 1000);
  }
}

// one-second tick using integer countdowns
function tick() {
  if (remainingEnd <= 0) return;
  remainingEnd -= 1;

  // Reveal bottom at threshold
  if (!isBottomShown && remainingEnd == delayRound) {
    topCard.classList.add('none');
    bottomCards[0].classList.remove('none');
    bottomCards[1].classList.remove('none');
    bottomCards[2].classList.remove('none');
    bottomCards[3].classList.remove('none');
    timer.classList.remove('none');
    isBottomShown = true;
  }

  // Draw on last seconds window
  if ((remainingEnd < (delay + 1) && remainingEnd >= 0)) {
    timer.innerHTML = String(remainingEnd);
    if (typeof audio3 !== 'undefined' && audio3 && audio3.play) { try { audio3.play(); } catch(e){} }
  }

  // End of round
  if (remainingEnd == 0) {
    bottomCards[0].classList.add('none');
    bottomCards[1].classList.add('none');
    bottomCards[2].classList.add('none');
    bottomCards[3].classList.add('none');
    timer.classList.add('none');
    if (answer === false) { nRhinos++; rhinos.innerHTML = String(nRhinos); if (typeof audio !== 'undefined' && audio && audio.play) { try { audio.play(); } catch(e){} } }
    isBottomShown = false;
    roundEnd();
  }
}

// Unified round end
function roundEnd() {
  if (timerID) clearInterval(timerID);
  timerID = null;
  counter++;
  if (counter < 32) {
    startTimer();
  }
}
function startTimer() {  //Функция запуска управления таймером******************************************


    var img = document.getElementById("rhino");
    img.removeEventListener("click", changeImage);
    var img1 = document.getElementById("people");
    img1.removeEventListener("click", changeImage); //Убрали возможность выбора игры носорогами после начала игры



getData();

document.querySelector('#game .warn') && (document.querySelector('#game .warn').textContent='PAUSE');
document.getElementById('delay').disabled = true;
isPaused=false;
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
            
                   timeoutIDtop = setTimeout(() => {
                       topCard.classList.remove('none');
                       timer.classList.add('none');
                        //остановка таймера через 8 сек
                    }, 400);


                    delayRound = delay; var delayTop=delayRound*2;
                    if (delayTop>=10) {
                      delayTop=delayTop-2;
                    } else if (delayTop==8) {
                      delayTop=7;
                    }
                    isBottomShown = false;
remainingEnd = delayTop;
// reveal bottom when remainingEnd == delay
// Start ticking
if (timerID) clearInterval(timerID);
timerID = setInterval(tick, 1000);
    
                    // timeout removed — handled by integer tick //HERE! was delay+3
    
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







var fromFile,imported, counter,timerID,timeoutID,timeoutIDtop,result,answer=false,isPaused=false,isBottomShown=false,remainingEnd=0,remainingToBottom=0;
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
// Captured per-round delay values to avoid mid-round changes breaking logic
var delayRound=0;
var delayTopRound=0;

var rhinos=document.querySelector('.countEnemy');
var people=document.querySelector('.countPlayer');
var timer=document.getElementById('clock');

rhinos.innerHTML=String(nRhinos);
people.innerHTML=String(nPeople);

nTopCard=-1;
counter=0;


audio = new Audio('rhino.mp3');
audio1 = new Audio('success2.mp3');
audio3 = new Audio('tick.mp3');



mm0=['низко','важно','мило','темно'];
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
