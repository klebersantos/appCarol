import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CamisaProvider } from '../../providers/camisa/camisa';
import { Screenshot } from '@ionic-native/screenshot';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-camisa-detalhes',
  templateUrl: 'camisa-detalhes.html',
})
export class CamisaDetalhesPage {

  camisa;
  screen: any;
  state: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private CamisaProvider: CamisaProvider,  
    private screenshot: Screenshot, 
    private alertCtrl: AlertController) {
    this.camisa = this.navParams.get('camisa');
    console.log(this.camisa);
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
    console.log('ionViewDidLoad CamisaDetalhesPage');
  }


}
