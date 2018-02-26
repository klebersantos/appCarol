import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CamisaPage } from '../camisa/camisa';
import { BonePage } from '../bone/bone';
import { CarteirasPage } from '../carteiras/carteiras';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    ) {
  }

  abrirBone() {
    this.navCtrl.push(BonePage);
  }

  abrirCamisa() {
    this.navCtrl.push(CamisaPage);
  }

  abrirCarteira() {
    this.navCtrl.push(CarteirasPage);
  }



}
