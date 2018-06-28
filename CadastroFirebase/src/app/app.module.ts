import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactProvider } from '../providers/contact/contact';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCNWhA50yOr7iQcyWw_Gdz2laLl_d7CFsk",
      authDomain: "testeionic-94cec.firebaseapp.com",
      databaseURL: "https://testeionic-94cec.firebaseio.com",
      projectId: "testeionic-94cec",
      storageBucket: "testeionic-94cec.appspot.com",
      messagingSenderId: "117802235297"

    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactProvider
  ]
})
export class AppModule { }
