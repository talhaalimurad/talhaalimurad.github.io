// Selection Sort Demo
// Talha Ali Murad
// 03-11-2023
//  An implementation of the selection sorting algortihm

// global variables
let values = [];
const NUM_VALUES = 20;

function setup() {
  randomSeed(10); // debugging
  noCanvas();
  populateArray();
  selectionSort();
  print(values);
}

function selectionSort(){
  // sorting the data
  for(let index = 0; index < values.length - 1; index++){
    let minimum = values[index];
    let minimumLoc = index;
    for(let searchIndex = index + 1; searchIndex < values.length; searchIndex++){
      let cur = values[searchIndex];
      if(cur < minimum){
        minimum = cur;
        minimumLoc = searchIndex;
      }
    }
    let temp = values[index];
    values[index] = values[minimumLoc];
    values[minimumLoc] = temp;
  }
}

function populateArray(){
  // fill the array with NUM_VALUES number of items
  for(let i = 0; i < NUM_VALUES; i++){
    values.push(floor(random(1000)));
  }
}