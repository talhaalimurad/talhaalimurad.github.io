// Primitive Paint
// Talha Ali Murad
// 19-09-2023
// creating a canvas where the user can draw with various different 
// shapes of various different colours

// global variables
let colorArray = ["lightgreen","plum","skyblue"];
let colorIndex = 0;
let circleSize = 10;
let overlay;

function setup() {
  // creates two seperate canvases
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width, height);
  noStroke();
}

function draw() {
  background(220);
  drawAndMoveCircle();
  showPreview()
  mouseShape();
  createText();
}

function drawAndMoveCircle(){
  // draws a circle in the center of the screen that increases and
  // decreases in size constantly
  fill("lightgreen");
  circle(width/2,height/2,circleSize);
  if(circleSize < 150){
    circleSize = circleSize += 4;
  }
  else(circleSize = 10);
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
  // draws a shape at the mouse position depending on the key pressed
  overlay.fill(colorArray[colorIndex]); 
  if(mouseIsPressed){
    if(key==="a") overlay.rect(mouseX,mouseY,30,20);
    if(key==="s") overlay.circle(mouseX,mouseY,25);
    if(key==="d") overlay.square(mouseX,mouseY,25);
  }
  // allows the user to clear the canvas
  if(keyCode===32) overlay.clear();
  image(overlay,0,0);
}

function createText(){
  // writes the authors name on the screen
  fill(0);
  textSize(16);
  textFont("Calibri");
  text("Talha Ali Murad", width/2, height/2);
}

function showPreview(){
  // shows a preview of the chosen shape at the mouse position
  if(key==="a") rect(mouseX, mouseY, 30,20);
  if(key==="s") circle(mouseX,mouseY,25);
  if(key==="d") square(mouseX,mouseY,25);
}