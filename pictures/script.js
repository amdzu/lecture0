var nMax=1000000000, delay=1500, n=-1;
const pictures = document.querySelectorAll(".grid-item");

var endButton = document.querySelector('.btn');
var shuffleButton=document.getElementById('shuffle');
var picWordSwitchButton=document.getElementById('picWordSwitch');
picWordSwitchButton.addEventListener('click',picsOrWords);
shuffleButton.addEventListener('click',mix);
endButton.addEventListener('click', showPictures);
var buttonText=document.querySelector('.warn');
var selind1 = document.getElementById("delay");
var file = document.getElementById('file');
var menu = document.querySelector('.menu');
var h1 = document.querySelector('h1');
var radioValue=1;


var str = "/";

var folder = 'RAN1/';
var words=[];
var intervalID;
var words1=['класс','стол','рубль','кровь','текст','врач','круг','мозг','дождь','храм','крик','смех','спорт','хлеб','грязь','шерсть','мышь','корм','дверь','снег','друг','свет','страх','знак'];
var words2=['вопрос','земля','книга','школьник','стена','сердце','солнце','корабль','спина','карта','старик','праздник','сцена','цветок','остров','кухня','птица','игра','стекло','трава','завтрак','плечо','кресло','трубка'];
var words3=['женщина','мужчина','профессор','подруга','чтение','лестница','картина','продавец','игрушки','лекарства','охранник','доставка','ноутбук','вертолёт','принцесса','строитель','космонавт','колбаса','корзина','лампочка','конфета','стадион','бутерброд','скамейка'];
var words4=['большой','красный','низкий','длинный','пустой','бедный','острый','круглый','старший','твердый','смешной','мокрый','сладкий','громкий','бледый','старый','свежий','светлый','верхний','узкий','строгий','полный','младший','грязный'];

var picWordSwitch=1; // 1-pics',' 2-words	

document.getElementById('RAN1').addEventListener('change',fillWords);
document.getElementById('RAN2').addEventListener('change',fillWords);
document.getElementById('RAN3').addEventListener('change',fillWords);
document.getElementById('RAN4').addEventListener('change',fillWords);
//document.getElementById('RAN3').addEventListener('change',fillWords);

fillWords();

function fillWords() {
words.splice(0);
radioValue=document.querySelector('input[name="ran"]:checked').value;

if (radioValue==1) {
	for (var i=0; i<words1.length;i++) {words.push(words1[i]);};
}
if (radioValue==2) {
		for (var j=0; j<words2.length;j++) {words.push(words2[j]);};
}
if (radioValue==3) {
		for (var k=0; k<words3.length;k++) {words.push(words3[k]);};
}
if (radioValue==4) {
		for (var m=0; m<words4.length;m++) {words.push(words4[m]);};
}
}




function picsOrWords () {
if (picWordSwitch==1) {picWordSwitch=2; picWordSwitchButton.innerHTML='Показать картинки';}
else if (picWordSwitch==2) {picWordSwitch=1; picWordSwitchButton.innerHTML='Показать слова';}

}

function mix() {
	shuffle(words);
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
words=imported[0].split(',');
//textsC3=imported[2].split(',');



  };

  reader.onerror = function() {
    console.log(reader.error);
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


function pause() {

clearInterval(intervalID);

endButton.innerHTML='Старт';
endButton.addEventListener('click',showPictures);
endButton.removeEventListener('click',pause);
picWordSwitchButton.disabled=false;
shuffleButton.disabled=false;
selind1.disabled=false;
file.disabled=false;
menu.classList.remove('menu-hidden');
h1.classList.remove('fadeoutSlow');

}


function showPictures() {
radioValue=document.querySelector('input[name="ran"]:checked').value;

folder='RAN'+radioValue+str;
menu.classList.add('menu-hidden');
endButton.innerHTML='Пауза';
endButton.removeEventListener('click',showPictures);
endButton.addEventListener('click',pause);
picWordSwitchButton.disabled=true;
shuffleButton.disabled=true;
selind1.disabled=true;
file.disabled=true;
h1.classList.add('fadeoutSlow');


	intervalID=setInterval(
	function(){	//Начало интервальной функции
		n++;
		if(n > pictures.length-1) {
			pictures[n-1].classList.remove('fadein');
	 		pictures[n-1].classList.add('fadeout');
			clearInterval(intervalID);
			n=-1;
			endButton.addEventListener('click',showPictures);
			endButton.removeEventListener('click',pause);
			endButton.innerHTML='Старт';
			picWordSwitchButton.disabled=false;
			shuffleButton.disabled=false;
			selind1.disabled=false;
			file.disabled=false;
			menu.classList.remove('menu-hidden');
			h1.classList.remove('fadeoutSlow');
			return n;
			}
	if(picWordSwitch==1) {
	pictures[n].innerHTML="";
	pictures[n].style.backgroundImage = "url('"+folder+(n+1)+".png')";
	}
	if(picWordSwitch==2) {







		pictures[n].innerHTML=words[n];
		pictures[n].style.backgroundImage = 'none';
	}
	 pictures[n].classList.remove('invisible');
	 pictures[n].classList.add('fadein');

	 if (n>0) {
 		pictures[n-1].classList.remove('fadein');
	 pictures[n-1].classList.add('fadeout');
	 }
	 	

		if(n > pictures.length) {
			n=-1;
			return n;
				 clearInterval(intervalID);

			}

		}, delay); // Конец интервальной функции

	for (var i=0;i<pictures.length;i++ ) {
		pictures[i].classList.remove('fadeout');
		 pictures[i].classList.add('invisible');
	}
	//n=-1;
	return n;
}


function getData() {
     // получаем индекс выбранного элемента
   var selind = document.getElementById("delay").options.selectedIndex;
   var txt= document.getElementById("delay").options[selind].text;
   var val= document.getElementById("delay").options[selind].value;
   delay=parseInt(val);
  }




  //clearInterval(intervalID); 
