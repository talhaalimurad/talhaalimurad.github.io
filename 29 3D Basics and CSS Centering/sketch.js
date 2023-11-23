// 3D Basics + CSS Centering
// Talha Ali Murad
// 23-11-2023
// building w/ 3D primitives + centering canvas

let angle = 5;

function setup() {
  createCanvas(400, 400, WEBGL); // WEBGL has 0,0 at the center
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateY(frameCount);
  angle = map(mouseX, 0, width, -120, 120);
  for(let i = 0; i < 360; i+=45){
    push();
    rotateY(i);
    boxes(30);
    pop();
  }
}

function boxes(size){
  if(size > 3){
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);
  }
}