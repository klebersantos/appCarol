import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CamisaProvider } from '../../providers/camisa/camisa';


@IonicPage()
@Component({
  selector: 'page-camisa',
  templateUrl: 'camisa.html',
})
export class CamisaPage {

  private camisa: any;
  private items: any;

  public refresher;
  public isRefreshing: boolean = false;
  public loader;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private CamisaProvider: CamisaProvider
    ) {
      this.initializeItems();
  }

 
  abrirCamisaDetalhes(camisa) {
    this.navCtrl.push('CamisaDetalhesPage', {camisa: camisa});
  }
  

  carregarCamisa(){
    this.CamisaProvider.getCamisa().subscribe( data => {
      console.log(data);
      this.camisa = data;
      this.initializeItems();
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
  }

  
  

  initializeItems() {
      
    this.items = this.camisa;
  
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarCamisa();
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
    console.log('ionViewDidLoad CamisaPage');
    this.abreCarregando();
    this.carregarCamisa();
  }



}