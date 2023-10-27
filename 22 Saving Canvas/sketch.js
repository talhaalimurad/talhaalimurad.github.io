// Saving The Canvas
// Talha Ali Murad
// 27-10-2023
// Saving the canvas as a PNG, canvas size

// global variables

function setup() {
  createCanvas(3000, 1500);
  rectMode(CENTER);
}

function draw() {
  background(50);
  art();
}
function keyPressed(){
  if(key==="s") save("picture.png");
}

function art(){
  noFill();
  stroke(255);
  strokeWeight(10);
  for(let d = 300; d < 1400; d += 50){
    rect(width/2, height/2, d);
  }
}