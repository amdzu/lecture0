'use strict';

    
var buttonsPm=document.querySelectorAll('.cover');
//var e;

var buttonsReadMore=document.querySelectorAll('.readMoreBtn');
var lm=document.querySelector('.lm');
var btn=document.querySelector('.readMoreBtnF');
var contacts = document.getElementById('contacts');
var showContacts=document.getElementById('show-contacts');
var x = document.querySelector('.x');
console.log ('contacts= ',contacts);
console.log ('x= ',x);


const text = document.querySelector(".read-more");
const wrapper = document.querySelector(".wrapper");

showContacts.addEventListener('click',show);
function show() {
    contacts.classList.add('contacts');
    contacts.classList.remove('none');
}


x.addEventListener('click', close)
function close() {
    console.log('CLOSE');
contacts.classList.add('none');
contacts.classList.remove('contacts');
};


btn.addEventListener("click", e => {
  // toggle the class 'read-more_open'
  //text.classList.toggle("read-more_open");
  if (text.classList.contains("read-more")) {
        text.classList.add('read-more_open');
        text.classList.remove('read-more');
        lm.innerHTML = "Read Less";
  } else {
        text.classList.add('read-more');
        text.classList.remove('read-more_open');
        lm.innerHTML = "Read More";
  };

});






















console.log('readMoreBtnF= ',btn );

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
