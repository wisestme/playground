let canvas, context;
canvas = document.getElementById('canvas');

if(canvas && canvas.getContext) {
  context = canvas.getContext('2d');
  context.beginPath();
  context.arc(95, 50, 40, 0, 2 * Math.PI);
  context.moveTo(75, 70);
  context.lineTo(75, 125);
  context.lineTo(25, 125);
  context.fillStyle = "#31AE92";
  context.fill();
  context.fillRect(0, 0, 150, 75);
  context.fillRect(100, 100, 150, 120);

  context.clearRect(105, 105, 80, 100);
  context.clearRect(190, 150, 20, 20)
  context.strokeStyle = 'rgb(51, 153, 0)';
  context.lineWidth = 6;
  context.strokeRect(105, 105,80,100);
  context.strokeRect(190, 150,20,20);
  context.arc(95, 50, 40, 0, 2 * Math.PI);

  context.linewidth = 12;
  context.lineJoin = 'round';
  context.strokeStyle = '#ccc'
  context.stroke();

  context.fillStyle = '#fff';
  context.font = '20px Arial';
  context.fillText('My play ground', 100, 105);
  context.strokeStyle = '#000000';
  
context.strokeRect(167, 144, 74, 49);
context.strokeStyle = '#000000';
context.strokeRect(204, 172, 83, 49);
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(242, 143);
context.lineTo(289, 172);
context.stroke();
context.closePath();
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(168, 144);
context.lineTo(206, 172);
context.stroke();
context.closePath();
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(164, 196);
context.lineTo(202, 222);
context.stroke();
context.closePath();
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(240, 194);
context.lineTo(285, 219);
context.stroke();
context.closePath();
}
