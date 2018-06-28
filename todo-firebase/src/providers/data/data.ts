import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  private PATH = 'todo/';

  constructor(private db: AngularFireDatabase) {
    
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('header'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }
 
  save(todo: any) {
    return new Promise((resolve, reject) => {
      if (todo.key) {
        this.db.list(this.PATH)
          .update(todo.key, { header: todo.header, content: todo.content })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ header: todo.header, content: todo.content })
          .then(() => resolve());
      }
    })
  }
 
  remove(item) {
    return this.db.list(this.PATH).remove(item.key);
  }

}
