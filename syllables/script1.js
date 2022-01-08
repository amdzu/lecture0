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
        var cL=document.getElementById('cL');
        var cR=document.getElementById('cR');
  //      var clickme=document.getElementById('clickme');



if (textsC1[0] == "ы") {c1.innerHTML="э"; }
else {
c1.innerHTML=textsC1[0]; }



c1.innerHTML=textsC1[0];
c2.innerHTML=textsC2[0];    






//c1.addEventListener('click', clickHandlerC1);

//c2.addEventListener('click', clickHandlerC2);



//clickme.addEventListener('click', clickmeHandler);

var control = document.getElementById('control');
control.addEventListener('click', clickmeHandler);


//document.addEventListener('keydown', clickmeHandler);
}


function clickmeHandler() {
clickCounter++;

if (clickCounter==4) {
clickHandlerC1();
//clickHandlerC2();
document.getElementById("pusheenL").src="images/rhino.gif";
document.getElementById("pusheenR").src="images/rhino2.gif";

c1.classList.remove("mR3");
c2.classList.remove("mL3");
c1.classList.add("fadein");
c2.classList.add("fadein");

cL.classList.remove("mR3");
cR.classList.remove("mL3");
//cL.classList.add("fadein");
//cR.classList.add("fadein");
cL.classList.add("transparent");
cR.classList.add("transparent");
} 

if (clickCounter==5) {
clickCounter=1;
c1.classList.remove("fadein");
c2.classList.remove("fadein");
c1.classList.add("mR1");
c2.classList.add("mL1");
  
cL.classList.remove("fadein");
cR.classList.remove("fadein");
cL.classList.add("mR1");
cR.classList.add("mL1");

} 

if (clickCounter==1) {
c1.classList.add("mR1");
c2.classList.add("mL1");
cL.classList.remove("transparent");
cR.classList.remove("transparent");
cL.classList.add("mR1");
cR.classList.add("mL1");
}



if (clickCounter==2) {
c1.classList.add("mR2");
c2.classList.add("mL2");
cL.classList.add("mR2");
cR.classList.add("mL2");
}
  



if (clickCounter==3) {
c1.classList.add("mR3");
c2.classList.add("mL3");
c1.classList.remove("mR1");
c2.classList.remove("mL1");
c1.classList.remove("mR2");
c2.classList.remove("mL2");

cL.classList.add("mR3");
cR.classList.add("mL3");
cL.classList.remove("mR1");
cR.classList.remove("mL1");
cL.classList.remove("mR2");
cR.classList.remove("mL2");

}
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function clickHandlerC1() { 

var c1L=textsC1.length;
var c2L=textsC2.length;

var c1Num=getRandomInt(c1L);
var c2Num=getRandomInt(c2L);

if (textsC1[c1Num] == "ы") {c1.innerHTML="э"; }
else {
c1.innerHTML=textsC1[c1Num]; }



c2.innerHTML=textsC2[c2Num];

           } 

function getData() {
 //document.getElementById('delay').disabled=true;
    var selind = document.getElementById("delay").options.selectedIndex;
   var txt= document.getElementById("delay").options[selind].text;
   var val= document.getElementById("delay").options[selind].value;
   letterSet=parseInt(val);

if (letterSet==1) {
textsC2 =['б','в','г','д','ж','з','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ','й'];  
textsC1 =['а','о','у','э','ы'];           
}
if (letterSet==2) {
textsC1 =['б','в','г','д','ж','з','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'];  
textsC2 =['а','о','у','э','ы'];           
}
if (letterSet==3) {
textsC2 =['б','в','г','д','ж','з','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ','й'];  
textsC1 =['е','ю','я','ё','и'];           
}
if (letterSet==4) {
textsC1 =['б','в','г','д','ж','з','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'];  
textsC2 =['е','ю','я','ё','и'];           
}
if (letterSet==5) {
textsC1 =['б','в','г','д','ж','з','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'];  
textsC2 =['е','ю','я','ё','и','а','о','у','э','ы'];           
}

   start();
}



var txt1, txt2, txt3, j=0, l=0, m=0,  clickCounter=0, letterSet=1;

var fromFile;

var textsC2 =['б','в','г','д','ж','з','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'];  
var textsC1 =['а','о','у','э','ы'];           


var gameField = document.querySelector('.gameField');


start();



