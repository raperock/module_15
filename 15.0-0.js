const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, 950, 120);

// Залитый прямоугольник white
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 180, 40);
// Залитый прямоугольник blue
ctx.fillStyle = "blue";
ctx.fillRect(0, 40, 180, 40);

// Залитый прямоугольник red
ctx.fillStyle = "red";
ctx.fillRect(0, 80, 180, 40);

//флаг франции
// Залитый прямоугольник
ctx.fillStyle = "blue";
ctx.fillRect(190, 0, 60, 120);

// Залитый прямоугольник
ctx.fillStyle = "white";
ctx.fillRect(250, 0, 60, 120);

// Залитый прямоугольник
ctx.fillStyle = "red";
ctx.fillRect(310, 0, 60, 120);
//флаг финдлянидии
ctx.fillStyle = "white";
ctx.fillRect(380, 0, 180, 120);

ctx.fillStyle = "blue";
ctx.fillRect(380, 40, 180, 40);

ctx.fillStyle = "blue";
ctx.fillRect(420, 0, 40, 120);

//Швейцария
ctx.fillStyle = "red";
ctx.fillRect(570, 0, 180, 120);

ctx.fillStyle = "white";
ctx.fillRect(640,20, 40, 80);

ctx.fillStyle = "white";
ctx.fillRect(600,40, 120, 35);
//Японии

ctx.fillStyle = "white";
ctx.fillRect(760,0, 200, 120);

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(850, 60, 50, 0, 2 * Math.PI);
ctx.fill();






