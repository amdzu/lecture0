'use strict';

    
var buttonsPm=document.querySelectorAll('.cover');
//var e;

var buttonsReadMore=document.querySelectorAll('.readMoreBtn');


for (let i = 0; i < buttonsPm.length; i++) {
  buttonsPm[i].addEventListener("click", ClickHandler);
}

for (let j = 0; j < buttonsReadMore.length; j++) {
  buttonsReadMore[j].addEventListener("click", ClickHandler2);
}


function ClickHandler(event){

var e=event.target;

var whiteBox=e.parentElement.parentElement;
var buttonPlusMinus=whiteBox.firstChild;
var minus= buttonPlusMinus.firstChild;
var a = whiteBox.querySelector('.a');


console.log('a= ', a);


console.log(whiteBox);

if (whiteBox.classList.contains('whiteBoxClosed') || whiteBox.classList.contains('whiteBoxStart') ) {

whiteBox.classList.remove('whiteBoxStart');
whiteBox.classList.remove('whiteBoxClosed');
whiteBox.classList.add('whiteBoxOpen');
a.classList.remove('none');


} else {

if (whiteBox.classList.contains('whiteBoxOpen') ) {

whiteBox.classList.remove('whiteBoxOpen');
whiteBox.classList.add('whiteBoxClosed');
a.classList.add('none');
        }
};

};



function ClickHandler2(event){

var e=event.target;

var personaSq=e.parentElement.parentElement.parentElement;

var hidden = personaSq.querySelector('.hidden');
var lm =personaSq.querySelector('.lm');


if (personaSq.classList.contains('personaSqClosed') || personaSq.classList.contains('personaSqStart') ) {

personaSq.classList.remove('personaSqStart');
personaSq.classList.remove('personaSqClosed');
personaSq.classList.add('personaSqOpen');
hidden.classList.remove('none');
lm.innerText='Less';

} else {

if (personaSq.classList.contains('personaSqOpen') ) {

personaSq.classList.remove('personaSqOpen');
personaSq.classList.add('personaSqClosed');
hidden.classList.add('none');
lm.innerText='Learn more';

        }
};

};
