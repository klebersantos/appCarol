import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CarteirasProvider } from '../../providers/carteiras/carteiras';


@IonicPage()
@Component({
  selector: 'page-carteiras',
  templateUrl: 'carteiras.html',
})
export class CarteirasPage {

  private carteiras: any;
  private items: any;

  public refresher;
  public isRefreshing: boolean = false;
  public loader;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private CarteirasProvider: CarteirasProvider
    ) {
      this.initializeItems();
  }
 
  abrirCarteiraDetalhes(carteira) {
    this.navCtrl.push('CarteirasDetalhesPage', {carteira: carteira});
  }

  carregarCarteiras(){
    this.CarteirasProvider.getCarteiras().subscribe( data => {
      console.log(data);
      this.carteiras = data;
      this.initializeItems();
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
  }

  initializeItems() {
      
    this.items = this.carteiras;
  
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.ttulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarCarteiras();
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
    console.log('ionViewDidLoad CarteirasPage');
    this.abreCarregando();
    this.carregarCarteiras();
  }



}
