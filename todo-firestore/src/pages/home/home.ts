import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoCollection: AngularFirestoreCollection<Todo>;

  todos: Observable<Todo[]>;

  todo: Todo = {titulo: "", sub: "", dataCri: "" };

  constructor(public navCtrl: NavController, private afs: AngularFirestore) {

  }

  ionViewWillEnter(){
    this.todoCollection = this.afs.collection('todo', ref => ref.orderBy('titulo'));
    this.todos = this.todoCollection.valueChanges();
  }

  add(){
    this.todo.dataCri = (new Date()).toDateString();
    this.afs.collection('todo').add(this.todo);
  }

}

export class Todo{
  titulo: string
  sub: string
  dataCri: string
}
