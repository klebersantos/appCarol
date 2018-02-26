import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BoneProvider } from '../../providers/bone/bone';


@IonicPage()
@Component({
  selector: 'page-bone',
  templateUrl: 'bone.html',
})
export class BonePage {

  private bone: any;
  private items: any;

  public refresher;
  public isRefreshing: boolean = false;
  public loader;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private BoneProvider: BoneProvider
    ) {
      this.initializeItems();
  }

 
  abrirBoneDetalhes(bone) {
    this.navCtrl.push('BoneDetalhesPage', {bone: bone});
  }
  

  carregarBone(){
    this.BoneProvider.getBone().subscribe( data => {
      console.log(data);
      this.bone = data;
      this.initializeItems();
      this.fechaCarregando();
      if(this.isRefreshing){
        this.refresher.complete();
        this.isRefreshing = false;
      }
    });
  }

  initializeItems() {
      
    this.items = this.bone;
  
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
    this.carregarBone();
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
    console.log('ionViewDidLoad BonePage');
    this.abreCarregando();
    this.carregarBone();
  }



}

