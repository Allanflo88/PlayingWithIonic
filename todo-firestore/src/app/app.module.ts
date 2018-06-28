import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAx1AdxAaNeoidMh_Q8oACefLwpJgdnLbI",
        authDomain: "todo-firestore-87309.firebaseapp.com",
        databaseURL: "https://todo-firestore-87309.firebaseio.com",
        projectId: "todo-firestore-87309",
        storageBucket: "todo-firestore-87309.appspot.com",
        messagingSenderId: "50673610490"

      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
