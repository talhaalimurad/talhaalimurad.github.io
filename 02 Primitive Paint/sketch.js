// Primitive Paint
// Talha Ali Murad
// 19-09-2023
// creating a canvas where the user can draw with various different 
// shapes of various different colours

// global variables
let circleSize = 10;
let colorArray = ["lightgreen","plum","skyblue"];
let colorIndex = 0;
let shape;
let overlay;

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width, height);
  noStroke();
}

function draw() {
  background(220);
  drawAndMoveCircle();
  mouseShape();
  createText();
}

function drawAndMoveCircle(){
  // draws a circle in the center of the screen that increases and
  // decreases in size constantly
  fill("lightgreen");
  circle(width/2,height/2,circleSize);
  if(circleSize <= 150){
    circleSize = circleSize += 3;
  }
  else{
    circleSize = 10;
  }
}

function mouseWheel(event){
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
  overlay.fill(colorArray[colorIndex]); 
  if(mouseIsPressed){
    if(key==="a") overlay.rect(mouseX,mouseY,30,20);
    if(key==="s") overlay.circle(mouseX,mouseY,25);
    if(key==="d") overlay.square(mouseX,mouseY,25);
  }
  image(overlay,0,0);
}

function createText(){
  fill(0);
  textSize(16);
  textFont("Calibri");
  text("Talha Ali Murad", width/2, height/2);
}