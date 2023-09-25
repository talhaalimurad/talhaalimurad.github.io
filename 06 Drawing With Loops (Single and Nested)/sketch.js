// Drawing With Single and Nested Loops
// Talha Ali Murad
// 25-09-2023
// Generating a single image with loops

// global variables
let numSegments = 50;
let segmentHeight; // height/numSegments
const GRID_SPACING = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight  =  height/numSegments;
}

function drawGrid(){
  // draws elements using nested loops
  for(let x = 0; x < width; x = x + GRID_SPACING){
    for(let y = 0; y < height; y = y + GRID_SPACING){
      fill(0);
      circle(x,y,10);

      //test 2 
      if (dist(x,y, mouseX, mouseY) < 50){
        fill(255, 0, 0);
      }
      else {
        fill(0);
      }

      //test 1
      //noCursor();
      //line(mouseX,mouseY,x,y);
    }
  }
}

function draw() {
  //noLoop()
  gradient();
  drawGrid();
}

function gradient(){
  // uses a loop to create a gradiet background
  noStroke()
  for(let i = 0; i <numSegments; i++){
    let y = i * segmentHeight;
    let fillValue = map(y,0,height,0,255);
    fill(fillValue, 255, 255)
    rect(0,y,width,segmentHeight);
  }
}