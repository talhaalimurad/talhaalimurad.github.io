// Perlin Noise
// Talha Ali Murad
// 05-10-2023
//
// Generating random terrain using noise()

// global variables
let rectWidth = 2;
let rectHeightTime = 0;
let noiseShift = 0.005;
let peakX, peakY;
let globalNoise=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  peakY = height;
}

function generateTerrain(noiseValue){
  // drawing rectangles of random heights using a loop
  globalNoise += noiseShift;
  peakY = height;
  for(let x = 0; x < width; x += rectWidth){
    noiseValue += noiseShift;
    rectMode(CORNERS);
    let rectHeight = noise(noiseValue) * height;
    fill(0);
    rect(x , height, x + rectWidth, height - rectHeight);
    if(peakY > height - rectHeight){
      peakX = x + rectWidth;
      peakY = height - rectHeight;
    }
  }
}

function drawFlag(x, y){
  fill(255, 0, 0);
  rect(x - 2, y, x + 2, y - 30);
  triangle(x - 2, y - 40, x - 2, y - 20, x + 15, y - 30);
}

function draw() {
  background(220);
  generateTerrain(globalNoise);
  drawFlag(peakX, peakY);
}