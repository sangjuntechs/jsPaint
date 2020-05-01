const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700; //실제 canvas의 pixel size
canvas.height = 450;//실제 canvas의 pixel size

ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.lineWidth = 2.5;
let painting = false;

function paintStart() {
    painting = true;
    console.log("paint");
}

function paintStop() {
    painting = false;
    console.log("paintStop")
}
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    startPaint();
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", paintStart);
    canvas.addEventListener("mouseup", paintStop);
    canvas.addEventListener("mouseleave", paintStop);
}