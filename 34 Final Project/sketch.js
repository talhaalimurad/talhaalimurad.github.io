// Final Project
// Talha Ali Murad
// 12-12-2023
// Monkey Mart Replica Game

// global variables
let playerLeft;
let playerRight;
let facingRight = true;
let playerX;
let playerY;

function preload(){
  playerLeft = loadImage("assets/Player Left.png");
  playerRight = loadImage("assets/Player Right.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
}

function draw() {
  background(243, 238, 156);
  drawPlayer(playerX, playerY);
}

function drawPlayer(x, y){
  if(facingRight===true) image(playerRight, x, y);
  else {
    image(playerLeft, x, y);
  }

  if(keyIsDown(RIGHT_ARROW)){
    playerX += 5;
    facingRight = true;
  }
  if(keyIsDown(LEFT_ARROW)){
    playerX -= 5;
    facingRight = false;
  }
  if(keyIsDown(DOWN_ARROW)) playerY += 5;
  if(keyIsDown(UP_ARROW)) playerY -= 5; 
}