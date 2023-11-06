// Puzzle Game Starter
// Talha Ali Murad
// 06-11-2023
// A first foray working with 2D arrays

// global variables
let grid = 
[[0,    100,  150,   200,  250],
 [255,  255,    0,   255,  255],
 [255,  200,  150,   100,   50],
 [0,      0,    0,   255,    0]];

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth = 50;
let rectHeight = 50;

function setup() {
  createCanvas(rectWidth * NUM_COLS, rectHeight * NUM_ROWS);
}

function draw() {
  background(220);
  renderGrid();
}

function  renderGrid()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             {
  // creates a 2D grid of squares using information from our 2D array
  // for the corresponding fill values;
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}