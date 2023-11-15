// Farm Game Demo
// Talha Ali Murad
// 15-11-2023
// Creating a tile-based gameboard with a block pusher mechanic

// global variables
let tiles = [];
let level = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
const COLUMNS = 5;
const ROWS = 5;
const TILE_SIZE = 100;
let playerX = 3;
let playerY = 4;


function preload(){
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/" + i + ".png"));
  }
}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
}

function draw() {
  background(220);
}
