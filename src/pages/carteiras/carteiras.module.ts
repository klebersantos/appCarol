import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarteirasPage } from './carteiras';

@NgModule({
  declarations: [
    CarteirasPage,
  ],
  imports: [
    IonicPageModule.forChild(CarteirasPage),
  ],
})
export class CarteirasPageModule {}
