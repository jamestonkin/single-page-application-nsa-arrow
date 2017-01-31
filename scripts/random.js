'use strict';

var leftImage = document.getElementById('left');
var rightImage = document.getElementById('right');

window.addEventListener('click', arrow);


function arrow(event){
  var randomNumber = Math.floor(Math.random() * 2 ) + 1;
  console.log('random:', randomNumber);
  if (randomNumber === 1) {
    leftImage.classList.add('show');
    leftImage.classList.remove('hidden');
    rightImage.classList.add('hidden');
    rightImage.classList.remove('show');
  } else {
    leftImage.classList.add('hidden');
    leftImage.classList.remove('show');
    rightImage.classList.add('show');
    rightImage.classList.remove('hidden');
  }
}
