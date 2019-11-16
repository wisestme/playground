let canvas, context;
canvas = document.getElementById('canvas');

if(canvas && canvas.getContext) {
  context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(75, 70);
  context.lineTo(75, 125);
  context.lineTo(25, 125);
  context.fillStyle = "#31AE92";
  context.fill();
  context.fillRect(0, 0, 150, 75);
}
