const apples = 5;
let speed: string = 'fast';
let nothingMuch: null = null;
let nothin: undefined = undefined;

// built in objects
let node: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "10":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// When we declare a variable on one line
//  and initialize it leter
let words = ['red', 'green', 'blue'];
let foundWord = false;

for(let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;
for(let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
