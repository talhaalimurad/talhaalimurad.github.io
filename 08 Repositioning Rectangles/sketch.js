// Repositioning Rectangles
// Talha Ali Murad
// 27-09-2023
//
// Simple GUI creation / geometry practice

// global variables
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false; // are we hovering over the rectangle?
let pickedUp = false; // are we currently moving it?
let xOff, yOff;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  rWidth = 200;
  rHeight = 100;
}

function updateEdgePositions(){
  // uppdate the left, right,, top, and bottom properties
  rLeft = x - rWidth/2;
  rRight = x + rWidth/2;
  rTop = y + rHeight/2;
  rBottom = y - rHeight/2;

  //check if mouse is over rect or not
  if(mouseX > rLeft && mouseX < rRight && mouseY > rBottom && mouseY < rTop){
    mouseOver = true;
    fill(170, 190, 50);
  }
  else{
    mouseOver = false;
    fill(35, 70, 125);
  }
  if(pickedUp){
    x = mouseX + xOff;
    y = mouseY + yOff;
  }
}

function drawRectangle(){
  // render the rectangle and handle dragging
  updateEdgePositions();
  rect(x,y,rWidth,rHeight);
}

function mousePressed(){
  // triggers exactly once per click
  if(mouseOver){
    pickedUp = true;
    xOff = x - mouseX;
    yOff = y - mouseY;
  }
}

function mouseReleased(){
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}