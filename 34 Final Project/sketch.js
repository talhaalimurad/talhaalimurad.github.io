// Final Project
// Talha Ali Murad
// 12-12-2023
// Monkey Mart Replica Game
// Wow factor - I managed to incorporate NPCs into my program allowing for AFK gameplay
//            - Picking up and dropping object mechanics

// global variables
let playerLeft, playerRight;
let playerX, playerY;
let facingRight = true;
let customerLeft, customerRight;
let employeeLeft, employeeRight;
let treeOne, treeTwo;
let banana;
let playerHoldingBanana = false;
let coconut; 
let playerHoldingCoconut = false;
let bananaStall;
let coconutStall;
let employeeUpgradeButton, employeeUpgradeButtonTwo;
let customerUpgradeButton, customerUpgradeButtonTwo;
let score = 0;
let customers = [], employees = [];

function preload(){
  // loading all of the images before the program starts
  playerLeft = loadImage("assets/PlayerLeft.png");
  playerRight = loadImage("assets/PlayerRight.png");
  customerLeft = loadImage("assets/CustomerOneLeft.png");
  customerRight = loadImage("assets/CustomerOneRight.png");
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
  imageMode(CENTER);
  playerX = width/2;
  playerY = height/2;
}

function draw() {
  background(243, 238, 156);
  // calling all functions
  sellProducts();
  scoreBoard();
  bananaTree();
  coconutTree();
  upgradeButtons();

  // calling update() for every object in the array
  for(let employee of employees) employee.update();
  for(let customer of customers) customer.update();
  drawPlayer(playerX, playerY);
}

function drawPlayer(x, y){
  // drawing a player monkey that is controlled by the user using the arrow keys
  // the player faces right or left based on what key is pressed
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
  // calculating the distance between two points
  let a = Math.abs(x1-x2);
  let b = Math.abs(y1-y2);
  let c = Math.sqrt(a*a + b*b);
  return c;
}

function sellProducts(){
  // displaying the banana and coconut stalls onscreen
  image(bananaStall, 120, 700, 230, 230);

  // calculating the distance between the player and the stall
  playerDistance = distance(playerX, playerY, 120, 700);

  // once the player is in range of the stall the banana is taken and score in increased
  if(playerDistance < 50){
    if(playerHoldingBanana){
      playerHoldingBanana = false;
      score+=20;
    }
  }

  image(coconutStall, 120, 100, 230, 230);
  playerDistance = distance(playerX, playerY, 120, 100);
  if(playerDistance < 50){
    if(playerHoldingCoconut){
      playerHoldingCoconut = false;
      score+=10;
    }
  }
}

function scoreBoard(){
  // displaing the score onscreen
  textFont("calibri");
  textSize(20);
  fill(214, 207, 94);
  text("MONEY: $" + score, width/2 - 40, 100);
}

function mouseClicked(){
  // adding a new customer or employee object if the upgrade button is clicked
  let mouseDistance = distance(mouseX, mouseY, width/2 + 50, 700);

  // to upgrade customers or employees a minimum score of 50 is required
  if(mouseDistance < 50 && score >= 50){
    customers.push(new Customer(random(0, width), random(0, height)));
    score-=50;
  }

  mouseDistance = distance(mouseX, mouseY, width/2 - 50, 700);
  if(mouseDistance < 50 && score >= 50){
    employees.push(new Employee(random(0, width), random(0, height)));
    score -= 50;
  }
}

function bananaTree(){
  // displaying a banana tree onscreen
  let playerDistance;
  playerDistance = distance(playerX, playerY, 680, 120);
  image(treeOne, 680, 100, 230, 230);

  // if the player is in range of the tree a banana apears above them
  if(playerDistance < 50){
    playerHoldingBanana = true;
  }
  if(playerHoldingBanana===true){
    image(banana, playerX, playerY - 50, 50, 40);
  }
}

function coconutTree(){
  // displaying a coconut tree onscreen
  let playerDistance;
  playerDistance = distance(playerX, playerY, 680, 690);
  image(treeTwo, 680, 690, 230, 230);

  // when the payer is in range a coconut is displayed above them
  if(playerDistance < 50){
    playerHoldingCoconut = true;
  }
  if(playerHoldingCoconut===true){
    image(coconut, playerX, playerY - 50, 50, 40);
  }
}

function upgradeButtons(){
  // when the mouse is hovering over the upgrade buttons the image changes
  let mouseDistance;
  image(employeeUpgradeButton, width/2 - 50, 700);
  mouseDistance = distance(mouseX, mouseY, width/2 - 50, 700);
  if(mouseDistance < 50){
    image(employeeUpgradeButtonTwo, width/2 - 50, 700);
  }

  image(customerUpgradeButton, width/2 + 50, 700);
  mouseDistance = distance(mouseX, mouseY, width/2 + 50, 700);
  if(mouseDistance < 50){
    image(customerUpgradeButtonTwo, width/2 + 50, 700);
  }
}

class Monkey{
  // creating a parent class with random movement, picking up object mechanics, 
  // and dropping object mechanincs that are applicable to all NPCs
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.facingRight = true;
    this.direction = floor(random(0, 4)); 
    this.monkeyHoldingBanana = false;
    this.monkeyHoldingCoconut = false;
  }

  move(){
    // the monkey objects choose a random direction to move every 120 frames
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

  pickUp(){
    // when in range of the trees the monkey objects pick up bananas and coconuts
    this.monkeyDistance = distance(this.x, this.y, 680, 120);
    if(this.monkeyDistance < 50){
      this.monkeyHoldingBanana = true;
    }
    if(this.monkeyHoldingBanana){
      image(banana, this.x, this.y - 50, 50, 40);
    }

    this.monkeyDistance = distance(this.x, this.y, 680, 690);
    if(this.monkeyDistance < 50){
      this.monkeyHoldingCoconut = true;
    }
    if(this.monkeyHoldingCoconut){
      image(coconut, this.x, this.y - 50, 50, 40);
    }
  }

  purchaseOrSell(){
    // when in range of the stalls the bananas and coconuts are taken and the score is increased
    this.monkeyDistance = distance(this.x, this.y, 120, 700);
    if(this.monkeyDistance < 50){
      if(this.monkeyHoldingBanana===true){
        this.monkeyHoldingBanana = false;
        score+=20;
      }
    }

    this.monkeyDistance = distance(this.x, this.y, 120, 100);
    if(this.monkeyDistance < 50){
      if(this.monkeyHoldingCoconut===true){
        this.monkeyHoldingCoconut = false;
        score+=10;
      }
    }
  }

  update(){
    // running all of the necessary functions
    this.draw();
    this.move();
    this.pickUp();
    this.purchaseOrSell();
  }
}

class Employee extends Monkey{
  constructor(x, y){
    // inheriting from the parent class
    super(x, y);
  }
    
  draw(){
    // diplaying a different image for the employees
    if(this.facingRight===true) image(employeeRight, this.x, this.y, 55, 60);
    else image(employeeLeft, this.x, this.y, 55, 60);
  }
}

class Customer extends Monkey{
  constructor(x, y){
    super(x, y);
  }

  draw(){
    // displaying a different image for the customers
    if(this.facingRight===true) image(customerRight, this.x, this.y, 55, 60);
    else image(customerLeft, this.x, this.y, 55, 60);
  }
}