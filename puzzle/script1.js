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

var txt1, txt2, txt3, j=0, l=0, m=0;  


var gameField = document.querySelector('.gameField');




var textsC1 = ['При','Пере','пре','про','По']; 
var textsC2 =['став', 'держ', 'дал', 'рез', 'знал', 'лож']
var textsC3 = ['ав', 'ив',  'ув', 'яв', 'ев', 'ная', 'ную', 'ной', 'ном', 'ному', 'ный', 'ными', 'ных', 'ным', 'ными']



//c1.innerHTML=textsC1[0];
//c2.innerHTML=textsC2[0];
//c3.innerHTML=textsC3[0];

//Обработка клика по карте

  //      var cardList = document.querySelectorAll(".cardWrapper");
  //      var l = cardList.length;

 //       for (var i=0;i<l;i++) {

//            cardList[i].addEventListener('click', clickHandler(i));
 //       };



        var c1=document.getElementById('c1');
        var c2=document.getElementById('c2');
        var c3=document.getElementById('c3');

c1.addEventListener('click', clickHandlerC1);

c2.addEventListener('click', clickHandlerC2);

c3.addEventListener('click', clickHandlerC3);

function clickHandlerC1() { //начало функции обработки клика по карте

var i=textsC1.length-1;

j=j+1;
if(j>i) {j=0;};
txt1=textsC1[j];

    console.log(j);

    c1.innerHTML=txt1; 

            } //конец функции обработки клика


function clickHandlerC2() { //начало функции обработки клика по карте

var i=textsC2.length-1;

l=l+1;
if(l>i) {l=0;};
txt2=textsC2[l];

    console.log(l);

    c2.innerHTML=txt2; 

            } //конец функции обработки клика

function clickHandlerC3() { //начало функции обработки клика по карте

var i=textsC3.length-1;

m=m+1;
if(m>i) {m=0;};
txt3=textsC3[m];

    console.log(m);

    c3.innerHTML=txt3; 

            } //конец функции обработки клика