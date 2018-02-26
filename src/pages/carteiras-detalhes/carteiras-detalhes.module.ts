import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarteirasDetalhesPage } from './carteiras-detalhes';

@NgModule({
  declarations: [
    CarteirasDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(CarteirasDetalhesPage),
  ],
})
export class CarteirasDetalhesPageModule {}
