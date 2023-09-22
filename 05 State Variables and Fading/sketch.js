// State Variables And Fading
// Talha Ali Murad
// 22-09-2023
// a look at state variables and a fading effect

// global variables
let mouseSide;
let fillValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}

function updateMouseState(){
  // looks at the mouse position and updates our "system variable" mouseSide
  if(mouseX > width/2){
    mouseSide = "right";
  }
  else mouseSide = "left";
  print(mouseSide);
}

function renderSquares(){
  // draws two rectangles on the screen
  if(mouseSide === "left") fill(0);
  else fill(255);
  rect(0,0,width/2,height);

  if (mouseSide === "right"){
    fillValue = 0;
    fill(fillValue);
  }
  else {
    fill(fillValue);
    fillValue += 1;
  }
  rect(width/2,0,width/2,height);  
}
