import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Color',
      subTitle: this.generateColor(),
      buttons: ['OK']
    });
    alert.present();
  }
  generateColor(){
    var color = (parseInt((Math.random() * 16777215).toString())).toString(16);
    return color;
    
  }

}
