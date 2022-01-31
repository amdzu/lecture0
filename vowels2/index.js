function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {


    var res = reader.result;

   //fromFile = res.replace(/(\r\n|\n|\r)/gm," ");

  fromFile = res.replace(/(?:\r\n|\r|\n)/g, '<br />');
 

    fromFile = fromFile.replace(/\s+/g," ");
    //console.log(fromFile);

console.log(fromFile);

const listItem = document.getElementById('list__item');

listItem.innerHTML=fromFile;
justInput=true;
n=0;

replaceBySpans();
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


	if (letters[i]=='<') {spans.push('<br id='+spanId[i]+'>'); //ПРОВЕРКА НА ПЕРЕНОС СТРОКИ
	}
	if (letters[i]=='b' || letters[i]=='r' || letters[i]=='>') {spans.push('<span id='+spanId[i]+'>'+'</span>'); //ПРОВЕРКА НА ПЕРЕНОС СТРОКИ
	}
	if (letters[i]!='b' && letters[i]!='r' && letters[i]!='>' && letters[i]!='<'){
	spans.push('<span id='+spanId[i]+'>'+letters[i]+'</span>')};




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

if (i>vowelsNums.length-1) {

	var kPrev=vowelsNums[i-1];
	var prevsId=spanId[kPrev];
	var prevVowel=document.getElementById(prevsId);
//	console.log('i=',i,' k=',k,' sId=',sId,' Гласная=',prevVowel.innerHTML);
	console.log('kPrev=',kPrev,' prevsId=',prevsId,' Гласная=',prevVowel.innerHTML);
	prevVowel.classList.remove('red');
}
if (i<=vowelsNums.length-1) {
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
	console.log('i=',i,' k=',k,' sId=',sId,' Гласная=',currentVowel.innerHTML);

}

}


function vowelColor() {

	file=document.getElementById('file').disabled=true;
	speed=document.getElementById('delay').disabled=true;




	toggle=0;
console.log('vowelColor!  ',' n=',n, ' toggle=', toggle);
	endButton.removeEventListener('click', vowelColor);
	endButton.addEventListener('click', pauseVowels);
	buttonText.innerHTML='Пауза';

	intervalID=setInterval(
	function(){

	vowels(n);
	n++;
	//console.log('n=',n,' vowelsNums.length=', vowelsNums.length)
		if(n > vowelsNums.length) {
			toggle=0;
			endButton.addEventListener('click', vowelColor);
			buttonText.innerHTML='Старт';
			console.log(n, 'delay=',delay, ' toggle=',toggle);
			clearInterval(intervalID);
			n=0;
			file=document.getElementById('file').disabled=false;
			speed=document.getElementById('delay').disabled=false;

			return n;
		}
	},
	 delay);
}

function pauseVowels () {
if (toggle==1) {
toggle=0;
//timerID=window.setInterval(animationLoop, delay);
//console.log('toggle= ',toggle,' delay= ',delay);
		}
else if (toggle==0) {
  clearInterval(intervalID); 
  toggle=1;
  console.log('toggle= ',toggle,' delay= ',delay);
  	file=document.getElementById('file').disabled=false;
	speed=document.getElementById('delay').disabled=false;	

	endButton.addEventListener('click', vowelColor);
	buttonText.innerHTML='Старт';
				}
}


var delay=1000, timerID, toggle=0, listElem,items,containerElem,leftSideOfContainer,currentLeftValue, intervalID, n=0, file, speed;
var glasnye = ["а","у","е","ы","о","э","я","и","ю","ё","А","У","Е","Ы","О","Э","Я","И","Ю","Ё"];
var spans=[], vowelsNums=[], newText='',spanId=[], letters;
var oldText, justInput=true;

replaceBySpans();

console.log('spanidlength=',spanId.length,' letters.length=',letters.length,' spans.length=',spans.length);

var endButton = document.querySelector('.btn');
endButton.addEventListener('click', vowelColor);
var buttonText=document.querySelector('.warn');
