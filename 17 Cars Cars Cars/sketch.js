// Cars Cars Cars
// Talha Ali Murad
// 19-10-2023
//
// 

//  global variables
let segW = 25;
let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Vehicle(width/2);
}

function draw() {
  background(220);
  drawRoad();
  myCar.display();
  myCar.move();
}

function drawRoad(){
  // draws a road with a dotted line through the centre
  fill(0);
  stroke(0);
  rect(0, height/4, width, height/2);

  let x = 0;
  while(x < width){
    stroke(255);
    strokeWeight(5);
    line(x, height/2, x + 8, height/2);
    x += segW;
  }
}

class Vehicle{
  constructor(x){
    this.choice = Math.floor(random(0, 1));
    this.direction = Math.floor(random(0, 2));
    this.color = [random(255), random(255), random(255)];
    this.x = x;
    this.y = random(height/4, height/2);
    this.xTime = random(10);
    this.timeShift = 0.01;
    this.maxSpeed = random(5);
  }

  display(){
    noStroke();
    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.x, this.y, 25, 15);
  }

  move(){
    if(this.direction===1){
      let xSpeed = noise(this.xTime);
      xSpeed = map(xSpeed, 0, 1, this.maxSpeed, this.maxSpeed);
      this.xTime += this.timeShift;
      this.x += xSpeed;
    }

    else if(this.direction===0){
      let xSpeed = noise(this.xTime);
      xSpeed = map(xSpeed, 0, 1, this.maxSpeed, this.maxSpeed);
      this.xTime += this.timeShift;
      this.x -= xSpeed;
    }

    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
  }

  speedUp(){

  }

  speedDown(){

  }

  changeColor(){
  }

  action(){

  }
}