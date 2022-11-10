import { Loader, LoaderOptions } from 'google-maps';

import { Company } from './Company';
import { User } from './User';

const options: LoaderOptions = {
  /* todo */
};
const loader = new Loader('00000-11111111', options);

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color:string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, user: User, company: Company) {
    loader.load().then(function (google) {
      const googleMap = new google.maps.Map(document.getElementById(divId), {
        center: { lat: 0, lng: 0 },
        zoom: 1,
      });
      const addMarker = (
        map: google.maps.Map,
        mappable: Mappable
      ): google.maps.Marker => {
        const marker = new google.maps.Marker({
          map: map,
          position: {
            lat: mappable.location.lat,
            lng: mappable.location.lng,
          },
        });
        marker.addListener('click', () => {
          const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent(),
          });
          infoWindow.open(googleMap, marker);
        });
        return marker;
      };
      const userMarker = addMarker(googleMap, user);
      const companyMarker = addMarker(googleMap, company);
    });
  }
}
