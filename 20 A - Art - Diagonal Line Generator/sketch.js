// Art - Diagonal Line Generator
// Talha Ali Murad
// 24-10-2023

// global variables
let spacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  drawLines();
}

function diagonalAscending(x, y, s){
  line(x - s/2, y + s/2, x + s/2, y - s/2);
}

function diagonalDescending(x, y, s){
  line(x - s/2, y - s/2, x + s/2, y + s/2);
}

function drawLines(){
  // generate x, y
  for(let x = 0; x < width; x += spacing){
    for(let y = 0; y < height; y += spacing){
      let choice = Math.floor(random(2));
      if(choice===0) diagonalAscending(x, y, spacing);
      else diagonalDescending(x, y, spacing);
    }
  }
}