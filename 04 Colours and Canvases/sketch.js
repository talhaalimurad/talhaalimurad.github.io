// Colours and Canvases
// Talha Ali Murad
// 09/13/2023
// Playing around with colours and layers

// Global Variables
let ballX, xSpeed = 5, ballSize = 50; // declarations
let overlay; // "extra canvas"
let colorA, colorB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  overlay = createGraphics(width, height);
  ballX = width/2;
  colorA = color(200,100,0);
  colorB = color("yellow");
}

function mouseRectangle(){
  // Draw a rectangle at the mouse position
  if(keyIsPressed){
    if(key==="a") overlay.fill(colorA);
    if(key==="b") overlay.fill(colorB);
    overlay.rect(mouseX, mouseY, 50, 25);
  }
  image(overlay, 0, 0);
  
}

function draw() {
  background(220);
  mouseRectangle();
  drawAndMoveBall();
}

function drawAndMoveBall(){
  // update the ball's position
  ballX = ballX + xSpeed;
  // decide if we need to change directions
  if(ballX + ballSize/2 >= width || ballX - ballSize/2 <= 0){
    xSpeed *= -1;
  }
  // render the ball on the screen
  fill(0);
  circle(ballX, height/2, ballSize);
}