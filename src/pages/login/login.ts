import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController  } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
     private alertCtrl:AlertController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.slides.paginationType="progress";
    this.slides.lockSwipes(true);
  }

  mostrarInput() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Ingrese el ID del usuario',
          placeholder: 'IDUsuario'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ingresar',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

}
