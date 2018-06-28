import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  item = {header: '',
          content: ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.item = this.navParams.get('item');
  }


  onSubmit(){
    this.view.dismiss(this.item);
  }

}
