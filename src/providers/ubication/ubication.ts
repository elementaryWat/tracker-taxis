import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

/*
  Generated class for the UbicationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UbicationProvider {

  constructor(public geolocation: Geolocation) {
    console.log("Servicio de geolocalizacion");
    
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords);
      
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
