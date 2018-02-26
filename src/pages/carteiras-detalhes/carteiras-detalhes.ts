import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-carteiras-detalhes',
  templateUrl: 'carteiras-detalhes.html',
})
export class CarteirasDetalhesPage {

  carteira;

  constructor(
    public navCtrl: NavController, public navParams: NavParams) {
    this.carteira = this.navParams.get('carteira');
    console.log(this.carteira);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarteirasDetalhesPage');
  }

}
