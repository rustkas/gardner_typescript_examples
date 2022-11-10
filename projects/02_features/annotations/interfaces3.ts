
interface Vehicle3 {
  summary(): string;
}

const oldCivic3 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary():string {
    return `Name: ${this.name}`;
  }
};

const printVehicle223 = (vehicle: Vehicle3): void => {
  console.log(vehicle.summary());
};
printVehicle223(oldCivic3);

interface Reportable {
  summary(): string;
}

const printVehicle223_1 = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};
printVehicle223_1(oldCivic3);

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic3);

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}`;
  }
};

printSummary(drink);
