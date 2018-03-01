import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CamisaProvider } from '../../providers/camisa/camisa';

@IonicPage()
@Component({
  selector: 'page-camisa-detalhes',
  templateUrl: 'camisa-detalhes.html',
})
export class CamisaDetalhesPage {

  camisa;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private CamisaProvider: CamisaProvider) {
    this.camisa = this.navParams.get('camisa');
    console.log(this.camisa);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamisaDetalhesPage');
  }


}
