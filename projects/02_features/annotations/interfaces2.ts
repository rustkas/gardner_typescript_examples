
interface Vehicle2 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary():string {
    return `Name: ${this.name}`;
  }
};

const printVehicle22 = (vehicle: Vehicle2): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
  console.log(vehicle.summary());
};
printVehicle22(oldCivic2);