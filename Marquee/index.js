//document.addEventListener('DOMContentLoaded', _ => {
  /*
    Quick whip-up of an idea posed by a client: a bar filled with logo's that move to the left slowly and infinitely.
    I checked if the <marquee> tag was still working (and it is), but it's considered invalid html now so I needed something else.
  */


  function creep() {

  document.getElementById('btn').disabled=false;
  document.getElementById('delay').disabled=true;
  document.getElementById('file').disabled=true;


  //delay = 5;
  items = [...document.getElementsByClassName('list__item')];
  containerElem = document.getElementById('containerElem');
  leftSideOfContainer = containerElem.getBoundingClientRect().left;
  listElem = document.getElementById('list');
  currentLeftValue = 1150;

  console.log('leftSideOfContainer=  ',leftSideOfContainer);
  
  // Kick off for the animation function.
  timerID=window.setInterval(animationLoop, delay);
  console.log('delay= ',delay);
  
  /* 
    Looks at first item in the list and checks if it goes out of the visible area 
    by comparing the right position of the first list item to the left position 
    of the containing element. 
  */



}


  function animationLoop() {
    const firstListItem = listElem.querySelector('.list__item:first-child');
    
    let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;
    
 //   console.log('rightSideOfFirstItem= ',rightSideOfFirstItem);


    /* 
      If first list item is out of viewable area, move it to the end of the list. 
      Also, set the current left value to -1 so we won't stutter.
    */
    if(rightSideOfFirstItem < leftSideOfContainer){
      currentLeftValue = 1150;
      listElem.appendChild(firstListItem);
    }
    
    // The part that keeps it all going: animating the margin left value of the list.
    listElem.style.marginLeft = `${currentLeftValue}px`;
    currentLeftValue--;
  }


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


creep();


  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}

  function getData()
  {
     // получаем индекс выбранного элемента
    var selind = document.getElementById("delay").options.selectedIndex;
   var txt= document.getElementById("delay").options[selind].text;
   var val= document.getElementById("delay").options[selind].value;

   //alert("Теxt= "+ txt +" " + "Value= " + val);


   delay=parseInt(val);

  }



var endButton = document.querySelector('.btn');

endButton.addEventListener('click', pauseCreep);

function pauseCreep () {


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





document.getElementById('btn').disabled=true;


var delay=5, timerID, toggle=0, listElem,items,containerElem,leftSideOfContainer,currentLeftValue;
