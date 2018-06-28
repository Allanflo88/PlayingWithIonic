import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IconsPage } from '../../pages/icons/icons';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToIconsPage () {
    this.navCtrl.push(IconsPage);
  }

}
