import { Component } from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public total = {
      n1: '',
      n2: ''
  }

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
    
    

  }

  somaToast() {
    let toast = this.toastCtrl.create({
      message: (parseFloat(this.total.n1)  + parseFloat(this.total.n2)).toString(),
      duration: 3000
    });
    toast.present();
  }
  subToast() {
    let toast = this.toastCtrl.create({
      message: (parseFloat(this.total.n1)  - parseFloat(this.total.n2)).toString(),
      duration: 3000
    });
    toast.present();
  }
  multToast() {
    let toast = this.toastCtrl.create({
      message: (parseFloat(this.total.n1)  * parseFloat(this.total.n2)).toString(),
      duration: 3000
    });
    toast.present();
  }
  divToast() {
    let toast = this.toastCtrl.create({
      message: (parseFloat(this.total.n1)  / parseFloat(this.total.n2)).toString(),
      duration: 3000
    });
    toast.present();
  }

}
