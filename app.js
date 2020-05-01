const canvas = document.getElementById("js-canvas");

let painting = false;

function paintStop() {
    painting = false;
    console.log("paintStop")
}
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
    console.log("paint");
}


function onMouseUp(event) {
   paintStop();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", paintStop);
}