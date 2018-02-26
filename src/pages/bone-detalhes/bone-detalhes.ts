import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bone-detalhes',
  templateUrl: 'bone-detalhes.html',
})
export class BoneDetalhesPage {

  bone;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bone = this.navParams.get('bone');
    console.log(this.bone);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoneDetalhesPage');
  }

}
