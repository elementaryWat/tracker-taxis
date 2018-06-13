import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {
  currentUser:any;
  constructor(public db:AngularFirestore) {
  }

  validarIdUser(id:string){
    return new Promise((resolve,reject)=>{
      this.db.collection('taxistas', ref => ref.where('username','==',id)).valueChanges().subscribe(data=>{
        if(data.length>0){
          this.currentUser=data[0];
          resolve(true)
        }else{
          resolve(false);
        }
      });
    })
  }

}
