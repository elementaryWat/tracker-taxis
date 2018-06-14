import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Geolocation } from '@ionic-native/geolocation';
import { UsuarioProvider } from '../usuario/usuario';
import { Subscription } from 'rxjs';

/*
  Generated class for the UbicationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UbicationProvider {
  watch:Subscription;
  constructor(public geolocation: Geolocation,
    private userProvider:UsuarioProvider) {
    console.log("Servicio de geolocalizacion");
  }

  inicializarUbicacion(){
    this.geolocation.getCurrentPosition().then((data) => {
      this.userProvider.setCoordsUser(data.coords.latitude,data.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.watch = this.geolocation.watchPosition()
      .subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log(data.coords);
      
      this.userProvider.setCoordsUser(data.coords.latitude,data.coords.longitude);
    });
  }

  detenerUbicacion(){
    this.watch.unsubscribe();
  }
}
