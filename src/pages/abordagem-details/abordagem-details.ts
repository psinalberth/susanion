import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuspeitosPage } from '../suspeitos/suspeitos';

/**
 * Generated class for the AbordagemDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-abordagem-details',
  templateUrl: 'abordagem-details.html',
})
export class AbordagemDetailsPage {


  private abordagem = {
  	data: new Date().toISOString(),
  	suspeito: {
  	   nome: '',
  	   apelido: ''
  	}
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbordagemDetailsPage');
  }

  showSuspeitos() {
  	this.navCtrl.push(SuspeitosPage, {mode:"lookup"});
  }

  onSubmit() {

  }

  hello() {
  	console.log('Hii');
  }

}
