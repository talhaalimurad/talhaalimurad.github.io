// Transations and Rotations
// Talha ALi Murad
// 23-10-2023
//
// 


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawClock();
}

function drawClock(){
  push();
  strokeWeight(3);
  circle(width/2, height/2, 400);
  translate(width/2, height/2);
  for(let i = 0; i <= 60; i++){
    rotate(radians(6));
    strokeWeight(2);
    line(120, 120, 135, 135);
  }
  pop();
}
