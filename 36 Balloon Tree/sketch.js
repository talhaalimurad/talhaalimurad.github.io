// Balloon Tree
// Talha Ali Murad
// 21-01-2024

let scl = 15, ang, seed, dep=0, levels = 7; // set value of levels to change depth of tree
function setup() {
  seed=random(1,1000);//pick a seed for current instance of program
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function draw() {
  background(255);
  ang=map(mouseX, 0, width, 10, 50);//set angle based on mouse pos
  randomSeed(seed);//reset seed after every frame to reset random calls
  drawTree(width/2, height*.9, 90, levels);
}
function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(depth/1.5);
  line(x1, y1, x2, y2);
}
function drawCircle(x,y,depth){
  strokeWeight(0.5);
  fill(random(0,255),random(0,255),random(0,255));
  circle(x,y,random(15 - depth*2, 40 - depth*2));//diameter is random, but based on depth
}
function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scl); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scl); //using trig ratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);
    if(depth<=dep) drawCircle(x2,y2,depth); //draw balloon if on correct depth
    
    //for a 3-branch tree:
    drawTree(x2, y2, angle-ang, depth-1);
    drawTree(x2, y2, angle, depth-1);
    drawTree(x2, y2, angle+ang, depth-1);
  }
}

function keyPressed() {//increment or decrement value of dep, the ternary operations are to cap dep at max and min
  if(key==='z')dep-=(dep===0)?0:1;
  else if(key==='x')dep+=(dep===levels)?0:1;
}
