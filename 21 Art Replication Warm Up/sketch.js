// Art Replication
// Talha Ali Murad
// 26-10-2023
// Ninety Parallel Sinusoids With Linearly Increasing Period

// Global Variables
let period = 0.1;
let peak = 110;
let trough = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  drawSinusiod();
  drawSinusiods();
}

function draw() {
  //background(220);
}

function drawSinusiods(){
  for(let i = 100; i >= 0; i--){
    period = 0.1;
    peak += 4;
    trough += 4;
    drawSinusiod();
  }
}

function drawSinusiod(){
  for(let x = 0; x < width; x++){
    let y = sin(x * period * 0.8);
    y = map(y, -1, 1, peak, trough);
    if(x > width/8 && x < width * 0.66){
      point(x, y);
      period += 0.0046;
    }
  }
}