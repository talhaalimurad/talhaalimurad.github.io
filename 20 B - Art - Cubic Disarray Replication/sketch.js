// Cubic Disarray Replication
// Talha Ali Murad
// 24-10-2023

// global variables
let squareSize = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  rectMode(CENTER);
  noFill();
  noLoop();
}

function drawRectangles(){
  for(let x = squareSize/2; x < width - squareSize/2; x += squareSize){
    for(let y = squareSize/2; y < height - squareSize/2; y += squareSize){
      push();
      translate(x, y);
      let rAmount = map(y, 0, height, 1, 45);
      rotate(radians(random(rAmount)));
      let offset = map(y, 0, height, 0, 15);
      square(random(-offset, +offset), random(-offset, +offset), squareSize);
      pop();
    }
  }
}

function draw() {
  background(220);
  drawRectangles();
}
