// Final Project
// Talha Ali Murad
// 12-12-2023
// Monkey Mart Replica Game

// global variables
let playerLeft, playerRight;
let playerX, playerY;
let facingRight = true;
let customerOneLeft, customerOneRight, myCustomer;
let employeeLeft, employeeRight, myEmployee;
let treeOne, treeTwo;
let banana, myBananaTree, holdingBanana = false;
let coconut, myCoconutTree, holdingCoconut = false;
let bananaStall, bananaStallD;
let coconutStall, coconutStallD;
let employeeUpgradeButton, employeeUpgradeButtonTwo;
let customerUpgradeButton, customerUpgradeButtonTwo;
let score = 0;
let customers = [], employees = [];

function preload(){
  // loading all of the images before the program starts
  playerLeft = loadImage("assets/PlayerLeft.png");
  playerRight = loadImage("assets/PlayerRight.png");
  customerOneLeft = loadImage("assets/CustomerOneLeft.png");
  customerOneRight = loadImage("assets/CustomerOneRight.png");
  employeeLeft = loadImage("assets/EmployeeLeft.png");
  employeeRight = loadImage("assets/EmployeeRight.png");
  treeOne = loadImage("assets/BananaTree.png");
  treeTwo = loadImage("assets/CoconutTree.png");
  banana = loadImage("assets/Banana.png");
  bananaStall = loadImage("assets/BananaStall.png");
  coconut = loadImage("assets/Coconut.png");
  coconutStall = loadImage("assets/CoconutStall.png");
  employeeUpgradeButton = loadImage("assets/UpgradeButton.png");
  employeeUpgradeButtonTwo = loadImage("assets/UpgradeButtonTwo.png");
  customerUpgradeButton = loadImage("assets/UpgradeButtonC.png");
  customerUpgradeButtonTwo = loadImage("assets/UpgradeButtonCTwo.png");
}

function setup() {
  createCanvas(800, 800);
  playerX = width/2;
  playerY = height/2;
  imageMode(CENTER);

  // creating objects
  myBananaTree = new bananaTree(playerX, playerY - 50);
  myCoconutTree = new coconutTree(playerX, playerY - 50);
}

function draw() {
  background(243, 238, 156);
  Stalls();
  bananaTree();
  coconutTree();
  upgrade();
  print(customers);
  for(let employee of employees) employee.update();
  for(let customer of customers) customer.update();
  drawPlayer(playerX, playerY);
}

function drawPlayer(x, y){
  // drawing a player monkey that is controlled by the user using the arrow keys
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

function distance(x1, y1, x2, y2){
  let a = Math.abs(x1-x2);
  let b = Math.abs(y1-y2);
  let c = Math.sqrt(a*a + b*b);
  return c;
}

function Stalls(){
  image(bananaStall, 120, 700, 230, 230);
  bananaStallD = distance(playerX, playerY, 120, 700);
  if(bananaStallD < 50){
    if(holdingBanana){
      holdingBanana = false;
      score+=20;
      print(score);
    }
  }
  image(coconutStall, 120, 100, 230, 230);
  coconutStallD = distance(playerX, playerY, 120, 100);
  if(coconutStallD < 50){
    if(holdingCoconut){
      holdingCoconut = false;
      score+=10;
    }
  }
  textFont("calibri");
  textSize(20);
  fill(214, 207, 94);
  text("MONEY: $" + score, width/2 - 40, 100);
}

function bananaTree(){
  let d;
  d = distance(playerX, playerY, 680, 120);
  image(treeOne, 680, 100, 230, 230);
  if(d < 50){
    image(banana, playerX, playerY - 50, 50, 40);
    holdingBanana = true;
  }
  if(holdingBanana===true) image(banana, playerX, playerY - 50, 50, 40);
}

function coconutTree(){
  let d;
  d = distance(playerX, playerY, 680, 690);
  image(treeTwo, 680, 690, 230, 230);
  if(d < 50){
    image(coconut, playerX, playerY - 50, 50, 40);
    holdingCoconut = true;
  }
  if(holdingCoconut===true) image(coconut, playerX, playerY - 50, 50, 40);
}

function mouseClicked(){
  let d = distance(mouseX, mouseY, width/2 + 50, 700);
  if(d < 50 && score >= 50){
    customers.push(new Customer(random(0, width), random(0, height)));
    score-=50;
  }

  let d2 = distance(mouseX, mouseY, width/2 - 50, 700);
  if(d2 < 50 && score >= 50){
    employees.push(new Employee(random(0, width), random(0, height)));
    score -= 50;
  }
}

function upgrade(){
  let d;
  image(employeeUpgradeButton, width/2 - 50, 700);
  d = distance(mouseX, mouseY, width/2 - 50, 700);
  if(d < 50){
    image(employeeUpgradeButtonTwo, width/2 - 50, 700);
  }

  image(customerUpgradeButton, width/2 + 50, 700);
  d = distance(mouseX, mouseY, width/2 + 50, 700);
  if(d < 50){
    image(customerUpgradeButtonTwo, width/2 + 50, 700);
  }
}

class Monkey{
  // creating a parent class with the random movement and picking up object mechanics
  // that are applicable to all NPCs
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

  update(){
    this.draw();
    this.move();
  }
}

class Employee extends Monkey{
  constructor(x, y){
    // inheriting from the parent class
    super(x, y);
  }
    
  draw(){
    if(this.facingRight===true) image(employeeRight, this.x, this.y, 55, 60);
    else image(employeeLeft, this.x, this.y, 55, 60);
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
}