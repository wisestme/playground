let dragStart = function (e) {
  // IE doesn't support text/plain
  try {
    e.dataTransfer.setData('text/plain', e.target.id);
  } catch (ex) {
    e.dataTransfer.setData('Text', e.target.id);
  }
}

let cancel = function (e) {
  if(e.preventDefault) e.preventDefault();
  if(e.stopPropagation) e.stopPropagation();
  return false;
}

let dropped = function (e) {
let id;

cancel(e);
try {
  id = e.dataTransfer.getData('text/plain');
} catch (ex) {
  id = e.dataTransfer.getData('Text');
}
  e.target.appendChild(document.querySelector('#' + id));
};

let musical = document.querySelector('#even-if');
musical.addEventListener('dragstart', dragStart, false);

let target = document.querySelector('#target-container');
target.addEventListener('drop', dropped, false);
target.addEventListener('drop', moveTitle, false);
target.addEventListener('dragenter', cancel, false);
target.addEventListener('dragover', cancel, false);

let songTitle = document.querySelector('.title');
function moveTitle() {
  let newElement = document.createElement('p');
  newElement.className = 'newTitle';
  newElement.textContent = songTitle.innerText;
  target.appendChild(newElement);
}

/************************************************************
*/
// ES6
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
}

console.log(x);

let funcName = ()  => console.log('me');


funcName();


/******************************************************************
*************CSS ANIMATIONS***********************/
// let widget = document.querySelector('a');
// widget.addEventListener('transitionend', function() {
//   console.log('beautiful animation');
//   alert('beautiful animation');
// });


function printAmount (amount) {
  console.log(amount.toFixed(3));
  amount += 2;
  console.log(amount.toFixed(3));

}


printAmount(99.99);
