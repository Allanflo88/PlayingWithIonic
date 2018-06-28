import { DataProvider } from './../../providers/data/data';
import { EditPage } from './../edit/edit';
import { AddPage } from './../add/add';
import { Component} from '@angular/core';
import { NavController, ActionSheetController, ModalController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items : Observable<any>;

  constructor(public toast: ToastController,public navCtrl: NavController,private provider: DataProvider, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
    this.items = provider.getAll();
  }

  remove(item){
    if (item) {
      this.provider.remove(item)
        .then(() => {
          this.toast.create({ message: 'Contato removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o contato.', duration: 3000 }).present();
        });
    }
    //this.provider.remove(header);
  }

  editar(item){
    let addModal = this.modalCtrl.create(EditPage, {item: item});

    addModal.onDidDismiss((item) => {

      if (item) {
        this.provider.save(item);

      }

    });

    addModal.present();
  }

  add(){
    let addModal = this.modalCtrl.create(AddPage);

    addModal.onDidDismiss((item) => {

      if (item) {
        this.provider.save(item);
        //this.items.push(item);

      }

    });
    addModal.present();
  }

  open(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Editar',
          handler: () =>{
            this.editar(item);
          }

        },{
          text: 'Deletar',
          role: 'destructive',
          handler: () =>{
            
            this.remove(item);
          }
        }
      ]
    });
    actionSheet.present();
  }

}
export class Item{
  header: ''
  content: ''
}