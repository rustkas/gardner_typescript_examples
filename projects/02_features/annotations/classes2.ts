class Vehicle2 {
  color: string = 'red';

  constructor(color:string){
    this.color = color;
  }
  public drive(): void {
    console.log("chugga chugga");
  }
  protected honk(): void {
    console.log("beep");
  }
}

class Car2 extends Vehicle2 {
  constructor(color:string){
    super(color);
  }
  private drive2(): void {
    console.log("vroom");
  }
  startDrivingProcess(): void {
    this.drive2();
    this.honk();
  }
}

const car2 = new Car2('blue');
car2.startDrivingProcess();

const vehicle3 = new Vehicle2('orange');
console.log(vehicle3.color);
