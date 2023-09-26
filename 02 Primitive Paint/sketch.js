// Primitive Paint
// Talha Ali Murad
// 19-09-2023
// creating a canvas where the user can draw with various different 
// shapes of various different colours

// global variables
let circleSize = 10;
let colorArray = ["green", "cyan", "purple"];
let colorIndex = 0;
let shape;
let overlay;

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width, height);
}

function draw() {
  background(220);
  drawAndMoveCircle();
  mouseShape();
  noStroke();
}

function drawAndMoveCircle(){
  // draws a circle in the center of the screen that increases and
  // decreases in size constantly
  fill("lightgreen");
  circle(windowWidth/2,windowHeight/2,circleSize);
  if(circleSize <= 150){
    circleSize = circleSize += 1;
  }
  else{
    circleSize = 10;
  }
}

function scrollColour(){
  // changes the colour of the shapes using the scroll wheel
  print(event.delta);
  if(event.delta < 0){
    colorIndex += 1;
    if(colorIndex > colorArray.length-1){
      colorIndex = 0;
    }
  }
}

function mouseShape(){
if(mouseIsPressed){
  if(keyIsPressed){
      if(key==="a") overlay.rect(mouseX,mouseY,30,20);
      if(key==="b") overlay.circle(mouseX,mouseY,20);
      if(key==="c") overlay.square(mouseX,mouseY,20)
    }
    image(overlay,0,0);
  }
}