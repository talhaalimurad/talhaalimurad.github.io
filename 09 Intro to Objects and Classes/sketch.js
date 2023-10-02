// Intro to Objects and Classes
// Talha Ali Murad
// 10-02-2023
//
// Random walker class + multiple objects

// global variables
let w = [];
const NUM_WALKERS = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_WALKERS; i++){
    let randColor = color(random(255), random(255), random(255));
    w.push(new Walker(width/2, height/2, randColor));
  }
}

function draw() {
  // background(220);
  for(let current of w){
    current.move();
    current.display();
  }
}

class Walker {
  // class constructor and properties
  constructor(x, y, c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.size = random(20);
    this.speed = random(10);
  }

  // class methods
  move(){ // equally likely chace to move in any direction
    let moveChoice = Math.floor(random(0,4));
    if(moveChoice===0) this.y -= this.speed; // LEFT
    else if(moveChoice===1) this.y += this.speed; // RIGHT
    else if(moveChoice===2) this.x -= this.speed; // UP
    else this.x += this.speed; // DOWN
  }

  display(){ // render the walker on the screen at x, y
    rectMode(CENTER);
    noStroke();
    fill(this.c);
    square(this.x, this.y, this.size);
  }
}