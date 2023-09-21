// Primitive Paint
// Talha Ali Murad
// 19-09-2023

// global variables
let circleSize = 20;
let overlay;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawAndMoveCircle();
  mouseShape();
}

function drawAndMoveCircle(){
  circle(windowWidth/2,windowHeight/2,circleSize);
  fill("lightgreen");
  circleSize = circleSize += 1;
  if(circleSize >= 150){
    circleSize = 20;
  }
}

function mouseShape(){
  if(mouseIsPressed){
    rect(mouseX,mouseY,30,20);
  }
}