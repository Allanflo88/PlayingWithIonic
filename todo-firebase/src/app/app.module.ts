import { EditPage } from './../pages/edit/edit';
import { AddPage } from './../pages/add/add';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCc5XfvsJdIRcW9zEyBsmAB3qqwSI0Q_dE",
    authDomain: "ionic-firebase-acc6b.firebaseapp.com",
    databaseURL: "https://ionic-firebase-acc6b.firebaseio.com",
    projectId: "ionic-firebase-acc6b",
    storageBucket: "ionic-firebase-acc6b.appspot.com",
    messagingSenderId: "37671483051"

      }
    ),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule { }
