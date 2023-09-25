// Primitive Paint
// Talha Ali Murad
// 19-09-2023
// creating a canvas where the user can draw with various different 
// shapes of various different colours

// global variables
let circleSize = 10;
let colorArray = ["green", "cyan", "purple"];
let colorIndex = 0;
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

// function chooseShape(){
//  if(keyIsPressed){
//    if(key==="a") shape = "rect";
//    if(key==="b") shape = "circle";
//    if(key==="c") shape = "triangle";
//  }
//}

function mouseShape(){
  // draws a shape at the mouse position when the mouse is pressed
  if(mouseIsPressed){
    overlay.fill(colorArray[colorIndex]);
    overlay.stroke(colorArray[colorIndex]);
    overlay.rect(mouseX,mouseY,30,20);
  }
  image(overlay,0,0);
}