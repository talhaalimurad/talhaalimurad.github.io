// Colours Demo
// Talha Ali Murad
// 25-10-2023

// global variables
let rectWidth = 50;
let rectHeight = 10;
let colors = ["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.4);
  drawCustom(width*0.7);
}

function drawRGB(x){
  colorMode(RGB);
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255), random(255), random(255));
    rect(x, y, rectWidth, rectHeight);
  }
}

function drawHSB(x){
  colorMode(HSB);
  for(let y = 0; y < height; y += rectHeight){
    fill(y/3 % 360, 360, 360);
    rect(x, y, rectWidth, rectHeight);
  }
}

function drawCustom(x){
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y < height; y += rectHeight){
    // option 1: cycle through the pallette
    fill(colors[index % colors.length]);

    // option 2: random fill selection
    fill(colors[Math.floor(random(colors.length))]);
    rect(x, y, rectWidth, rectHeight);
    index++;
  }
}