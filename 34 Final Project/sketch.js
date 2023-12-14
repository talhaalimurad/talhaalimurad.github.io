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
let playerX;
let playerY;

function preload(){
  playerLeft = loadImage("assets/PlayerLeft.png");
  playerRight = loadImage("assets/PlayerRight.png");
  customerOneLeft = loadImage("assets/CustomerOneLeft.png");
  customerOneRight = loadImage("assets/CustomerOneRight.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
  myCustomer = new Customer(random(0, width), random(0, height));
}

function draw() {
  background(243, 238, 156);
  drawPlayer(playerX, playerY);
  myCustomer.draw();
  myCustomer.move();
}

function drawPlayer(x, y){
  if(facingRight===true) image(playerRight, x, y, 70, 70);
  else {
    image(playerLeft, x, y, 70, 70);
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
    this.facingRight = true;
    this.direction = floor(random(0, 4));
  }

  draw(){
    if(this.facingRight===true) image(customerOneRight, this.x, this.y, 60, 60);
    else image(customerOneLeft, this.x, this.y, 60, 60);

  }

  move(){
    if(frameCount%120===0){
      this.direction = floor(random(0, 4));
    }
    if(this.x >= 10 && this.x <= width - 20){
      if(this.y >= 10 && this.y <= height - 20){
        if(this.direction===0){
          this.facingRight = true;
          this.x += 2;
        }
        if(this.direction===1){
          this.facingRight = false;
          this.x -= 2;
        }
        if(this.direction===2) this.y += 2;
        if(this.direction===3) this.y -= 2;
      }
      else if(this.y >= height) this.y -= 10;
      else this.y += 10;
    }
    else if(this.x > width) this.x -= 10;
    else this.x += 10;
  }


}