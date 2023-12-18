// Final Project
// Talha Ali Murad
// 12-12-2023
// Monkey Mart Replica Game

// global variables
let playerLeft, playerRight;
let playerX, playerY;
let facingRight = true;
let customerOneLeft, customerOneRight;
let employeeLeft, employeeRight;
let myEmployee;
let myCustomer;
let shelf;
let myShelf;

function preload(){
  playerLeft = loadImage("assets/PlayerLeft.png");
  playerRight = loadImage("assets/PlayerRight.png");
  customerOneLeft = loadImage("assets/CustomerOneLeft.png");
  customerOneRight = loadImage("assets/CustomerOneRight.png");
  employeeLeft = loadImage("assets/EmployeeLeft.png");
  employeeRight = loadImage("assets/EmployeeRight.png");
  shelf = loadImage("assets/Shelf.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
  myCustomer = new Customer(random(0, width), random(0, height));
  myEmployee = new Employee(random(0, width), random(0, height));
  myShelf = new Shelf(20, 20);
}

function draw() {
  background(243, 238, 156);
  myShelf.display();
  myCustomer.update();
  myEmployee.update();
  drawPlayer(playerX, playerY);
}

function drawPlayer(x, y){
  if(facingRight===true) image(playerRight, x, y, 70, 70);
  else {
    image(playerLeft, x, y, 70, 70);
  }

  if(keyIsDown(RIGHT_ARROW)){
    playerX += 5;
    facingRight = true;
    if(playerX >= width) playerX -= width;
  }
  if(keyIsDown(LEFT_ARROW)){
    playerX -= 5;
    facingRight = false;
    if(playerX <= 0) playerX += width;
  }
  if(keyIsDown(DOWN_ARROW)){
    playerY += 5;
    if(playerY >= height) playerY -= height;
  }

  if(keyIsDown(UP_ARROW)){
    playerY -= 5;
    if(playerY <= 0) playerY += height;
  }
}

class Monkey{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.facingRight = true;
    this.direction = floor(random(0, 4)); 
  }

  move(){
    if(frameCount%120===0){
      this.direction = floor(random(0, 4));
    }
    if(this.x >= 0 && this.x <= width){
      if(this.y >= 0 && this.y <= height){
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
      else if(this.y >= height) this.y -= height;
      else this.y += height;
    }
    else if(this.x >= width) this.x -= width;
    else this.x += width;
  }
}

class Employee extends Monkey{
  constructor(x, y){
    super(x, y);
  }
    
  draw(){
    if(this.facingRight===true) image(employeeRight, this.x, this.y, 55, 60);
    else image(employeeLeft, this.x, this.y, 55, 60);
  }

  update(){
    myEmployee.draw();
    myEmployee.move();
  }

  stockProduct(){
  }
}

class Customer extends Monkey{
  constructor(x, y){
    super(x, y);
  }

  draw(){
    if(this.facingRight===true) image(customerOneRight, this.x, this.y, 55, 60);
    else image(customerOneLeft, this.x, this.y, 55, 60);
  }

  update(){
    myCustomer.draw();
    myCustomer.move();
  }

  BuyProduct(){
  }
}

class Shelf{
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
  }

  display(){
    image(shelf, this.x, this.y, 190, 190);
  }
}