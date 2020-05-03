const canvas = document.getElementById("js-canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js-color")
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const START_COLOR = "rgb(0, 0, 0)";
const saveImage = document.getElementById("jsSave");

canvas.width = 700; //실제 canvas의 pixel size
canvas.height = 450;//실제 canvas의 pixel size

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 450);
ctx.strokeStyle = START_COLOR;
ctx.lineWidth = 2.5;
ctx.fillStyle = START_COLOR;

let painting = false;
let filling = false;

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


function clickColorChange(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleChangeRange(event) {
    const brushSize = event.target.value;
    ctx.lineWidth = brushSize;
}
function handleCanvasClick() {
    if(filling) {
    ctx.fillRect(0, 0, 700 , 450);}
}
function handleCM(event) {
    event.preventDefault();
}

function handleSaveImage(){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "exportImage";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", paintStart);
    canvas.addEventListener("mouseup", paintStop);
    canvas.addEventListener("mouseleave", paintStop);
    canvas.addEventListener("click" , handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

function handleChangeMode() {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Brush";
    }
}

Array.from(colors).forEach(color => color.addEventListener("click" ,clickColorChange ));

if (range) {
    range.addEventListener("input", handleChangeRange);
}

if (mode) {
    mode.addEventListener("click" , handleChangeMode);
}

if (saveImage) {
    saveImage.addEventListener("click",handleSaveImage);
}