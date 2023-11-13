// Cars Cars Cars
// Talha Ali Murad
// 19-10-2023
//
// 

//  global variables
let segL = 25;
let myCar;
let numVehicles;
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let numVehicles = 20; numVehicles > 0; numVehicles--){
    let d = Math.floor(random(0, 2));
    if(d===1) eastbound.push(new Vehicle(random(0, width), d));
    if(d===0) westbound.push(new Vehicle(random(0, width), d));
  }
}

function draw() {
  background(255);
  drawRoad();
  for(let car of eastbound){
    car.display();
    car.move();
  }
  for(let car of westbound){
    car.display();
    car.move();
  }
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
    x += segL;
  }
}

class Vehicle{
  constructor(x, d){
    this.vehicleChoice = Math.floor(random(0, 2));
    this.direction = d;
    this.speedChance = Math.floor(random(0, 100));
    this.color = [random(255), random(255), random(255)];
    this.x = x;
    this.yEast = random(height/4, height/2 - 20);
    this.yWest =  random(height/2 + 5, height - height/4 - 15);
    // this.xTime = random(10);
    // this.timeShift = 0.01;
    // this.maxSpeed = random(5);
    this.xSpeed = 5;
    this.maxSpeed = 10;
  }

  display(){
    noStroke();
    if(this.direction===1){
      if(this.vehicleChoice===1){
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.x, this.yEast, 30, 15);
        fill(200, 230, 255);
        rect(this.x + 19.3, this.yEast - 4, 10, 5);
        rect(this.x, this.yEast - 4, 10, 5);
        rect(this.x + 19.3, this.yEast + 15, 10, 5);
        rect(this.x, this.yEast + 15, 10, 5);
      }
      else if(this.vehicleChoice===0){
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.x, this.yEast, 30, 20);
        fill(200, 230, 255);
        rect(this.x + 10, this.yEast, 10, 19.5);
      }
    }
    else{
      if(this.vehicleChoice===1){
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.x, this.yWest, 30, 15);
        fill(200, 230, 255);
        rect(this.x + 19.3, this.yWest - 4, 10, 5);
        rect(this.x, this.yWest - 4, 10, 5);
        rect(this.x + 19.3, this.yWest + 15, 10, 5);
        rect(this.x, this.yWest + 15, 10, 5);
      }
      else if(this.vehicleChoice===0){
        fill(this.color[0], this.color[1], this.color[2]);
        rect(this.x, this.yWest, 30, 20);
        fill(200, 230, 255);
        rect(this.x + 10, this.yWest, 10, 19.5);
      }
    }
  }

  move(){
    if(this.direction===1){
      // let xSpeed = noise(this.xTime);
      // xSpeed = map(xSpeed, 0, 1, this.maxSpeed, this.maxSpeed);
      // this.xTime += this.timeShift;
      this.x += this.xSpeed;
    }

    else if(this.direction===0){
      this.x -= this.xSpeed;
    }

    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
  }

  speedUp(){
    for(let s = 0; s < this.maxSpeed; s++){
      this.xSpeed += 5;
    }
  }
  
  speedDown(){
    for(let s = this.xSpeed; s > 2; s--){
      this.xSpeed -= 5;
    }
  }

  changeColor(){
  }
  action(){
    this.display();
    this.move();
    if(this.speedChance===1){
      this.speedUp();
    }
    else if(this.speedChance===0){
      this.speedDown();
    }
    this.changeColor();
  }
}