import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

@IonicPage()
@Component({
  selector: 'page-bone-detalhes',
  templateUrl: 'bone-detalhes.html',
})
export class BoneDetalhesPage {

  bone;
  screen: any;
  state: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private screenshot: Screenshot, 
    private alertCtrl: AlertController) {
    this.bone = this.navParams.get('bone');
    console.log(this.bone);
  }

  // Reset function we will use to hide the screenshot preview after 1 second
  reset() {
    var self = this;
    setTimeout(function(){ 
      self.state = false;
    }, 1000);
  }

  screenShot() {
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
    let alert = this.alertCtrl.create({
      title: 'Para mais informações',
      subTitle: 'Envie o print salvo em sua galeria para o meu WhatsApp abaixo.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoneDetalhesPage');
  }

}
