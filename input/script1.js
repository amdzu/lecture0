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


//var textsC1 = ["ото","недо","пере","ото","наи","архи","полу"];   
//var textsC2 =["двиг","грож","прош","дел","клад","спраш","страш"];
//var textsC3 = ["ающая","ающий","ающее","ающие"];  


//var textsC1 = ['недо','пере','при','по'];
//var textsC2 =['дел','ед','пит','смотр','решён','напряж','удивл ','изумл','пораж','утомл','загад','украд'];
//var textsC3 =['анный','енный','ённый'];


var textsC1 =['ис','за','на','до','вы','вз','по','о'];
var textsC2 =['пуг','ход','дрож','шурш','вод','морг','груж','смех'];
var textsC3 =['алась','ающий','ывающий','нувший','енный','астый','ались','ала','али','ал'];



var gameField = document.querySelector('.gameField');

var input1 = document.getElementById('fname1');
var input2 = document.getElementById('fname2');
var input3 = document.getElementById('fname3');

//input1.value='ото,недо,пере,ото,наи,архи,полу';
//input2.value='двиг,грож,прош,дел,клад,спраш,страш';
//input3.value='ающая,ающий,ающее,ающие';

//input1.value='недо,пере,при,по';
//input2.value='дел,ед,пит,смотр,решён,напряж,удивл,изумл,пораж,утомл,загад,украд';
//input3.value='анный,енный,ённый';

input1.value='ис,за,на,до,вы,вз,по,о';
input2.value='пуг,ход,дрож,шурш,вод,морг,груж,смех';
input3.value='алась,ающий,ывающий,нувший,енный,астый,ались,ала,али,ал';



var word1 = input1.value;
textsC1=word1.split(',');

var word2 = input2.value;
textsC2=word2.split(',');

var word3 = input3.value;
textsC3=word3.split(',');





console.log(input1);

input1.addEventListener('change',inputHandler1);
input2.addEventListener('change',inputHandler2);
input3.addEventListener('change',inputHandler3);

function inputHandler1() {

word1 = input1.value;

textsC1=word1.split(',');

console.log('word1 ',word1);

}

function inputHandler2() {

word2 = input2.value;

textsC2=word2.split(',');

console.log('word2 ',word2);

}
function inputHandler3() {

word3 = input3.value;

textsC3=word3.split(',');

console.log('word3 ',word3);

}


//var textsC1 = ['При','Пере','пре','про','По']; 
//var textsC2 =['став', 'держ', 'дал', 'рез', 'знал', 'лож']
//var textsC3 = ['ав', 'ив',  'ув', 'яв', 'ев', 'ная', 'ную', 'ной', 'ном', 'ному', 'ный', 'ными', 'ных', 'ным', 'ными']



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