import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  todo = {header: "",
          content: ""}

  constructor(public navCtrl: NavController,public navParams: NavParams, public view: ViewController) {
  }

  onSubmit(){
    this.view.dismiss(this.todo);
  }

}
