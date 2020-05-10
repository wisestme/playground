function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
console.log(zoomer.childNodes[1]);
let zoomerSource = zoomer.childNodes[1].getAttribute('src');
console.log(zoomerSource);

  zoomer.style.backgroundImage = `${zoomerSource}`;
}

// let zoomImages = document.querySelectorAll('.zoom');
// console.log(zoomImages);



// for(let zoomImage of zoomImages) {
//   zoomImage.style.backgroundImage = "url(img/slip001.jpg)";
//   let currentImage = zoomImage.childNodes;
//   console.log(this);
// }