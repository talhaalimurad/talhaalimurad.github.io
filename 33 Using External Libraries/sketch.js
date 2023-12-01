// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scribble;
let rW = 150;
let rH = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
  strokeWeight(4);
}

function draw() {
  background(220);
  //if(coolideRectCircle(width/2, height/2, rW, rH, mouseX, mouseY,)}
  rect(width/2, height/2, rW, rH);
  scribble.scribbleEllipse(mouseX, mouseY, 120, 120);
}