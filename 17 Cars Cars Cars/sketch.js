// Cars Cars Cars
// Talha Ali Murad
// 19-10-2023
//
// 

//  global variables
let segL = 25;
let myCar;
let numVehicles;
let vehicles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let numVehicles = 20; numVehicles > 0; numVehicles--){
    vehicles.push(new Vehicle(random(0, width)));
  }
}

function draw() {
  background(220);
  drawRoad();
  for(let index = 0; index < 20; index++){
    vehicles[index].display();
    vehicles[index].move();
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
  constructor(x){
    this.vehicleChoice = Math.floor(random(0, 2));
    this.direction = Math.floor(random(0, 2));
    this.speedChance = Math.floor(random(0, 2));
    this.color = [random(255), random(255), random(255)];
    this.x = x;
    this.y =  random(height/2 + 5, height - height/4 - 15);
    // random(height/4, height/2 - 20);
    // height/2 + 5; middle of road below line
    // height/2 - 20; middle of road above line
    // height/4; top of road
    // height - height/4 - 15; bottom of road;
    this.xTime = random(10);
    this.timeShift = 0.01;
    this.maxSpeed = random(5);
  }

  display(){
    noStroke();
    if(this.vehicleChoice===1){
      fill(this.color[0], this.color[1], this.color[2]);
      rect(this.x, this.y, 30, 15);
      fill(200, 230, 255);
      rect(this.x + 19.3, this.y - 4, 10, 5);
      rect(this.x, this.y - 4, 10, 5);
      rect(this.x + 19.3, this.y + 15, 10, 5);
      rect(this.x, this.y + 15, 10, 5);
    }
    else if(this.vehicleChoice===0){
      fill(this.color[0], this.color[1], this.color[2]);
      rect(this.x, this.y, 30, 20);
      fill(200, 230, 255);
      rect(this.x + 10, this.y, 10, 19.5);
    }
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
    if(this.speedChance===1){
      for(let s = xSpeed; s < xSpeed + 15; s++){
        xSpeed += 5;
      }
    }
  }
  speedDown(){
    if(this.speedChance===0){
      for(let s = xSpeed; s > 5; s--)
      xSpeed -= 5;
    }
  }
  changeColor(){
  }
  action(){
  }
}