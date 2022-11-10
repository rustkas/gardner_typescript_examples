class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  hock(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}
const vehicle = new Vehicle();
vehicle.drive();
vehicle.hock();

const car = new Car();
car.drive();
car.hock();
