// Cars Cars Cars
// Talha Ali Murad
// 19-10-2023
// creating a road with two different types of cars going in two different directions
// the user can add more cars by left click + shift or just left click
// the user can click the spacebar to make the traffic light turn red and stop the
// vehicles, they will start moving again after 120 frames

// global variables
let car;
let trafficLight;
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // creates a traffic light object
  trafficLight = new TrafficLight();
  
  // populates the arrays
  for(let numVehicles = 40; numVehicles > 0; numVehicles--){
    let d = floor(random(0, 2));
    if( d===1) eastbound.push(new Vehicle(random(0, width), d));
    if (d===0) westbound.push(new Vehicle(random(0, width), d));
  }
}

function draw() {
  background(255);
  drawRoad();
  
  // calls the action function for each car in the arrays
  for (let car of eastbound) {
    car.action();
  }
  for (let car of westbound) {
    car.action();
  }

  // renders the traffic light
  trafficLight.action();
  trafficLight.display();
}

function drawRoad() {
  // renders a road with a dotted line through the center
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

function keyPressed(){
  // sets the traffic light to red if the space key is pressed
  if(keyCode===32) trafficLight.spacePressed();
}

function mouseClicked(){
  // adds a new car object into the specified array based on the mouse
  // and key presses
  if(mouseButton===LEFT && keyIsPressed && keyCode===SHIFT){
    eastbound.push(new Vehicle(random(0, width), 0));
  }
  else if(mouseButton===LEFT){
    westbound.push(new Vehicle(random(0, width), 1));
  }
}

class Vehicle{
  constructor(x, d){
    // creates the necessary constructors for the class
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
    this.stopTime = 0;

  }

  display(){
    // displays the vehicle based on the vehicleChoice
    noStroke();
    if(this.vehicleChoice===1){
      this.drawCar();
    }
    else{
      this.drawSunroof();
    }
  
  }

  drawCar(){
    // draws a regular car
    fill(this.color);
    rect(this.x, this.y, 30, 15);
    fill(200, 230, 255);
    rect(this.x + 19.3, this.y - 4, 10, 5);
    rect(this.x, this.y - 4, 10, 5);
    rect(this.x + 19.3, this.y  + 15, 10, 5);
    rect(this.x, this.y + 15, 10, 5);
  }

  drawSunroof(){
    // draws a car with a sunroof
    fill(this.color);
    rect(this.x, this.y, 30, 20);
    fill(200, 230, 255);
    rect(this.x + 10, this.y, 10, 19.5);
  }

  move(){
    // changes the x by xSpeed to move the car forward in the driection specified
    if(this.direction===1){
      this.x += this.xSpeed;
      if(this.x>width) this.x=0;
    }
    else if(this.direction===0){
      this.x -= this.xSpeed;
      if(this.x<0) this.x=width;
    }

  }

  speedUp(){
    // increases the xSpeed by one until it reaches a max of 15
    this.xSpeed+=1;
    if(this.xSpeed>15) this.xSpeed=15;
  }

  speedDown(){
    // decreases the xSpeed by one until its reaches a min of 1
    this.xSpeed-=1;
    if(this.xSpeed<1) this.xSpeed=1;
  }

  colorChange(){
    // chooses a random color and fills the car with it
    this.color = color(random(255), random(255), random(255));
    fill(this.color);
  }

  action(){
    // calls all of the neccessary functions in order for the program to run
    // makes sure that certain functions have a 1% chance to run each frame
    this.display(); 
    if(!trafficLight.green) return;

    if(round(random(1,100))===1){
      this.speedUp();
    }
   
    if(round(random(1,100))===1){
      this.speedDown();
    }
    
    if(round(random(1,100))===1){
      this.colorChange();
    }
    
    this.move();
  }
}

class TrafficLight{
  constructor(){
    // creates the neccessary contructors for the class
    this.green = true;
    this.stopTime = 0;
  }

  display(){
    // renders the traffic light on the screen and changes the colour based on
    // the stopTime
    fill(209, 209, 224);
    strokeWeight(2);
    stroke("grey");
    rect(width/2, height/8, 40, 60);
    
    if(this.stopTime===0) fill(153, 255, 153);
    else fill(255, 102, 102);
    ellipse(width/2 + 20, height/6.4, 30);
  }

  action(){
    // decrements the stopTime until it reaches 0 and turns the light back to green
    if(this.stopTime > 0){
      this.stopTime-=1;
      if(this.stopTime===0) this.green = true;
      return;
    }
  }

  spacePressed(){
    // sets the stopTime back to 120 and turns thee light to red
    this.stopTime=120;
    this.green=false;
  }
}