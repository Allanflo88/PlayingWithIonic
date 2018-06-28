import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public user: Observable<any>;

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed in');
      }
      else {
        console.log('User is NOT signed in');
      }
    });
  }

  loginWithEmailAndPassword(email: string,
    password: string): Promise {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((val) => {
          resolve(val);
        }).catch((error) => {
          reject(error);
        })
    })
  }

  logOut(): Promise {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

}
