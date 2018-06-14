import { LoginPage } from './../login/login';
import { UbicationProvider } from './../../providers/ubication/ubication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public navCtrl: NavController,
    private ubicationProvider:UbicationProvider,
    public userProvider:UsuarioProvider) {
  }

  ionViewDidEnter(){
    this.userProvider.taxista.valueChanges().subscribe(data=>{
      this.lat=data.lat;
      this.lng=data.lng;
    })
    this.ubicationProvider.inicializarUbicacion();
  }

  salir(){
    this.userProvider.removeStorage();
    this.ubicationProvider.detenerUbicacion();
    this.navCtrl.setRoot(LoginPage);
  }

}
