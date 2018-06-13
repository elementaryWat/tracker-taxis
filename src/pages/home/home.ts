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

  constructor(public navCtrl: NavController,
    private userProvider:UsuarioProvider,
    private ubicationProvider:UbicationProvider) {
  }

  salir(){
    this.userProvider.removeStorage();
    // this.ubicationProvider.detenerUbicacion();
    this.navCtrl.setRoot(LoginPage);
  }

}
