const drink = {
  color: 'brown',
  caronated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

if(false) {
  const pepsi: [string, boolean, number] = ['brown', true, 40];
  console.log(pepsi);
}else {
  const pepsi: Drink = ['brown', true, 40];
  console.log(pepsi);
}
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsePower: 400,
  weight: 3354
}