// P5 Drawing Basics
// Talha Murad
// 09/12/2023
//

//global variables
let busX = 100, busY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() { //keep this as clean as possible
  background(230);
  drawBus();
  moveBus();

}

function drawBus(){
  fill(255);
  rect(50 + busX, 50, 100, 50);
  fill(0);
  circle(75 + busX, 100, 20);
  circle(125 + busX, 100, 20);
}

function moveBus() {
  //move the bus
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      busX = busX - 10
    }
    if (keyCode === RIGHT_ARROW) {
      busX = busX + 10;
    }
  }
}