// Multi-Coloured Grid
// Talha Ali Murad
// 27-09-2023
//
// Creating a random multicoloured grid that increases and decreases in
// size with each mouse click

// global variables
let b;
let squareSize = 25;
let gridSpacing = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
  drawGrid();
}

function drawGrid(){
  // draws multi coloured squares covering the entire canvas
  for(let x = 0; x < width; x = x + gridSpacing){
    for(let y = 0; y  < height; y = y + gridSpacing){
      b = random(70, 250,);
      fill(20,20,b);
      square(x, y, squareSize);
    }
  }
}

function mousePressed(){
  drawGrid();
  if(mouseButton === LEFT){
    squareSize = squareSize += 5;
    gridSpacing = gridSpacing += 5;
  }
  if(mouseButton === RIGHT){
    squareSize = squareSize -= 5;
    gridSpacing = gridSpacing -= 5;
  }
}

function draw() {
}
