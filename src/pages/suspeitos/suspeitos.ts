import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuspeitoDetailsPage} from '../suspeito-details/suspeito-details';
import { SuspeitosProvider } from '../../providers/suspeitos/suspeitos';

/**
 * Generated class for the SuspeitosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-suspeitos',
  templateUrl: 'suspeitos.html',
})
export class SuspeitosPage {

  suspeitos: Array<any>;
  searchKey: string = "";
  mode: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: SuspeitosProvider) {
  	this.findAll();

    this.mode = navParams.get("mode");
  }

  findAll() {
  	this.service.findAll().then(data => this.suspeitos = data);
  }

  selecionarSuspeito(suspeito) {
    if (this.mode === "lookup") {
      return suspeito;
    } else {
      this.editarSuspeito(suspeito);
    }
  }

  editarSuspeito(suspeito) {
  	this.navCtrl.push(SuspeitoDetailsPage, suspeito);
  }

  onInput(event) {
        this.service.findByName(this.searchKey)
            .then(data => {
                this.suspeitos = data;
            })
            .catch(error => alert(JSON.stringify(error)));
    }

  onCancel(event) {
  	this.findAll();
  	console.log('Me');
  }

}
