// Perlin Noise
// Talha Ali Murad
// 05-10-2023
//
// generating random terrain using noise()
// calculating the average height and rendering it onscreen
// drawing a flag at the highest peak of the terrain

// global variables
let rectWidth = 2;
let rectHeightTime = 0, noiseShift = 0.005;
let panningNoise = 0;
let peakX, peakY;
let allHeights, avgHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function generateTerrain(noiseValue){
  // draws smooth moving terrain of random heights using noise()
  panningNoise += noiseShift;
  peakY = height;
  allHeights = [];
  
  for(let x = 0; x < width; x += rectWidth){
    noiseValue += noiseShift;
    let rectHeight = noise(noiseValue) * height;
    allHeights.push(height - rectHeight);

    fill(0);
    noStroke();
    rect(x , height, x + rectWidth, height - rectHeight);
    
    // calculates the highest point
    if(peakY > height - rectHeight){
      peakX = x + rectWidth;
      peakY = height - rectHeight;
    }
  }
}

function drawFlag(x, y){
  // draws a flag at the highest point of the terrain
  fill(255, 0, 0);
  rect(x - 2, y, x + 2, y - 30);
  triangle(x - 2, y - 40, x - 2, y - 20, x + 15, y - 30);
}

function drawAverage(){
  // renders the average height of all the rectangles
  let sumHeights = 0;
  for(let h of allHeights){
    sumHeights = sumHeights + h;
  }

  avgHeight = sumHeights/allHeights.length;
  stroke(255, 0, 0);
  strokeWeight(5);
  line(0, avgHeight, width, avgHeight);
}

function draw() {
  background(220);
  generateTerrain(panningNoise);
  drawFlag(peakX, peakY);
  drawAverage();
}