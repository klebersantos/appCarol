import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoneDetalhesPage } from './bone-detalhes';

@NgModule({
  declarations: [
    BoneDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(BoneDetalhesPage),
  ],
})
export class BoneDetalhesPageModule {}
