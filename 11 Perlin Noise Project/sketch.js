// Perlin Noise
// Talha Ali Murad
// 05-10-2023
//
// Generating random terrain using noise()

// global variables
let rectWidth = 3;
let rectHeightTime = 20;
let noiseShift = 0.01;
let peakX, peakY;


function setup() {
  createCanvas(windowWidth, windowHeight);
  peakY = height;
  strokeWeight(4);
  generateTerrain();
  drawFlag(peakX, peakY);
}

function generateTerrain(){
  // drawing rectangles of random heights using a loop
  for(let x = 0; x < width; x += rectWidth){
    rectMode(CORNERS);
    let rectHeight = noise(rectHeightTime);
    rectHeight = map(rectHeight, 0, 1, 5, height);
    if(rectHeight < peakY){
      peakY = rectHeight;
      peakX = x;
    }
    rectHeightTime += noiseShift;
    fill(0);
    rect(x , height, x + rectWidth, height - rectHeight);
  }
}

function drawFlag(x, y){
  line(x, y, x, y - 30);
  triangle(x, y - 30, x, y - 20, x + 10, y - 25);
}

function draw() {
  // background(220);
}