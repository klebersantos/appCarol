import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamisaDetalhesPage } from './camisa-detalhes';

@NgModule({
  declarations: [
    CamisaDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(CamisaDetalhesPage),
  ],
})
export class CamisaDetalhesPageModule {}
