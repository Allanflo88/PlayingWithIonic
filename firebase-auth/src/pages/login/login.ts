import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  FormBuilder,
  FormGroup,
  Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';

// Import the HomePage component
import { HomePage } from '../home/home';

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

  public form: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private _FB       : FormBuilder,
    private _AUTH     : AuthProvider) {

      this.form = this._FB.group({
        'email'        : ['', Validators.required],
        'password'     : ['', Validators.required]
     });
  }

  logIn() : void
   {
      let email      : any        = this.form.controls['email'].value,
          password   : any        = this.form.controls['password'].value;

      this._AUTH.loginWithEmailAndPassword(email, password)
      .then((auth : any) =>
      {
         this.navCtrl.setRoot(HomePage);
      })
      .catch((error : any) =>
      {
         console.log(error.message);
      });
   }

}
