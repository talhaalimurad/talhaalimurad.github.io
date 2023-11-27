// Local Storage and p5 Sound Library
// Talha Ali Murad
// 27-11-2023
// 

// Global Variables
let ball;
let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width/2, height/2);
}

function draw() {
  background(220);
  ball.move();
  ball.display();
}

class Ball{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(-6, 6), random(0, -6));
  }

  display(){
    circle(this.pos.x, this.pos.y, 30);
  }

  move(){
    this.pos.add(this.vel);
  }
}