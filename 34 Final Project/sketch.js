// Final Project
// Talha Ali Murad
// 12-12-2023
// Monkey Mart Replica Game

// global variables
let playerLeft;
let playerRight;
let customerOneLeft;
let customerOneRight;
let facingRight = true;
let myCustomer;
this.walkTime = 60;
let playerX;
let playerY;

function preload(){
  playerLeft = loadImage("assets/Player Left.png");
  playerRight = loadImage("assets/Player Right.png");
  customerOneLeft = loadImage("assets/CustomerOne Right.png");
  customerOneRight = loadImage("assets/CustomerOne Right.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
  myCustomer = new Customer(width/2, height/2);
}

function draw() {
  background(243, 238, 156);
  drawPlayer(playerX, playerY);
  myCustomer.draw();
  myCustomer.move();
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

class Customer{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.type;
    this.customers = [];
    this.facingRight = true;
    this.direction = floor(random(0, 4));
  }

  draw(){
    if(this.facingRight===true) image(customerOneRight, this.x, this.y, 55, 55);

  }

  move(){
    this.direction = floor(random(0, 4));
    if(this.x >= 10 && this.x <= width){
      if(this.y >= 10 && this.y <= height){
        if(this.direction===0) this.x += 4;
        if(this.direction===1) this.x -= 4;
        if(this.direction===2) this.y += 4;
        if(this.direction===3) this.y -= 4;
      }
    }
  }
}