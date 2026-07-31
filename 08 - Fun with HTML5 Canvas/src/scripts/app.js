const canvas = document.getElementById("draw");

const ctx = canvas.getContext("2d");

ctx.width = window.innerWidth;
ctx.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 30;

let lineWidthDirection = true;

let hue = 0;
// isDrawing
let drawing = false;

let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!drawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 80 || ctx.lineWidth <= 20) {
    lineWidthDirection = !lineWidthDirection;
  }

  if (lineWidthDirection) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

  console.log(ctx.lineWidth);
}

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (drawing = false));
canvas.addEventListener("mouseout", () => (drawing = false));
