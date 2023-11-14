// Recaman Sequence
// Talha Ali Murad
// 14-11-2023
// OOP Practice + Interesting Nuber Sequence + lerp(), dynamic scaling


// global variables
// let cX = 0;
let sequence = [];
let arcList = [];
let stepAmount = 1;
let currentValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function addToSequence(){
  // generate the next number in the recamen sequence
  let backwards = currentValue - stepAmount;
  if(backwards > 0 && !sequence.includes(backwards)){
    // drawing stuff here
    arcList.push(new rArc(currentValue, backwards, sequence.length%2));
    sequence.push(backwards);
    currentValue = backwards;
    stepAmount++;
  }
  else{
    let forwards = currentValue + stepAmount;
    // drawing stuff here
    arcList.push(new rArc(currentValue, forwards, sequence.length%2));
    sequence.push(forwards);
    currentValue = forwards;
    stepAmount++;
    if(currentValue > largest) largest = currentValue;
  }
}

function draw() {
  background(0);
  // temp code
  // cX = lerp(cX, mouseX, 0.1);
  // circle(cX, height/2, 20); 
  translate(0, height/2);
  addToSequence();
  scaleAmount = lerp(scaleAmount, width/largest, 0.05);
  renderArcs();
}

class rArc{
  constructor(start, end, direction){
    this.start = start;
    this.end = end;
    this.direction = direction;
  }

  display(){
    let diameter = abs(this.start - this.end);
    let x = (this.start + this.end) / 2;
    strokeWeight(0.5);
    if(this.direction===0){
      arc(x, 0, diameter, diameter, 0, PI);
    }
    else{
      arc(x, 0, diameter, diameter, PI, 0);
    }
  }
}