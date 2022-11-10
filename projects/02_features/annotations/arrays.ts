const carMakers: string[] = ['ford', 'toyta', 'chevy'];
const empty = [];

const empty2: any[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro'],
];

const emptyCarsByMake: string[][] = [];

// Help with inference when extracting values
const car0 = carMakers[0];
const myCar0 = carMakers.pop();

// Prevent incompatible values
carMakers.push('100');

// Help with 'map'
carMakers.map((car: string):string => {
  return car.toUpperCase();
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');