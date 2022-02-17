var nMax=1000000000, delay=1500, n=-1;
const pictures = document.querySelectorAll(".grid-item");

var endButton = document.querySelector('.btn');
var shuffleButton=document.getElementById('shuffle');
shuffleButton.addEventListener('click',mix);
endButton.addEventListener('click', showPictures);
var buttonText=document.querySelector('.warn');
var folder = 'RAN1/';
var words1=[];
var intervalID;
var words1=['класс','стол','рубль','кровь','текст','врач','круг','мозг','дождь','храм','крик','смех','спорт','хлеб','грязь','шерсть','мышь','корм','дверь','снег','друг','свет','страх','знак'];

var picWordSwitch=1;	


function mix() {
	shuffle(words1);
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
words1=imported[0].split(',');
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

}


function showPictures() {

endButton.innerHTML='Пауза';
endButton.removeEventListener('click',showPictures);
endButton.addEventListener('click',pause);


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
			return n;
			}
	if(picWordSwitch==1) {
	pictures[n].innerHTML="";
	pictures[n].style.backgroundImage = "url('"+folder+(n+1)+".png')";
	}
	if(picWordSwitch==2) {
		pictures[n].innerHTML=words1[n];
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
