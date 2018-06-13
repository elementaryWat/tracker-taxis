import { Platform, UrlSerializer, GESTURE_TOGGLE } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {
  currentUser:any;
  constructor(public db:AngularFirestore,
    private storage:Storage,
    private platform:Platform) {
  }

  validarIdUser(id:string){
    return new Promise((resolve,reject)=>{
      this.db.collection('taxistas', ref => ref.where('username','==',id)).valueChanges().subscribe(data=>{
        if(data.length>0){
          this.currentUser=data[0];
          this.saveToStorage(this.currentUser);
          resolve(true)
        }else{
          resolve(false);
        }
      });
    })
  }

  setCoordsUser(lat:number,long:number){
    
  }

  saveToStorage(user:any){
    if(this.platform.is('cordova')){
      //Celular
      this.storage.set('user',JSON.stringify(user));
    }else{
      localStorage.setItem('user',JSON.stringify(user));
    }
  }

  loadFromStorage(){
    return new Promise((resolve,reject)=>{
      if(this.platform.is('cordova')){
        //Celular
        this.storage.get('user').then(user=>{
          if(user){
            this.currentUser=JSON.parse(user);
            resolve(true);
          }else{
            resolve(false);
          }
        })
      }else{
        if(localStorage.getItem('user')){
          this.currentUser=JSON.parse(localStorage.getItem('user'));
          resolve(true);
        }else{
          resolve(false);
        }
      }
    })
  }

  removeStorage(){
    if(this.platform.is('cordova')){
      //Celular
      this.storage.remove('user')
    }else{
      localStorage.removeItem('user');
    }
  }

}
