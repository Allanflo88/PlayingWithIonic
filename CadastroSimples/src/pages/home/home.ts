import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pessoas = [];
  
  public pessoa = {
    nome: '',
    end: '',
    tel: ''
  }
  
  constructor(public navCtrl: NavController) {

  }

  add(){
    this.pessoas.push(this.pessoa.nome)
  }



}

export class Pessoa{
  nome = ''
  end = ''
  tel = ''

  constructor(nome: string, end: string, tel: string){
    this.nome = nome
    this.end = end
    this.tel = tel
  }
}
