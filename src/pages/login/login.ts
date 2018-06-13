import { HomePage } from './../home/home';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController, LoadingController, Loading, ToastController  } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Slides) slides: Slides;
  loader:Loading;

  constructor(public navCtrl: NavController,
     private alertCtrl:AlertController,
     private loadingCtrl:LoadingController,
     private toastCtrl:ToastController,
     public navParams: NavParams,
    private usuarioProvider:UsuarioProvider) {
  }

  ionViewDidLoad() {
    this.slides.paginationType="progress";
    this.slides.lockSwipes(true);
  }

  mostrarInput() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Ingrese el ID de seguimiento de taxista",
      inputs: [
        {
          name: 'idUser',
          placeholder: 'IDUsuario'
        },
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ingresar',
          handler: data => {
            console.log(data.idUser);
            this.presentLoading();
            this.validarIdUser(data.idUser);
          }
        }
      ]
    });
    prompt.present();
  }

  validarIdUser(userId:string){
    this.usuarioProvider.validarIdUser(userId).then(existe=>{
      this.loader.dismiss();
      if(existe){
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
      }else{
        this.presentToast("No se ha encontrado ningun taxista con ese ID")
      }
    })
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Validando ID del usuario"
    });
    this.loader.present();
  }

  presentToast(message:string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ingresar(){
    this.navCtrl.setRoot(HomePage);
  }

}
