import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Geolocation } from '@ionic-native/geolocation';
import { UsuarioProvider } from '../usuario/usuario';

/*
  Generated class for the UbicationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UbicationProvider {

  constructor(public geolocation: Geolocation,
    private userProvider:UsuarioProvider) {
    console.log("Servicio de geolocalizacion");

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
