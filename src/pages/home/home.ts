import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PromocaoProvider } from '../../providers/promocao/promocao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private home: any;

  public refresher;
  public isRefreshing: boolean = false;
  public loader;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private PromocaoProvider: PromocaoProvider
  ) {

  }

  carregarHome(){
    this.PromocaoProvider.getPromocao().subscribe( data => {
      console.log(data);
      this.home = data;
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarHome();
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }

  fechaCarregando () {
    this.loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.abreCarregando();
    this.carregarHome();
  }
}
