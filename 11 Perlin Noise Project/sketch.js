// Perlin Noise
// Talha Ali Murad
// 05-10-2023
//
// Generating random terrain using noise()

// global variables
let rectWidth = 3;
let rectHeightTime = 20;
let noiseShift = 0.005;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //generateTerrain();
  frameRate(2);
}

function generateTerrain(){
  // drawing rectangles of random heights using a loop
  for(let x = 0; x < width; x += rectWidth){
    rectMode(CORNERS);
    let rectHeight = noise(rectHeightTime);
    rectHeight = map(rectHeight, 0, 1, 5, height);
    rectHeightTime += noiseShift;
    fill(0);
    rect(x , height, x + rectWidth, height - rectHeight);
  }
}

function draw() {
  background(220);
  generateTerrain();
}
