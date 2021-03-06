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

let amount = 99.99;
function printAmount (amt) {
  console.log(amt.toFixed(3));
  amt += 2;
  console.log(amt.toFixed(3));
  return amt;
}

function formatAmount () {
  return '$' + amount;
}
printAmount(amount);

amount = formatAmount();
 console.log(amount);

// FUNCTION SCOPE
 function one () {
  let a = 2;
  console.log(a);
 }

 function two () {
  let a = 3;
  console.log(a);
 }

 one();
 two();

// NESTED FUNCTION
function outer () {
  let a = 5;

  function inner () {
    let b = 4;
    console.log(a + b);
  }
inner();
}
outer();

/****************************************
PRACTICE*/
let balance = 500;
let price;

// function buyPhone (phonePrice, accessoryPrice) {
//   if(balance > phonePrice) {
//     balance = balance - phonePrice;
//   } else {
//     console.log('please top up your wallet');
//   }

//   if(balance > accessoryPrice) {
//     balance = balance - accessoryPrice;
//   } else {
//     console.log('please top up your wallet');
//   }
  
//   console.log(balance);
//   return balance
// }



// balance = buyPhone(100, 50);
// console.log(balance);

function buyProduct (phonePrice, accessoryPrice) {
  let purchases = [];
  while(balance > phonePrice) {
    let initialBalance = balance;
    function buyPhone () {
      balance = balance - phonePrice;
      if(balance > accessoryPrice) {
        balance = balance - accessoryPrice;
      }

      purchase = initialBalance - balance;
      purchases.push(purchase);
      return purchases;
    }
    let allPurchase = buyPhone();
    console.log(allPurchase);
  }
}

buyProduct(100, 30);
buyProduct(100, 50);

