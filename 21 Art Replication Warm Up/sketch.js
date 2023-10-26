// Art Replication
// Talha Ali Murad
// 26-10-2023
// Ninety Parallel Sinusoids With Linearly Increasing Period


function setup() {
  createCanvas(windowWidth, windowHeight);
  drawSinusiods();
}

function draw() {
  // background(220);
  // drawSinusiods(height/3);
}

function drawSinusiods(){
  // draws repeated sinusoids
  for(let x = 0; x <= width; x++){
    for(let y = 0; y <= height; y++){
      set(x, y, 0);
      //let sinY = 30 * sin(frameCount * 0.1) + 50;
    }
  }
  updatePixels();
}