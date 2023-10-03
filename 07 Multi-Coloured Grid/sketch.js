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
  // disables the normal behaviour of the right mouse button
  document.addEventListener("contextmenu", event => event.preventDefault());
  drawGrid();
}

function drawGrid(){
  // draws multi coloured squares covering the entire canvas not drawing the squres
  // are cut off on the edge
  for(let x = 0; x < width - gridSpacing; x = x + gridSpacing){
    for(let y = 0; y  < height - gridSpacing; y = y + gridSpacing){
      fill(20,20,random(70,250));
      square(x, y, squareSize);
    }
  }
}

function mousePressed(){
  // makes the grid bigger or smaller depending on the mouse button clicked
  background(250);
  drawGrid();
  if(mouseButton === LEFT){
    squareSize = squareSize += 5;
    gridSpacing = gridSpacing += 5;
  }
  else{
    squareSize = squareSize -= 5;
    gridSpacing = gridSpacing -= 5;
  }
}

function keyPressed(){
  // redraws the grid with different colours when a key is pressed
  background(250);
  drawGrid();
}

function draw() {
}
