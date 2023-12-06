// Art Replication
// Talha Ali Murad
// 26-10-2023
// Ninety Parallel Sinusoids With Linearly Increasing Period

// Global Variables
let period = 0.01;
let peak = 50;
let trough = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  drawSinusiod();
}

function draw() {
  //background(220);
}

function drawSinusiod(){
  for(let x = 0; x < width; x++){
    let y = sin(x * period * 0.9);
    y = map(y, -1, 1, peak, trough);
    if(x > width/8 && x < width * 0.77){
      point(x, y);
      period += 0.00298;
    }
  }
}