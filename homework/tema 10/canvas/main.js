var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth = "2";
ctx.moveTo(100, 260);
ctx.lineTo(250, 50);
ctx.lineTo(400, 260);
ctx.stroke();
ctx.strokeRect(100, 260, 300, 300);

