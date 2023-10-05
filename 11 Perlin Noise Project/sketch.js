// Perlin Noise
// Talha Ali Murad
// 05-10-2023
//
// Generating random terrain using noise()

// global variables
let rectWidth = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function generateTerrain(){
  // drawing rectangles of random heights using a loop
  for(let x = 0; x < width; x += rectWidth){
    rectMode(CORNERS);
    let rectHeight = random(0, height);
    rect(x , height, x + rectWidth, height - rectHeight);
  }
}

function draw() {
  // background(220);
}
