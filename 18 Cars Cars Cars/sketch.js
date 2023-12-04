// Cars Cars Cars
// Talha Ali Murad
// 19-10-2023

let car;
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let numVehicles = 20; numVehicles > 0; numVehicles--){
    let d = floor(random(0, 2));
    if( d===1) eastbound.push(new Vehicle(random(0, width), d));
    if (d===0) westbound.push(new Vehicle(random(0, width), d));
  }
}

function draw() {
  background(255);
  drawRoad();
  for (let car of eastbound) {
    car.action();
  }
  for (let car of westbound) {
    car.action();
  }
}

function drawRoad() {
  let segL = 25;
  fill(0);
  stroke(0);
  rect(0, height / 4, width, height / 2);

  let x = 0;
  while (x < width) {
    stroke(255);
    strokeWeight(5);
    line(x, height / 2, x + 8, height / 2);
    x += segL;
  }
}

class Vehicle{
  constructor(x, d){
    this.x = x;
    if(d===1){
      this.y = random(height / 4, height / 2 - 20);
    }
    else{
      this.y=random(height / 2 + 5, height - height / 4 - 15);
    }

    this.direction = d;
    this.xSpeed = 5;
    this.color = color(random(255), random(255), random(255));
    this.vehicleChoice = Math.floor(random(0, 2));

  }

  display(){
    noStroke();
    if(this.vehicleChoice===1){
      this.drawCar();
    }
    else{
      this.drawSunroof();
    }
  
  }

  drawCar(){
    fill(this.color);
    rect(this.x, this.y, 30, 15);
    fill(200, 230, 255);
    rect(this.x + 19.3, this.y - 4, 10, 5);
    rect(this.x, this.y - 4, 10, 5);
    rect(this.x + 19.3, this.y  + 15, 10, 5);
    rect(this.x, this.y + 15, 10, 5);
  }

  drawSunroof(){
    fill(this.color);
    rect(this.x, this.y, 30, 20);
    fill(200, 230, 255);
    rect(this.x + 10, this.y, 10, 19.5);
  }

  move(){
    if(this.direction===1){
      this.x += this.xSpeed;
      if(this.x>width)this.x=0;
    }
    else if(this.direction===0){
      this.x -= this.xSpeed;
      if(this.x<0)this.x=width;
    }

  }

  speedUp(){
    this.xSpeed+=1;
    if(this.xSpeed>15)this.xSpeed=15;
  }

  speedDown(){
    this.xSpeed-=1;
    if(this.xSpeed<1)this.xSpeed=1;
  }

  action(){
    
    if(round(random(1,100))===1){
      this.speedUp();
    }
   
    if(round(random(1,100))===1){
      this.speedDown();
    }
    
    if(round(random(1,100))===1){
      print("colorChange");
      //this.colorChange();
    }
    
    this.move();
    this.display();
  }
}