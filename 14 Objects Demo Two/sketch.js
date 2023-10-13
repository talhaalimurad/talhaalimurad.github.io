// Objects Demo Two
// Talha Ali Murad
// 13-10-2023
//
// OOP recap, Perlin Noise + object-object Interjection

// global variables
let points = [];
let reach = 150; // max line length

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let p of points){
    p.display();
    p.move();
    p.connectpoints(points);
  }
}

function mouseClicked(){
  // trigger on a full press/release mouse interaction
  points.push(new MovingPoint(mouseX, mouseY));
}

class MovingPoint{
  // constructor x, y, c(color), s(size)
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.s = 20;
    this.c = color(random(255), random(255), random(255));
    this.xTime = random(10);
    this.yTime = random(10);
    this.timeShift = 0.01;
    this.maxSpeed = 5;
  }

  // class functions
  display(){
    fill(this.c);
    noStroke();
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < reach){
      this.s = map(d, 0, reach, 60, 20);
    }
    else{
      this.s = 20;
    }
    circle(this.x, this.y, this.s);
  }

  connectpoints(pointArray){
    // check if any other points are nearby, if so connect with a line
    // this.x this.y
    stroke(this.c);
    for(let p of pointArray){
      if(p !== this){ // make sure p is not myself
        let d = dist(this.x, this.y, p.getX(), p.getY());
        if(d < reach){ // points are close
          line(this.x, this.y, p.getX(), p.getY());
        }
      }
    }
  }

  getX(){return this.x};
  getY(){return this.y};

  move(){
    // motion with Perlin Noise
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;
    this.x += xSpeed;
    
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;
    this.y += ySpeed;

    // wrap around code
    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width
    if(this.y < 0) this.y += height;
    if(this.y > height) this.y -= height;
  }
}