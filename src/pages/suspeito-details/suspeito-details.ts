import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the SuspeitoDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-suspeito-details',
  templateUrl: 'suspeito-details.html',
})
export class SuspeitoDetailsPage {

  private suspeito: any;
  public base64Image: string;
  private title: string;

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, 
    private camera: Camera) {
  	 
     this.suspeito = this.navParams.data;

     if (this.suspeito.id) {
       this.title = 'Detalhes de ' + this.suspeito.apelido;

     } else {
       this.title = 'Novo Suspeito';
     }

     this.formGroup = fb.group({
       'nome': ['', Validators.compose([Validators.required])],
       'apelido': '',
       'identificacao': '',
       'nome_da_mae': '',
       'data_nascimento': ''
     });

  	/*if (this.suspeito == null) {
  		this.suspeito = this.formBuilder.group({
  			nome: [''],
  			apelido: [''],
  			nome_da_mae: ['']
  		});
  	}*/
  }

  onSubmit() {
  	console.log(this.suspeito);
  }

  takePicture(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }
}
