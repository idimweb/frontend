//menyiapkan canvas
const canvasSaya = document.querySelector('#canvasSaya');


//atur ukuran canvas
canvasSaya.width = window.innerWidth;
canvasSaya.height = window.innerHeight;

//tentukan contex
const c = canvasSaya.getContext('2d');

//manipulasi canvas

//membuat rectangle
// c.fillStyle = 'pink';
// c.strokeStyle = '#999';
// c.lineWidth = '5';

// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();

// //membuat lingkaran
// c.fillStyle = 'lightgreen';
// c.beginPath();
// // c.arc(50,50, 150, 0, 2 * Math.PI);
// c.arc(550, 200, 150, 0, 2 * Math.PI);

// c.fill();
// c.stroke()

// //membuat path segitiga
// c.fillStyle = 'lightblue'
// c.beginPath()
// c.moveTo(900, 50)
// c.lineTo(1050, 350)
// c.lineTo(750, 350)
// c.closePath()
// c.stroke()


// Untuk animasi di kanvas membutuhkan Canvas Api Animation
// requestAnimationFrame()
// clearRect() 


//membuat animasi lingkaran
let x = 300
let y = 300
let speedX = 10
let speedY = 10
let radius = 150
function draw(){
window.requestAnimationFrame(draw);
c.clearRect(0, 0, innerWidth, innerHeight)
console.log('ok!') //untuk mengecek lingkaran berjalan terus-menerus
c.fillStyle = 'lightgreen';
c.beginPath()
// c.arc(50,50, 150, 0, 2 * Math.PI);
c.arc(x, y, radius, 0, 2 * Math.PI)
c.fill()
c.stroke()
if(x + radius > innerWidth || x - radius < 0) {
speedX = -speedX
}
if(y + radius > innerHeight || y - radius < 0) {
    speedY = -speedY
}
x+=speedX;
y+=speedY;
}
draw()

