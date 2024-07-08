const canvas = document.getElementById("canvas");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    drawCircle(e.offsetX, e.offsetY);
    drawLine(x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) size = 5;
  changeStrokeSize();
});

increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) size = 50;
  changeStrokeSize();
});

colorEl.addEventListener("change", () => {
  color = colorEl.value;
});

function changeStrokeSize() {
  sizeEl.innerText = size;
}

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
