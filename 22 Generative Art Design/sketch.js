// Generative Art
// Talha Ali Murad
// 11-12-2023
//

// global variables
let elipseWidth = 50, elipseHeight = 50;
let colors = ["#29A2AC", "#F6771E", "#F0C40A", "#FC2A32", "#29A2AC", "#8ED62E"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  strokeWeight(2);
  noFill();
  noLoop();
}

function draw() {
  background(0);
  renderArt();
}

function renderArt() {
  for (let i = 50; i <= 500; i+=45) {
    for (let j = 0; j <= 400; j+=1) {
      push();
      translate(width/2, height/2);
      rotate(radians(j));
      noFill();
      stroke(colors[floor(random(colors.length))]);
      ellipse(i, j, elipseWidth, elipseHeight);
      pop();
    }
  }
}