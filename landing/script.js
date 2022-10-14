'use strict';

    
var buttonsPm=document.querySelectorAll('.cover');
var e;


for (let i = 0; i < buttonsPm.length; i++) {
  buttonsPm[i].addEventListener("click", ClickHandler);
}

function ClickHandler(event){

e=event.target;

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






