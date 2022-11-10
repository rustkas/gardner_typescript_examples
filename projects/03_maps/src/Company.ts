import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'green';
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company name: ${this.companyName}<h3>
    <h3>Catchphrase: ${this.catchPhase}<h3>
    </div>
    `;
  }
}
