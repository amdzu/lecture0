'use strict';



function start() {

        var c1=document.getElementById('c1');
        var c2=document.getElementById('c2');
        var cL=document.getElementById('cL');
        var cR=document.getElementById('cR');

if (textsC1[0] == "ы") {c1.innerHTML="э"; }
else {
c1.innerHTML=textsC1[0]; }

c1.innerHTML=textsC1[0];
c2.innerHTML=textsC2[0];    

var control = document.getElementById('control');
control.addEventListener('click', clickmeHandler);
}


function clickmeHandler() {
clickCounter++;

if (clickCounter==4) {

//animalCounter=getRandomInt(20);

//animalCounter++;
	
clickHandlerC1();
if (animalCounter==1) {
document.getElementById("pusheenL").src="images/rhino_small2.gif";
document.getElementById("pusheenR").src="images/rhino2_small2.gif";
}
if (animalCounter==2) {
document.getElementById("pusheenL").src="images/yakL.gif";
document.getElementById("pusheenR").src="images/yakR.gif";
}
if (animalCounter==3) {
document.getElementById("pusheenL").src="images/lionL.gif";
document.getElementById("pusheenR").src="images/lionR.gif";
}
if (animalCounter==4) {
document.getElementById("pusheenL").src="images/monkeyL.gif";
document.getElementById("pusheenR").src="images/monkeyR.gif";
}
if (animalCounter==5) {
document.getElementById("pusheenL").src="images/zebraL.gif";
document.getElementById("pusheenR").src="images/zebraR.gif";
}
if (animalCounter==6) {
document.getElementById("pusheenL").src="images/ramL.gif";
document.getElementById("pusheenR").src="images/ramR.gif";
}
if (animalCounter==7) {
document.getElementById("pusheenL").src="images/zebraL.gif";
document.getElementById("pusheenR").src="images/zebraR.gif";
}
if (animalCounter==8) {
document.getElementById("pusheenL").src="images/elephantL.gif";
document.getElementById("pusheenR").src="images/elephantR.gif";
}
if (animalCounter==9) {
document.getElementById("pusheenL").src="images/gorillaL.gif";
document.getElementById("pusheenR").src="images/gorillaR.gif";
}
if (animalCounter==10) {
document.getElementById("pusheenL").src="images/leopardL.gif";
document.getElementById("pusheenR").src="images/leopardR.gif";
}
if (animalCounter==11) {
document.getElementById("pusheenL").src="images/bullL.gif";
document.getElementById("pusheenR").src="images/bullR.gif";
}
if (animalCounter==12) {
document.getElementById("pusheenL").src="images/horseL.gif";
document.getElementById("pusheenR").src="images/horseR.gif";
}
if (animalCounter==13) {
document.getElementById("pusheenL").src="images/lamaL.gif";
document.getElementById("pusheenR").src="images/lamaR.gif";
}
if (animalCounter==14) {
document.getElementById("pusheenL").src="images/donkeyL.gif";
document.getElementById("pusheenR").src="images/donkeyR.gif";
}
if (animalCounter==15) {
document.getElementById("pusheenL").src="images/ostrichL.gif";
document.getElementById("pusheenR").src="images/ostrichR.gif";
}
if (animalCounter==16) {
document.getElementById("pusheenL").src="images/sheepL.gif";
document.getElementById("pusheenR").src="images/sheepR.gif";
}

if (animalCounter==17) {
document.getElementById("pusheenL").src="images/cowL.gif";
document.getElementById("pusheenR").src="images/cowR.gif";
}
if (animalCounter==18) {
document.getElementById("pusheenL").src="images/buffaloL.gif";
document.getElementById("pusheenR").src="images/buffaloR.gif";
}
if (animalCounter==19) {
document.getElementById("pusheenL").src="images/tigerL.gif";
document.getElementById("pusheenR").src="images/tigerR.gif";
animalCounter=0;
}


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



var txt1, txt2, txt3, j=0, l=0, m=0,  clickCounter=0, letterSet=1, animalCounter=0;

var fromFile;

var textsC2 =['б','в','г','д','ж','з','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ'];  
var textsC1 =['а','о','у','э','ы'];           


var gameField = document.querySelector('.gameField');


start();



