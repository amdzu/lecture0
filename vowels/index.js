//document.addEventListener('DOMContentLoaded', _ => {
  /*
    Quick whip-up of an idea posed by a client: a bar filled with logo's that move to the left slowly and infinitely.
    I checked if the <marquee> tag was still working (and it is), but it's considered invalid html now so I needed something else.
  */


 



//});

function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {


    var res = reader.result;

    fromFile = res.replace(/(\r\n|\n|\r)/gm," ");

    fromFile = fromFile.replace(/\s+/g," ");
    console.log(fromFile);

console.log(fromFile);

const listItem = document.getElementById('list__item');

listItem.innerHTML=fromFile;
justInput=true;
replaceBySpans();
vowelColor(); 


  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}

  function getData() {
     // получаем индекс выбранного элемента
    var selind = document.getElementById("delay").options.selectedIndex;
   var txt= document.getElementById("delay").options[selind].text;
   var val= document.getElementById("delay").options[selind].value;
   delay=parseInt(val);
  }

var endButton = document.querySelector('.btn');
endButton.addEventListener('click', vowels);

function pauseVowels () {
if (toggle==1) {
toggle=0;
timerID=window.setInterval(animationLoop, delay);
console.log('toggle= ',toggle,' delay= ',delay);
		}
else if (toggle==0) {
  clearInterval(timerID); 
  toggle=1;
  console.log('toggle= ',toggle,' delay= ',delay);
		}
}


function replaceBySpans() {
spans.splice(0);
vowelsNums.splice(0);
spanId.splice(0);
newText='';
var text=document.getElementById('list__item');
if (justInput==false) {
		text.innerHTML=oldText;
}
letters = text.innerHTML;
oldText=letters;
for(var i = 0; i<letters.length; i++) {
	console.log('i=',i,' letters[i]=',letters[i],' гласная? ',glasnye.includes(letters[i]));
	spanId[i]="span"+i;
	spans.push('<span id='+spanId[i]+'>'+letters[i]+'</span>');
		if (glasnye.includes(letters[i])) {
			vowelsNums.push(i);
		};
	};
for(var i = 0; i<spans.length; i++){
newText = newText+spans[i];
		}
text.innerHTML=newText;
justInput=false;
}




function vowels(i) {

var k=vowelsNums[i];

if (i>0) {
var kPrev=vowelsNums[i-1];
var prevsId=spanId[kPrev];
}

var sId=spanId[k];
var currentVowel=document.getElementById(sId);

if (i>0) {
var prevVowel=document.getElementById(prevsId);
prevVowel.classList.remove('red');
}


currentVowel.classList.add('red');
console.log('k=',k,' sId=',sId,' Гласная=',currentVowel);
}


function vowelColor() {
var n=0
var intervalID=setInterval(
	function(){
vowels(n);
n++;
if(n>=vowelsNums.length) {
console.log(n, 'delay=',delay);
clearInterval(intervalID);
}
	},
	 delay);
}









var delay=1000, timerID, toggle=0, listElem,items,containerElem,leftSideOfContainer,currentLeftValue;
var glasnye = ["а","у","е","ы","о","э","я","и","ю","ё","А","У","Е","Ы","О","Э","Я","И","Ю","Ё"];
var spans=[], vowelsNums=[], newText='',spanId=[], letters;
var oldText, justInput=true;
replaceBySpans();
console.log('spanidlength=',spanId.length,' letters.length=',letters.length,' spans.length=',spans.length);
vowelColor(); 

