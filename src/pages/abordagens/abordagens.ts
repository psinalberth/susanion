import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbordagemDetailsPage } from '../abordagem-details/abordagem-details';
import leaflet from 'leaflet';
/**
 * Generated class for the AbordagensPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-abordagens',
  templateUrl: 'abordagens.html',
})
export class AbordagensPage {

  map;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	setTimeout(() => {
            /*this.map = leaflet.map("map").setView([42.361132, -71.070876], 14);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);*/
            //this.showMarkers();

            this.map = leaflet.map('map');
    leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0cmlja3IiLCJhIjoiY2l2aW9lcXlvMDFqdTJvbGI2eXUwc2VjYSJ9.trTzsdDXD2lMJpTfCVsVuA', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);

    //web location
    this.map.locate({ setView: true});
        })
  }

  editarAbordagem() {
    this.navCtrl.push(AbordagemDetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbordagensPage');
  }

}
