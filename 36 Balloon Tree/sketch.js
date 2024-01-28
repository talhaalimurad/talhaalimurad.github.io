// Balloon Tree
// Talha Ali Murad
// 21-01-2024

// global variables
let scale = 15;
let ang;
let dep = 0;
let levels = 7;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(1, 1000);
}

function draw() {
  background(255);
  drawTree(width/2, height*0.9, 90, levels);
  // changing the angle based on mouse position
  ang = map(mouseX, 0, width, 10, 50);
  randomSeed(seed);
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  // drawing a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(depth/1.5);
  line(x1, y1, x2, y2);
}

function drawBalloon(x, y, depth){
    strokeWeight(0.5);
    fill(random(0,255),random(0,255),random(0,255));
    // the diameter is random but based on the depth
    circle(x, y, random(15 - depth * 2, 40 - depth * 2));
  }

function keyPressed() {
  // increment or decrement value of dep using z or x
  if(key==="z") dep -= (dep===0)?0:1;
  else if(key==="x") dep += (dep===levels)?0:1;
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    // calculating endpoints of current branch using trig ratios
    // getting shorter based on depth
    let x2 = x1 + (cos(radians(angle))*depth*scale);
    let y2 = y1 - (sin(radians(angle))*depth*scale);

    drawLine(x1, y1, x2, y2, depth);

    // drawing the balloons based on the depth
    if(depth <= dep) drawBalloon(x2 , y2, depth);

    // 3 branch tree:
    drawTree(x2, y2, angle - ang, depth-1);
    drawTree(x2, y2, angle + ang, depth-1);
    drawTree(x2, y2, angle, depth-1);
  }
}