// Puzzle Game
// Talha Ali Murad
// 20-01-2024

// global variables
let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let gridData = [[]];
let won = [false];
let mousePosition = [];

function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  // populating the gridData array
  fillGridData();
}

function draw() {
  if(won[0]){
    drawGrid(false);
    fill(won[1]);
    textAlign(CENTER);
    textSize(50);
    text("You Win",width/2, height/2);
    noLoop();
    return;
  }

  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
}

function fillGridData(){
  for(let i = 0; i < NUM_ROWS; i++){
    gridData[i] = [];
    for(let j = 0; j < NUM_COLS; j++){
      gridData[i][j] = (round(random(0,2)) == 0); //true or false
    }
  }
}

function mousePressed(){
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
  if(won[0]) return;
  flip(mousePosition[0][1], mousePosition[0][0]);

  if((!keyIsPressed===true)){
    for(let i of mousePosition.slice(1)){
      flip(i[1], i[0]);
    }
  }

  // if shift is pressed along with the mouse being clicked only the current tile
  // will be flipped
  else if(key===SHIFT){
    flip(row, col);
  }

  if(checkForWin()) won[0]=true;
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if(checkValid(row, col)){
    gridData[col][row] =! gridData[col][row];
  }
}

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  mousePosition = [];
  let x, y;
  x = int(mouseX / rectWidth);
  y = int(mouseY / rectHeight);
  mousePosition.push([x, y]);

  if(checkValid(x-1, y))mousePosition.push([x-1,y]);
  if(checkValid(x+1, y))mousePosition.push([x+1,y]);
  if(checkValid(x, y-1))mousePosition.push([x,y-1]);
  if(checkValid(x, y+1))mousePosition.push([x,y+1]);
}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      if(gridData[y][x] === true) fill(0);
      else fill(255);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }

  fill(0, 155, 0, 100);
  for(let i of mousePosition){
    rect(i[0]*rectWidth, i[1]*rectHeight, rectWidth, rectHeight);
  }
}

function checkForWin(){
  // checking if all of the items in griData are the same
  let first = gridData[0][0];
  for(let i = 0; i < NUM_ROWS; i++)
    for(let j = 0; j < NUM_COLS; j++)
      if(gridData[i][j] !== first) return false;

  won[1] = first?255:0;
  return true;
}

function checkValid(x, y){
  // checking if in bounds
  if (x >= 0 && x <= NUM_ROWS && y >= 0 && y <= NUM_COLS){
      return true;
  }
  else return false;
}