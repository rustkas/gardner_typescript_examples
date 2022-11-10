class Vehicle3 {
  constructor(public color: string){}

  protected honk(): void {
    console.log('beep');
  }
}

class Car3 extends Vehicle3 {
  constructor(public wheels:number, color: string){
    super(color);
  }
  startDrivingProcess(): void {
    this.honk();
    console.log(`Car color is ${this.color}`);
  }
}

const vehicle3_1 = new Vehicle3('orange');
console.log(vehicle3_1.color);

const car3_1 = new Car3(4,'red'); 