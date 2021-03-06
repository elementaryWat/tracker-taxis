import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Geolocation } from '@ionic-native/geolocation';

//Firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { UbicationProvider } from '../providers/ubication/ubication';

import { AgmCoreModule } from '@agm/core';


const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDyZ5jv9gyNpe1aQtEC-Vq1S-D3MMZCOcc",
    authDomain: "tracker-taxi-f7ffb.firebaseapp.com",
    databaseURL: "https://tracker-taxi-f7ffb.firebaseio.com",
    projectId: "tracker-taxi-f7ffb",
    storageBucket: "tracker-taxi-f7ffb.appspot.com",
    messagingSenderId: "205493855780"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    IonicStorageModule.forRoot(),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAC3bNAIrYi6yQKKv8vB21SdndTkZ2_T80'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    UbicationProvider,
    Geolocation
  ]
})
export class AppModule {}
