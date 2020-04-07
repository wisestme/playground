// control bottom modal

let phoneIcon = document.querySelector('.phone_icon');
let bottomModal = document.querySelector('.modal');
let closeIcon = document.querySelector('.bottom_cross');

phoneIcon.addEventListener('click', () => {
  //bottomModal.style.width = '200px';
  bottomModal.style.right = 0;

  //bottomModal.style.display = 'block';

});

closeIcon.addEventListener('click', () => {
  bottomModal.style.right = '-350px';
  // bottomModal.style.width = '0';
  //bottomModal.style.display = 'none';
})
