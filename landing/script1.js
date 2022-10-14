'use strict';

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

textsC1=imported[0].split(',');
textsC2=imported[1].split(',');
textsC3=imported[2].split(',');


console.log('textsC1   ',textsC1,' |||  ');
console.log('textsC2   ',textsC2,' |||  ');
console.log('textsC3   ',textsC3,' |||  ');


start();


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

function start() {

        var c1=document.getElementById('c1');
        var c2=document.getElementById('c2');
        var c3=document.getElementById('c3');



c1.innerHTML=textsC1[0];
c2.innerHTML=textsC2[0];
c3.innerHTML=textsC3[0];

c1.addEventListener('click', clickHandlerC1);

c2.addEventListener('click', clickHandlerC2);

c3.addEventListener('click', clickHandlerC3);

}

function clickHandlerC1() { //начало функции обработки клика по карте

var i=textsC1.length-1;

j=j+1;
if(j>i) {j=0;};
txt1=textsC1[j];

    console.log('j= ',j);

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




var txt1, txt2, txt3, j=0, l=0, m=0;  

var fromFile;

var textsC1 =['вы','вос','вс','воз','вз'];  
var textsC2 =['пл','сов','клад','кид','дел','нюх','колд'];          
var textsC3 =['ёвывать','овывать','ивывать','евывать','ывывать'];


var controlCounter=0, control1Counter=0;
var gameField = document.querySelector('.gameField');
var control=document.getElementById('control');
var control1=document.getElementById('control-1');

control.addEventListener('click',controlHandler);

control1.addEventListener('click',control1Handler);


function controlHandler() {

if (control1Counter==1) {
c1.classList.remove('mL1');
c2.classList.remove('mL1');
c3.classList.remove('mR1');
c1.classList.remove('mLBack');
c2.classList.remove('mLBack');
c3.classList.remove('mRBack');
}


controlCounter++;

if (controlCounter==1) {

	control1.disabled=true;
}

if (controlCounter==2) {

	control1.disabled=false;
}


console.log(controlCounter);

if(controlCounter==1) {
c1.classList.add('mL1');
c2.classList.add('mR1');
c3.classList.add('mR1');

control.classList.remove('expand');
control.classList.add('shrink');

}
if(controlCounter==2) {
c1.classList.add('mLBack');
c2.classList.add('mRBack');
c3.classList.add('mRBack');

setTimeout(function() {
c1.classList.remove('mL1');
c2.classList.remove('mR1');
c3.classList.remove('mR1');
c1.classList.remove('mLBack');
c2.classList.remove('mRBack');
c3.classList.remove('mRBack');
}, 500);
control.classList.add('expand');
control.classList.remove('shrink');
controlCounter=0;
}


}


function control1Handler() {


if (controlCounter==1) {
c1.classList.remove('mL1');
c2.classList.remove('mR1');
c3.classList.remove('mR1');
c1.classList.remove('mLBack');
c2.classList.remove('mRBack');
c3.classList.remove('mRBack');
}




control1Counter++;

if (control1Counter==1) {

	control.disabled=true;
}

if (control1Counter==2) {

	control.disabled=false;
}



console.log(control1Counter);

if(control1Counter==1) {
c1.classList.add('mL1');
c2.classList.add('mL1');
c3.classList.add('mR1');
control1.classList.remove('expand');
control1.classList.add('shrink');

}
if(control1Counter==2) {
c1.classList.add('mLBack');
c2.classList.add('mLBack');
c3.classList.add('mRBack');

setTimeout(function() {
c1.classList.remove('mL1');
c2.classList.remove('mL1');
c3.classList.remove('mR1');
c1.classList.remove('mLBack');
c2.classList.remove('mLBack');
c3.classList.remove('mRBack');
}, 500);
control1.classList.add('expand');
control1.classList.remove('shrink');
control1Counter=0;
}


}

start();




