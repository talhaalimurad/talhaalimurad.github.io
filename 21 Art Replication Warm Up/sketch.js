// Art Replication
// Talha Ali Murad
// 26-10-2023
// Computer Composition With Lines

let intervals = 10;
let peak = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawArt();
}

function drawArt(){
  for(let x = 0 ; x<width; x++){
    let y = sin(x/intervals) * peak;
    point(x,y+height/2);
  }
  
}